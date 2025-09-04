const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const Course = require("../models/course"); // import your Course model

const createPaymentIntent = async (req, res) => {
  try {
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({ error: "Course ID is required" });
    }

    // Fetch course from MongoDB Atlas
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    if (!course.price || isNaN(course.price)) {
      return res.status(400).json({ error: "Invalid course price" });
    }

    // Stripe expects amount in **cents** (e.g., $20 = 2000)
    const amount = Math.round(course.price * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      automatic_payment_methods: { enabled: true },
      metadata: {
        courseId: course._id.toString(),
        courseName: course.name,
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
};

module.exports = { createPaymentIntent };
