const Admin = require('../models/Admin');

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

    // Placeholder logic: Validate input and create a new admin
    const newAdmin = new Admin({ email, username, password });
    const savedAdmin = await newAdmin.save();

    res.status(201).json(savedAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

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

module.exports = { getAdmins, addAdmin, getAdmin, updateAdmin, deleteAdmin };
