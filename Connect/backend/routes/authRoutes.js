// authRoutes.js
const express = require('express');
const router = express.Router();
const { adminLogin, alumniLogin,sendOtp,verifyOtp } = require('../controllers/AuthController');
 // Assuming you have a token verification middleware
router.post('/admin', adminLogin);
router.post( '/sendotp' ,sendOtp )
router.post( '/verifyotp', verifyOtp )
router.post( '/alumni',alumniLogin )



module.exports = router;