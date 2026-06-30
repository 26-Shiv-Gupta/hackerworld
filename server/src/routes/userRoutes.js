const express = require('express')
const { getAllUsers, getUserByClerkId } = require ('../controllers/userController.js');

const router = express.Router();

router.route('/').get(getAllUsers)
router.route('/:clerkId').get(getUserByClerkId)

module.exports = router