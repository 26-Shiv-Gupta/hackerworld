const mongoose = require('mongoose');


const homeCourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  level: String,
  duration: String,
  image: String,  // For ₹7000
  enrollmentLink: String,
});

module.exports = mongoose.model('homeCourse', homeCourseSchema);
