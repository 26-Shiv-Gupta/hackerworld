const express = require("express");
const {
    getAllUsers,
    getUserByClerkId,
    getMyCourses,
} = require("../controllers/userController.js");
const { requireAuth } = require("@clerk/express");

const router = express.Router();

router.route("/").get(getAllUsers);

// Logged-in user's enrolled courses
router
    .route("/my-courses")
    .get(requireAuth(), getMyCourses);

router.route("/:clerkId").get(getUserByClerkId);

module.exports = router;