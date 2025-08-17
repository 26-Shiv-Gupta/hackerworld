const mongoose = require('mongoose');

const CareersSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dept: { type: String, required: true },       // Department
  location: { type: String, required: true },
  type: { type: String, required: true } 
});

module.exports = mongoose.model('Careers', CareersSchema);
