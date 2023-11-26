const WorkExperience = require('../models/WorkExperience');

const getWorkExperiences = async (req, res) => {
  try {
    const workExperiences = await WorkExperience.find();
    res.json(workExperiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addWorkExperience = async (req, res) => {
  try {
    // Placeholder logic: Validate input and create a new work experience
    const newWorkExperience = new WorkExperience(req.body);
    const savedWorkExperience = await newWorkExperience.save();

    res.status(201).json(savedWorkExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateWorkExperience = async (req, res) => {
  try {
    // Placeholder logic: Validate input and update the work experience
    const updatedWorkExperience = await WorkExperience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the modified document
    );

    if (updatedWorkExperience) {
      res.json(updatedWorkExperience);
    } else {
      res.status(404).json({ message: 'Work experience not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteWorkExperience = async (req, res) => {
  try {
    const deletedWorkExperience = await WorkExperience.findByIdAndDelete(req.params.id);
    if (deletedWorkExperience) {
      res.json({ message: 'Work experience deleted' });
    } else {
      res.status(404).json({ message: 'Work experience not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getWorkExperiences, addWorkExperience, updateWorkExperience, deleteWorkExperience };
