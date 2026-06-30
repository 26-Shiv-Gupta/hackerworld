const express = require("express");
const { clerkWebhookHandler } = require("../controllers/webhookController");

const router = express.Router();

/*
  IMPORTANT: Yahan express.raw() use kiya hai (na ki express.json()),
  kyunki Svix signature verify karne ke liye EXACT raw bytes chahiye hote hain.
  Agar JSON parse ki hui body pass karoge, to signature verification fail ho jayegi.
*/
router.post(
  "/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhookHandler
);

module.exports = router;