const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Course = require("../models/course"); // ✅ Import the model

exports.createPaymentIntent = async (req, res) => {
  try {
    const { courseId } = req.body;
    console.log("Received courseId:", courseId);

    // Find course in DB
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: course.price * 100, // convert ₹3499 to paise
      currency: "inr",            // change to "usd" if charging in dollars
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
};
