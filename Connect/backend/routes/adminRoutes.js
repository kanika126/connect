const express = require('express');
const { getAdmins, addAdmin, getAdmin, updateAdmin, deleteAdmin,approveExperience } = require('../controllers/adminController');
const router = express.Router();

router.route('/')
    .get(getAdmins)
    .post(addAdmin)
    .put(updateAdmin)
    .delete(deleteAdmin);

router.put('/approve/:experienceId', approveExperience);

module.exports = router;
