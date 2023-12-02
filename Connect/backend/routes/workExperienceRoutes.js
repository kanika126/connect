const express = require('express');
const { getWorkExperiences, addWorkExperience, updateWorkExperience, deleteWorkExperience } = require('../controllers/workExperienceController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import your authentication middleware
const router = express.Router();

router.route('/')
    .get( getWorkExperiences)
    .post( addWorkExperience)
    .put( updateWorkExperience)
    .delete( deleteWorkExperience);

module.exports = router;
