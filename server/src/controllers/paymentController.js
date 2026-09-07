const Stripe = require("stripe");
const Course = require("../models/course");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
    try {
        const { courseId } = req.body;
        const { userId } = req.auth();

        if (!courseId) {
            return res.status(400).json({
                success: false,
                message: "Course ID is required",
            });
        }

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        const amount = course.price;

        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid course price",
            });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency: "inr",

            automatic_payment_methods: {
                enabled: true,
            },

            metadata: {
                courseId: course._id.toString(),
                userId,
            },
        });

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
};

module.exports = {
    createPaymentIntent,
};