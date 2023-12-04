const Admin = require('../models/Admin');
const alumni = require('../models/Alumni');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const nodemailer = require( 'nodemailer' );
const otpGenerator = require( 'otp-generator' );
const otpStorage = new Map();
const secretKey = 'your-secret-key'; // Replace with your actual secret key

// Function to generate a JWT token
function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// Function to generate and store OTP
const generateAndStoreOTP = (email, otp) => {
  const expirationTime = 3 * 60 * 1000; // OTP valid for 5 minutes
  // Store the OTP along with its expiration time
  otpStorage.set(email, otp);
  console.log(otpStorage);

  setTimeout(() => {
    otpStorage.delete(email);
  }, expirationTime); // Remove OTP after 5 minutes
};

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'arnav20363@iiitd.ac.in',
    pass: 'meatiiitdelhi@123', // use env file for this data , also kuch settings account ki change krni padti vo krliyo
  },
});

const sendOtp = async (req, res) => {

  const { email_id } = req.body;
  let otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });
  console.log(otp);
  generateAndStoreOTP(email_id, otp);

  // Create an HTML file with the OTP and other data
  const htmlContent = `
    <html>
      <head>
        <style>
          /* Add your styles here */
        </style>
      </head>
      <body>
        <h1>OTP Verification</h1>
        <p>Your OTP for verification is: <strong>${otp}</strong></p>
      </body>
    </html>
  `;

  // Send OTP via email with the HTML content
  const mailOptions = {
    from: 'btp3517@gmail.com',
    to: email_id,
    subject: 'OTP Verification',
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
};

const verifyOtp = async (req, res) => {
  const { email, enteredOTP } = req.body;
  console.log('Entered OTP:', enteredOTP);
  const storedOTP = otpStorage.get(email);
  console.log('Stored OTP:', storedOTP);

  if (!storedOTP || storedOTP.toString() !== enteredOTP.toString()) {
    return res.status(400).json({ success: false, message: 'Invalid OTP' });
  }

  res.status(200).json({ success: true, message: 'OTP verified successfully' });
};



// Register a new Alumni
// Alumni Login
const alumniLogin = async (req, res) => {
  console.log("Alumni")
  const { email, password } = req.body;
  const Alumni = await alumni.findOne({ email });
  console.log(Alumni)

  if (!Alumni) {
    return res.status(401).json({ message: 'Alumni not found' });
  }

  const validPassword = await argon2.verify(Alumni.password, password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const tokenPayload = {
    id:Alumni._id,
    name: Alumni.name,
    email: Alumni.email,
    role: 'Alumni',
  };

  const authtoken = generateToken(tokenPayload);
  const success = true;

  res.status(200).json({ success, authtoken, message: 'Alumni login successful' });
};

// Admin Login
const adminLogin = async (req, res) => {
  console.log("admin login initiated")
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(401).json({ message: 'Admin not found' });
  }

  const validPassword = await argon2.verify(admin.password, password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const tokenPayload = {
    id:Admin._id,
    username: admin.username,
    role: 'admin',
  };

  const authtoken = generateToken(tokenPayload);
  const success = true;

  res.status(200).json({ success,authtoken, message: 'Admin login successful' });
};



module.exports = { alumniLogin, adminLogin,sendOtp, verifyOtp };