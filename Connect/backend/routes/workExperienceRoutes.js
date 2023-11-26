const express = require('express');
const { getWorkExperiences, addWorkExperience, updateWorkExperience, deleteWorkExperience } = require('../controllers/workExperienceController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import your authentication middleware
const router = express.Router();

router.route('/')
    .get(authenticateUser, getWorkExperiences)
    .post(authenticateUser, addWorkExperience)
    .put(authenticateUser, updateWorkExperience)
    .delete(authenticateUser, deleteWorkExperience);

module.exports = router;
