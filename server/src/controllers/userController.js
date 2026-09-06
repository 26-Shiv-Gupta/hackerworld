const User = require("../models/userModel.js");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch users",
        });
    }
};


const getUserByClerkId = async (req, res) => {
    try {
        const { clerkId } = req.params;

        const user = await User.findOne({ clerkId });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json(user);

    } catch (error) {
        console.error("Error fetching user:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch user",
        });
    }
};


// Get logged-in user's enrolled courses
const getMyCourses = async (req, res) => {
    try {
        // Clerk se logged-in user's ID
        const { userId } = req.auth();

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        // Clerk ID ke through MongoDB user find karo
        const user = await User.findOne({
            clerkId: userId,
        }).populate("enrolledCourses");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            courses: user.enrolledCourses,
        });

    } catch (error) {
        console.error("Error fetching my courses:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch enrolled courses",
        });
    }
};


module.exports = {
    getAllUsers,
    getUserByClerkId,
    getMyCourses,
};