const { clerkClient } = require('@clerk/express');

const updateRoleToEducator = async (req, res) => {
    try {
        const userId = req.auth.userId;  // Clerk middleware must populate req.auth
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'educator',
            }
        });
        res.json({ success: true, message: 'You can publish a course now' });
    } catch (error) {
        console.error('Error updating role:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { updateRoleToEducator };
