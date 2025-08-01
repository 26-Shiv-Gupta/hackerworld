const express = require('express')
const router = express.Router()

const { gethomeCourses, sethomeCourse, updatehomeCourse, deletehomeCourse } = require('../controllers/homecoursesController')

router.route('/').get(gethomeCourses).post(sethomeCourse)
router.route('/:id').put(updatehomeCourse).delete(deletehomeCourse)

module.exports = router