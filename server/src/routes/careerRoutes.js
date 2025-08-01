const express = require('express');
const router = express.Router();

const { getCareers, setCareer, updateCareer, deleteCareer } = require('../controllers/careersController');

router.route('/').get(getCareers).post(setCareer)
router.route('/:id').put(updateCareer).delete(deleteCareer);

module.exports = router;
