const express = require('express');
const { getAdmins, addAdmin, getAdmin, updateAdmin, deleteAdmin,approveCollegeExperience } = require('../controllers/adminController');
const router = express.Router();

router.route('/')
    .get(getAdmins)
    .post(addAdmin)
    .put(updateAdmin)
    .delete(deleteAdmin);

router.put('/approve/:experienceId', approveCollegeExperience);

module.exports = router;
