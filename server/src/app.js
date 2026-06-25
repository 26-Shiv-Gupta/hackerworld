const express = require('express'); // Express framework import kar rahe hain. Server aur APIs banane ke liye use hota hai.
const cors = require('cors'); // CORS (Cross-Origin Resource Sharing) middleware. Frontend aur backend alag domains/ports par ho to requests allow karta hai.
require('dotenv').config();
const connectDB = require('./config/db'); // MongoDB se connection establish karne wala custom function.
const { clerkWebhooks } = require('./controllers/webhooks'); // Clerk webhook controller. Clerk se aane wale events (user create, delete, update) handle karega.
const educatorRouter = require('./routes/educatorRoutes'); // Educator-related routes. Teacher/educator ke APIs yahan define hongi.
const { clerkMiddleware } = require('@clerk/express'); // Clerk authentication middleware. User login/authentication verify karta hai.
const paymentRoutes = require('./routes/paymentRoutes') // Payment-related routes. Payment create, verify, success, failure etc. handle karenge.

const port = process.env.PORT || 5000;
const app = express();

// CORS - allow Authorization header from frontend as well
app.use(cors({
  origin: [
    'https://techhackworld.onrender.com',
    "https://hackerworld.onrender.com",
    "http://localhost:5173", 
    "https://hackerworld-admin.onrender.com/"
  ],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Connect DB
connectDB();

// Clerk middleware
app.use(clerkMiddleware());

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
app.use("/api/payment", paymentRoutes);

app.listen(port, () => console.log(`server started on port ${port}`));
