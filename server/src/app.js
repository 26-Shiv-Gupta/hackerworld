// server/src/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const { clerkWebhooks } = require('./controllers/webhooks');
const educatorRouter = require('./routes/educatorRoutes');
const { clerkMiddleware } = require('@clerk/express');

const port = process.env.PORT || 5000;
const app = express();

// CORS - allow Authorization header from frontend as well
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Connect DB
connectDB();

// Clerk middleware
app.use(clerkMiddleware());

// IMPORTANT: mount stripe webhook BEFORE body parsers so stripe can access raw body for signature verification
app.use('/api', require('./routes/stripeWebhook'));

// Body parsers for all other routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Other routes
app.post('/clerk', express.json(), clerkWebhooks);
app.use('/api/educator', educatorRouter);
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/careers', require('./routes/careerRoutes'));
app.use('/api/homeCourses', require('./routes/homeCoursesRoutes'));
app.use('/api/homeReviews', require('./routes/homeReviewsRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));

app.listen(port, () => console.log(`server started on port ${port}`));
