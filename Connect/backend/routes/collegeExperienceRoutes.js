const express = require('express');
const { getCollegeExperiences, addCollegeExperience, updateCollegeExperience, deleteCollegeExperience } = require('../controllers/collegeExperienceController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import your authentication middleware
const router = express.Router();

router.route('/')
    .get(authenticateUser, getCollegeExperiences)
    .post(authenticateUser, addCollegeExperience)
    .put(authenticateUser, updateCollegeExperience)
    .delete(authenticateUser, deleteCollegeExperience);

module.exports = router;
