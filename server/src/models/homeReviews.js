const mongoose = require('mongoose');


const homeReviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    content: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true }
});

module.exports = mongoose.model('homeReview', homeReviewSchema);