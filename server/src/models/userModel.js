const mongoose = require("mongoose");

/*
  Yeh hamara apna defined format hai jisme Clerk se aaya data
  MongoDB me store hoga. Clerk apna raw data bhejta hai,
  lekin hum sirf wahi fields rakh rahe hain jo hamare app ko chahiye,
  + apne extra fields (role, isActive) bhi add kar sakte hain.
*/

const userSchema = new mongoose.Schema(
  {
    // Clerk ka unique user id -> isi se future me update/delete match karenge
    clerkId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    firstName: {
      type: String,
      default: "",
    },

    lastName: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    // Apna custom field - default role
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt automatically add ho jayenge
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;