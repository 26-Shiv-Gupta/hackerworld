// const express = require("express");
// const { createPaymentIntent } = require("../controllers/paymentController");
// const { requireAuth } = require("../config/clerk");

// const router = express.Router();

// // Protected route
// router.post("/create-intent", requireAuth, createPaymentIntent);

// module.exports = router;
  




const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const Course = require("../models/course"); // import your course model

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { courseId } = req.body;

    // 1. Find the course in DB
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // 2. Create checkout session dynamically
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "upi"],  // allow UPI + Card
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: course.title, // course title
              description: course.description, // optional
            },
            unit_amount: course.price * 100, // Stripe expects amount in paise
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://techhackworld.onrender.com/success",
      cancel_url: "https://techhackworld.onrender.com/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
