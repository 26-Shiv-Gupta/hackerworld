const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db');
const { clerkWebhooks } = require('./controllers/webhooks');
const educatorRouter = require('./routes/educatorRoutes');
const {clerkMiddleware} = require('@clerk/express')

// Port
const port = process.env.PORT || 5000

// Initialize Express
const app = express()

// Connet to DataBase
connectDB()

// Middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(clerkMiddleware())


// Routes
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/api/educator', express.json(), educatorRouter)
app.use('/api/courses', require('./routes/courseRoutes'))
app.use('/api/careers', require('./routes/careerRoutes'))
app.use('/api/homeCourses', require('./routes/homeCoursesRoutes'))
app.use('/api/homeReviews', require('./routes/homeReviewsRoutes'))

app.listen(port, () => console.log(`server started on port ${port}`))
