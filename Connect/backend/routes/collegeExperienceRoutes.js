const express = require('express');
const { getCollegeExperiences, addCollegeExperience, updateCollegeExperience, deleteCollegeExperience } = require('../controllers/collegeExperienceController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import your authentication middleware
const router = express.Router();

router.route('/')
    .get( getCollegeExperiences)
    .post( addCollegeExperience)
    .put( updateCollegeExperience)
    .delete( deleteCollegeExperience);

module.exports = router;
