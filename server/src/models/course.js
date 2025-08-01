const mongoose = require('mongoose');

// Optional: Mentor schema (keep separate if you have multiple mentors/users)
const MentorSchema = new mongoose.Schema({
  name: String,
  title: String,
  bio: String,
  image: String
}, {_id: false});

// Student Review schema
const ReviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  comment: String
}, {_id: false});

// FAQ schema
const FAQSchema = new mongoose.Schema({
  question: String,
  answer: String
}, {_id: false});

// Module and topics schema
const ModuleSchema = new mongoose.Schema({
  name: String,
  topics: [String]
}, {_id: false});

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  level: String,
  duration: String,
  image: String,
  price: Number,          // For ₹3499
  originalPrice: Number,  // For ₹7000
  enrollmentLink: String,

  features: [String],

  mentor: MentorSchema,   // Embedded; you could reference if shared

  modules: [ModuleSchema],

  reviews: [ReviewSchema],

  faqs: [FAQSchema]
});

module.exports = mongoose.model('Course', CourseSchema);
