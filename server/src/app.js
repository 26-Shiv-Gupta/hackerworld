const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv').config()


const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()
const app = express()

// Middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/courses', require('./routes/courseRoutes'))
app.use('/api/careers', require('./routes/careerRoutes'))
app.use('/api/homeCourses', require('./routes/homeCoursesRoutes'))

app.listen(port, () => console.log(`server started on port ${port}`))