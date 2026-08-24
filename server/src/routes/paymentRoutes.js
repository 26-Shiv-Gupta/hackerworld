const express = require("express");
const Stripe = require("stripe");
const { requireAuth } = require("@clerk/express");
const Course = require("../models/course");

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


// Create Payment Intent
router.post("/create-intent", requireAuth(), async (req, res) => {
    try {
        // Get courseId from frontend
        const { courseId } = req.body;

        // Validate courseId
        if (!courseId) {
            return res.status(400).json({
                success: false,
                message: "Course ID is required",
            });
        }

        // Find course in MongoDB
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        // Get course price
        const amount = course.price;

        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid course price",
            });
        }

        // Create Stripe PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency: "inr",

            metadata: {
                courseId: course._id.toString(),
            },
        });

        // Send client secret to frontend
        res.status(200).json({
            success: true,
            clientSecret: paymentIntent.client_secret,
        });

    } catch (error) {
        console.error("Payment Intent Error:", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;