
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
const CollegeExperience= require('../models/CollegeExperience')
const WorkExperience= require('../models/WorkExperience')
const Resume= require('../models/Resume')
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const addAdmin = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    // Create a new admin with the hashed password
    const newAdmin = new Admin({ email, username, password: hashedPassword });
    
    // Save the admin to the database
    const savedAdmin = await newAdmin.save();

    res.status(201).json(savedAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addAdmin };


const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Placeholder logic: Validate input and update the admin
    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      { email, username, password },
      { new: true } // Return the modified document
    );

    if (updatedAdmin) {
      res.json(updatedAdmin);
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
    if (deletedAdmin) {
      res.json({ message: 'Admin deleted' });
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Generic approval API
const approveExperience = async (req, res) => {
  const { experienceId } = req.params;
  const { type } = req.body; // Extract the experience type from the payload

  try {
    let updatedExperience;

    // Handle different types of experiences
    switch (type) {
      case 'college':
        updatedExperience = await CollegeExperience.findByIdAndUpdate(
          experienceId,
          { approved: true },
          { new: true }
        );
        break;
      case 'work':
        updatedExperience = await WorkExperience.findByIdAndUpdate(
          experienceId,
          { approved: true },
          { new: true }
        );
        break;
      case 'resume':
        updatedExperience = await Resume.findByIdAndUpdate(
          experienceId,
          { approved: true },
          { new: true }
        );
        break;
      default:
        return res.status(400).json({ message: 'Invalid experience type' });
    }

    if (!updatedExperience) {
      return res.status(404).json({ message: `${type} experience not found` });
    }

    res.json(updatedExperience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { approveExperience,getAdmins, addAdmin, getAdmin, updateAdmin, deleteAdmin };
