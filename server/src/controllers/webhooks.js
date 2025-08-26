const { Webhook } = require('svix');
const User = require('../models/User.js');

// API Controller Function to Manage Clerk User with database
const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // Verify Clerk webhook signature
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        const { data, type } = req.body;

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id, // store Clerk ID as MongoDB _id
                    email: data.email_addresses?.[0]?.email_address || null,
                    name: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
                    courses: [] // new users start with no courses
                };
                await User.create(userData);
                res.json({ success: true });
                break;
            }

            case 'user.updated': {
                const userData = {
                    email: data.email_addresses?.[0]?.email_address || null,
                    name: `${data.first_name || ''} ${data.last_name || ''}`.trim()
                };
                await User.findByIdAndUpdate(data.id, userData);
                res.json({ success: true });
                break;
            }

            case 'user.deleted': {
                await User.findByIdAndDelete(data.id);
                res.json({ success: true });
                break;
            }

            default:
                res.json({ success: true, message: 'Unhandled event type' });
                break;
        }

    } catch (error) {
        console.error('Webhook error:', error);
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { clerkWebhooks };
