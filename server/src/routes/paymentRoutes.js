const express = require("express");
const { createPaymentIntent } = require("../controllers/paymentController");
const { requireAuth } = require("../config/clerk");

const router = express.Router();

// Protected route
router.post("/create-intent", requireAuth, createPaymentIntent);

module.exports = router;
  