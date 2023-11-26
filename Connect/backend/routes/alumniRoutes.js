const express = require('express');
const { getAlumni, addAlumni, updateAlumni, deleteAlumni } = require('../controllers/alumniController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import your authentication middleware
const router = express.Router();

router.route('/')
    .get(authenticateUser, getAlumni)
    .post(authenticateUser, addAlumni)
    .put(authenticateUser, updateAlumni)
    .delete(authenticateUser, deleteAlumni);

module.exports = router;
