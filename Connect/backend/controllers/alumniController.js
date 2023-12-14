const Alumni = require('../models/Alumni');

const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for bcrypt hashing

const CollegeExperience = require('../models/CollegeExperience');
const WorkExperience = require('../models/WorkExperience');

const getWorkExperiencesByAlumniId = async (req, res) => {
  const alumniId = req.params.id;

  try {
    const alumni = await Alumni.findById(alumniId);

    if (!alumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }

    const workExperiences = await WorkExperience.find({ _id: { $in: alumni.workExperiences } });
    res.json(workExperiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getCollegeExperiencesByAlumniId = async (req, res) => {
  const alumniId = req.params.id;
 

  try {
    const alumni = await Alumni.findById(alumniId);
   

    if (!alumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }

    const collegeExperiences = await CollegeExperience.find({ _id: { $in: alumni.collegeExperiences } });
    res.json(collegeExperiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const addAlumni = async (req, res) => {
  try {
    let alumniData = req.body;

    // If it's not an array, convert it to an array with a single element
    if (!Array.isArray(alumniData)) {
      alumniData = [alumniData];
    }

    const savedAlumni = [];
    const errors = [];

    for (const alumni of alumniData) {
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(alumni.password, saltRounds);
      const newAlumni = new Alumni({ ...alumni, password: hashedPassword });

      try {
        // Validate the alumni before saving
        await newAlumni.validate();
        const savedSingleAlumni = await newAlumni.save();
        savedAlumni.push(savedSingleAlumni);
      } catch (error) {
        // Collect errors for erroneous objects
        errors.push({ data: alumni, error: error.message });
      }
    }

    // If there are valid alumni, return a 201 status with the saved alumni
    // If there are errors, return a 400 status with the error details
    if (savedAlumni.length > 0) {
      return res.status(201).json({ savedAlumni, errors });
    } else {
      return res.status(400).json({ errors });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAlumniById = async (req, res) => {
  const alumniId = req.params.id;

  try {
    const alumni = await Alumni.findById(alumniId);

    if (!alumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }

    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: error.message });
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

module.exports = { getWorkExperiencesByAlumniId ,getCollegeExperiencesByAlumniId, getAlumniById,getAlumni, addAlumni, updateAlumni, deleteAlumni };
