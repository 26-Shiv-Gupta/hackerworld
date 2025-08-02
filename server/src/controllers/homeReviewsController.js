const { raw } = require('express');
const Review = require('../models/homeReviews');

// GET all Reviews
const gethomeReviews = async (req, res) => {
    try {
        const Reviews = await Review.find();
        res.status(200).json(Reviews);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// POST create a new Review
const sethomeReview = async (req, res) => {
    try {
        // You could validate here, for now we directly use req.body
        const newReview = await Review.create({
            rating: req.body.rating,
            content: req.body.content,
            name: req.body.name,
            role: req.body.role
        });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(400).json({ message: "Could not create Review", error });
    }
};

// PUT update Review by ID
const updatehomeReview = async (req, res) => {
    try {
        const Review = await Review.findById(req.params.id);
        if (!Review) {
            return res.status(404).json({ message: "Review not found" });
        }
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(400).json({ message: "Could not update Review", error });
    }
};

// DELETE Review by ID
const deletehomeReview = async (req, res) => {
    try {
        const Review = await Review.findById(req.params.id);
        if (!Review) {
            return res.status(404).json({ message: "Review not found" });
        }
        await Review.deleteOne();
        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Could not delete Review", error });
    }
};

module.exports = {
    gethomeReviews,
    sethomeReview,
    updatehomeReview,
    deletehomeReview,
};
