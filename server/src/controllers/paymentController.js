const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
  try {
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({ error: "Course ID is required" });
    }

    // Example: fetch course price from DB instead of hardcoding
    const course = await Course.findOne({ courseId });
    if (!course) return res.status(404).json({ error: "Course not found" });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: course.price, // in smallest unit (e.g., 5000 = ₹50.00)
      currency: "inr",      // must be INR for UPI
      automatic_payment_methods: { enabled: true }, // enables cards, upi, wallets, netbanking
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
};

module.exports = { createPaymentIntent };
