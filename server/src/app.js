const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/courses', require('./routes/courseRoutes'))

app.listen(port, () => console.log(`server started on port ${port}`))