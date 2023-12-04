// authRoutes.js
const express = require('express');
const router = express.Router();
const { adminLogin, AlumniLogin,sendOtp,verifyOtp } = require('../controllers/AuthController');
 // Assuming you have a token verification middleware
router.post('/admin', adminLogin);
router.post( '/sendotp' ,sendOtp )
router.post( '/verifyotp', verifyOtp )
router.get('/alumni',AlumniLogin )



module.exports = router;