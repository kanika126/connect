const Alumni = require('../models/Alumni');

const getAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addAlumni = async (req, res) => {
  try {
    // Placeholder logic: Validate input and create a new alumni
    const newAlumni = new Alumni(req.body);
    const savedAlumni = await newAlumni.save();

    res.status(201).json(savedAlumni);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateAlumni = async (req, res) => {
  try {
    // Placeholder logic: Validate input and update the alumni
    const updatedAlumni = await Alumni.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the modified document
    );

    if (updatedAlumni) {
      res.json(updatedAlumni);
    } else {
      res.status(404).json({ message: 'Alumni not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAlumni = async (req, res) => {
  try {
    const deletedAlumni = await Alumni.findByIdAndDelete(req.params.id);
    if (deletedAlumni) {
      res.json({ message: 'Alumni deleted' });
    } else {
      res.status(404).json({ message: 'Alumni not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAlumni, addAlumni, updateAlumni, deleteAlumni };
