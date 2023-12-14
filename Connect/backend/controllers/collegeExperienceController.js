const CollegeExperience = require('../models/CollegeExperience');
const Alumni = require('../models/Alumni')

const getCollegeExperiences = async (req, res) => {
  try {
    const collegeExperiences = await CollegeExperience.find().populate('alumni', 'name');
    const collegeExperiencesWithAlumniName = collegeExperiences.map((exp) => ({
      name: exp.alumni.name,
      description: exp.description,
      time: exp.time,
      semester: exp.semester,
      tags: exp.tags,
      approved: exp.approved,
      // Add other fields if needed
    }));

    res.json(collegeExperiencesWithAlumniName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const addCollegeExperience = async (req, res) => {
  try {
    let collegeExperiences = req.body;

    // If it's not an array, convert it to an array with a single element
    if (!Array.isArray(collegeExperiences)) {
      collegeExperiences = [collegeExperiences];
    }

    const savedCollegeExperiences = [];
    const errors = [];

    for (const collegeExperienceData of collegeExperiences) {
      const newCollegeExperience = new CollegeExperience(collegeExperienceData);

      try {
        // Validate the college experience before saving
        await newCollegeExperience.validate();
        const savedCollegeExperience = await newCollegeExperience.save();
        savedCollegeExperiences.push(savedCollegeExperience);

        // Update the alumni document to include the saved college experience
        const alumniId = collegeExperienceData.alumni;
        await Alumni.findByIdAndUpdate(
          alumniId,
          { $push: { collegeExperiences: savedCollegeExperience._id } },
          { new: true }
        );
      } catch (error) {
        // Collect errors for erroneous objects
        errors.push({ data: collegeExperienceData, error: error.message });
      }
    }

    // If there are valid experiences, return a 201 status with the saved experiences
    // If there are errors, return a 400 status with the error details
    if (savedCollegeExperiences.length > 0) {
      return res.status(201).json({ savedCollegeExperiences, errors });
    } else {
      return res.status(400).json({ errors });
    }
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

const getCollegeExperienceById = async (req, res) => {
  console.log("in" ,req.params.id)
  try {
    const collegeExperience = await CollegeExperience.findById(req.params.id)
   
    if (collegeExperience) {
      const collegeExperienceWithAlumniName = {
        name: collegeExperience.alumni.name,
        description: collegeExperience.description,
        time: collegeExperience.time,
        semester: collegeExperience.semester,
        tags: collegeExperience.tags,
        approved: collegeExperience.approved,
        // Add other fields if needed
      };

      res.json(collegeExperienceWithAlumniName);
    } else {
      res.status(404).json({ message: 'College experience not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCollegeExperiences, addCollegeExperience, updateCollegeExperience, deleteCollegeExperience, getCollegeExperienceById };
