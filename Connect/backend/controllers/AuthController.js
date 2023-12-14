const Admin = require('../models/Admin');
const Alumni = require('../models/Alumni');
const bcrypt = require('bcrypt');
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
  try {
    const { email, password } = req.body;

    // Find the alumni by email
    const alumni = await Alumni.findOne({ email });

    if (!alumni) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, alumni.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If authentication succeeds, generate a JWT token
    const tokenPayload = {
      id: alumni._id,
      role: 'alumni',
      username: alumni.name, // Replace with the actual property that contains the name
    };

    const authtoken = generateToken(tokenPayload);
    const success = true
    

    res.status(200).json({ success ,message: 'Alumni login successful', authtoken });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      console.log('Admin not found');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    console.log('passwordMatch:', passwordMatch);

    if (!passwordMatch) {
      console.log('Password does not match');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If authentication succeeds, generate a JWT token
    const tokenPayload = {
      id: admin._id,
      role: 'admin',
      username: admin.username, // Replace with the actual property that contains the username
    };

    const authtoken = generateToken(tokenPayload);
    const success = true
    

    res.status(200).json({ success ,message: 'Admin login successful', authtoken });
  } catch (error) {
    console.error('Error in adminLogin:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports = { alumniLogin, adminLogin,sendOtp, verifyOtp };