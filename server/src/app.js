const express = require("express"); // Express framework
const cors = require("cors"); // Cross-Origin Resource Sharing
require("dotenv").config();

const connectDB = require("./config/db");

// Clerk
const { clerkMiddleware } = require("@clerk/express");

// Existing Routes
const educatorRouter = require("./routes/educatorRoutes");
const courseRoutes = require("./routes/courseRoutes");
const careerRoutes = require("./routes/careerRoutes");
const homeCoursesRoutes = require("./routes/homeCoursesRoutes");
const homeReviewsRoutes = require("./routes/homeReviewsRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");

// New Routes
const webhookRoutes = require("./routes/webhookRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

/* ======================================================
   CORS
====================================================== */

app.use(
  cors({
    origin: [
      "https://techhackworld.onrender.com",
      "https://hackerworld.onrender.com",
      "https://hackerworld-admin.onrender.com",
      "http://localhost:5173",
      "http://localhost:5174",

      // Optional: CLIENT_URL from .env
      process.env.CLIENT_URL,
    ].filter(Boolean),

    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ======================================================
   DATABASE
====================================================== */

connectDB();

/* ======================================================
   CLERK
====================================================== */

app.use(clerkMiddleware());

/*
|--------------------------------------------------------------------------
| IMPORTANT
|--------------------------------------------------------------------------
| Webhook route MUST come BEFORE express.json().
| webhook route internally uses express.raw()
| for Svix signature verification.
|--------------------------------------------------------------------------
*/

app.use("/api/webhooks", webhookRoutes);

/* ======================================================
   BODY PARSERS
====================================================== */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ======================================================
   API ROUTES
====================================================== */

app.use("/api/users", userRoutes);

app.use("/api/educator", educatorRouter);

app.use("/api/courses", courseRoutes);

app.use("/api/careers", careerRoutes);

app.use("/api/homeCourses", homeCoursesRoutes);

app.use("/api/homeReviews", homeReviewsRoutes);

// app.use("/api/payment", paymentRoutes);

/* ======================================================
   HEALTH CHECK
====================================================== */

app.get("/", (req, res) => {
  res.send("✅ Server is running...");
});

/* ======================================================
   SERVER
====================================================== */

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});