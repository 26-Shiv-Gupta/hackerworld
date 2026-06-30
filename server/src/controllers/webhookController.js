const { Webhook } = require("svix");
const User = require("../models/userModel");

/*
  Clerk teen tarah ke events bhej sakta hai:
  - user.created  -> naya user banao
  - user.updated  -> existing user update karo
  - user.deleted  -> user delete karo

  Hum sabko handle kar rahe hain, taaki MongoDB Clerk ke saath
  hamesha sync rahe.
*/

const clerkWebhookHandler = async (req, res) => {
  try {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
      console.error("❌ CLERK_WEBHOOK_SECRET .env me missing hai");
      return res
        .status(500)
        .json({ success: false, message: "Server misconfigured" });
    }

    // Svix headers jo Clerk request ke saath bhejta hai
    const svix_id = req.headers["svix-id"];
    const svix_timestamp = req.headers["svix-timestamp"];
    const svix_signature = req.headers["svix-signature"];

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Missing svix headers" });
    }

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt;
    try {
      // req.body yahan raw Buffer hona chahiye (route me express.raw() use kiya hai)
      evt = wh.verify(req.body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });
    } catch (err) {
      console.error("❌ Webhook signature verify fail:", err.message);
      return res
        .status(400)
        .json({ success: false, message: "Invalid signature" });
    }

    const { type, data } = evt;

    switch (type) {
      case "user.created": {
        const newUser = {
          clerkId: data.id,
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          email: data.email_addresses?.[0]?.email_address || "",
          profileImage: data.image_url || "",
        };

        // Agar pehle se hai (duplicate webhook retry case) to upsert kar do
        await User.findOneAndUpdate(
          { clerkId: newUser.clerkId },
          newUser,
          {
            upsert: true,
            new: true,
          }
        );

        console.log("✅ User created in MongoDB:", newUser.email);
        break;
      }

      case "user.updated": {
        const updatedUser = {
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          email: data.email_addresses?.[0]?.email_address || "",
          profileImage: data.image_url || "",
        };

        await User.findOneAndUpdate(
          { clerkId: data.id },
          updatedUser
        );

        console.log("🔄 User updated in MongoDB:", data.id);
        break;
      }

      case "user.deleted": {
        await User.findOneAndDelete({ clerkId: data.id });

        console.log("🗑️ User deleted from MongoDB:", data.id);
        break;
      }

      default:
        console.log("ℹ️ Unhandled Clerk event type:", type);
    }

    // Clerk ko 200 jaldi return karna zaroori hai, warna woh retry karega
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Webhook handler error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  clerkWebhookHandler,
};