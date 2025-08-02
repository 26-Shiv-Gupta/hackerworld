const express = require('express')
const router = express.Router()

const { gethomeReviews, sethomeReview, updatehomeReview, deletehomeReview } = require('../controllers/homeReviewsController')

router.route('/').get(gethomeReviews).post(sethomeReview)
router.route('/:id').put(updatehomeReview).delete(deletehomeReview)

module.exports = router