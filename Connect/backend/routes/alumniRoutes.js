const express = require('express');
const { getAlumni, addAlumni, updateAlumni, deleteAlumni } = require('../controllers/alumniController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import your authentication middleware
const router = express.Router();

router.route('/')
    .get( getAlumni)
    .post( addAlumni)
    .put( updateAlumni)
    .delete( deleteAlumni);

module.exports = router;
