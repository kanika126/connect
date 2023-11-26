const Resume = require('../models/Resume');

const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addResume = async (req, res) => {
  try {
    // Placeholder logic: Validate input and create a new resume
    const newResume = new Resume(req.body);
    const savedResume = await newResume.save();

    res.status(201).json(savedResume);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateResume = async (req, res) => {
  try {
    // Placeholder logic: Validate input and update the resume
    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the modified document
    );

    if (updatedResume) {
      res.json(updatedResume);
    } else {
      res.status(404).json({ message: 'Resume not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteResume = async (req, res) => {
  try {
    const deletedResume = await Resume.findByIdAndDelete(req.params.id);
    if (deletedResume) {
      res.json({ message: 'Resume deleted' });
    } else {
      res.status(404).json({ message: 'Resume not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getResumes, addResume, updateResume, deleteResume };
