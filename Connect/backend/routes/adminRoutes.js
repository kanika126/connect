const express = require('express');
const { getAdmins, addAdmin, getAdmin, updateAdmin, deleteAdmin } = require('../controllers/adminController');
const router = express.Router();

router.route('/')
    .get(getAdmins)
    .post(addAdmin)
    .put(updateAdmin)
    .delete(deleteAdmin);

module.exports = router;
