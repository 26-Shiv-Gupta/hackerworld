const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dept: { type: String, required: true },       // Department
  location: { type: String, required: true },
  type: { type: String, required: true }        
}, { _id: false });

const CareersSchema = new mongoose.Schema({
  jobs: [JobSchema],
  contactEmail: { type: String, required: true },
});

module.exports = mongoose.model('Careers', CareersSchema);
