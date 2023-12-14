const express = require('express');
const { getAlumni, addAlumni, updateAlumni,getWorkExperiencesByAlumniId, deleteAlumni,getAlumniById,getCollegeExperiencesByAlumniId  } = require('../controllers/alumniController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import your authentication middleware
const router = express.Router();

router.route('/')
    .get( getAlumni)
    .post( addAlumni)
    .put( updateAlumni)
    .delete( deleteAlumni);
router.get('/:id', getAlumniById);
router.get('/clg/:id' ,getCollegeExperiencesByAlumniId)

router.get('/work/:id' ,getWorkExperiencesByAlumniId)

module.exports = router;
