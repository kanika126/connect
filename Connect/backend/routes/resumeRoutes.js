const express = require('express');
const { getResumes, addResume, updateResume, deleteResume } = require('../controllers/resumeController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import your authentication middleware
const router = express.Router();

router.route('/')
    .get( getResumes)
    .post( addResume)
    .put( updateResume)
    .delete( deleteResume);

module.exports = router;
