const CollegeExperience = require('../models/CollegeExperience');

const getCollegeExperiences = async (req, res) => {
  try {
    const collegeExperiences = await CollegeExperience.find();
    res.json(collegeExperiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCollegeExperience = async (req, res) => {
  try {
    // Placeholder logic: Validate input and create a new college experience
    const newCollegeExperience = new CollegeExperience(req.body);
    const savedCollegeExperience = await newCollegeExperience.save();

    res.status(201).json(savedCollegeExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCollegeExperience = async (req, res) => {
  try {
    // Placeholder logic: Validate input and update the college experience
    const updatedCollegeExperience = await CollegeExperience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the modified document
    );

    if (updatedCollegeExperience) {
      res.json(updatedCollegeExperience);
    } else {
      res.status(404).json({ message: 'College experience not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCollegeExperience = async (req, res) => {
  try {
    const deletedCollegeExperience = await CollegeExperience.findByIdAndDelete(req.params.id);
    if (deletedCollegeExperience) {
      res.json({ message: 'College experience deleted' });
    } else {
      res.status(404).json({ message: 'College experience not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCollegeExperiences, addCollegeExperience, updateCollegeExperience, deleteCollegeExperience };
