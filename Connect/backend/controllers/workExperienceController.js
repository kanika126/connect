const WorkExperience = require('../models/WorkExperience');
const Alumni = require('../models/Alumni')
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
    let workExperiences = req.body;

    // If it's not an array, convert it to an array with a single element
    if (!Array.isArray(workExperiences)) {
      workExperiences = [workExperiences];
    }

    const savedWorkExperiences = [];
    const errors = [];

    for (const workExperienceData of workExperiences) {
      const newWorkExperience = new WorkExperience(workExperienceData);

      try {
        // Validate the work experience before saving
        await newWorkExperience.validate();
        const savedWorkExperience = await newWorkExperience.save();
        savedWorkExperiences.push(savedWorkExperience);

        // Update the alumni document to include the saved work experience
        const alumniId = workExperienceData.alumni;
        await Alumni.findByIdAndUpdate(
          alumniId,
          { $push: { workExperiences: savedWorkExperience._id } },
          { new: true }
        );
      } catch (error) {
        // Collect errors for erroneous objects
        errors.push({ data: workExperienceData, error: error.message });
      }
    }

    // If there are valid experiences, return a 201 status with the saved experiences
    // If there are errors, return a 400 status with the error details
    if (savedWorkExperiences.length > 0) {
      return res.status(201).json({ savedWorkExperiences, errors });
    } else {
      return res.status(400).json({ errors });
    }
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

const getWorkExperienceById = async (req, res) => {
  try {
    const workExperience = await WorkExperience.findById(req.params.id).populate('alumni', 'name');

    if (workExperience) {
      const workExperienceWithAlumniName = {
        name: workExperience.alumni.name,
        role: workExperience.role,
        company: workExperience.company,
        startDate: workExperience.startDate,
        endDate: workExperience.endDate,
        description: workExperience.description,
      };

      res.json(workExperienceWithAlumniName);
    } else {
      res.status(404).json({ message: 'Work experience not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getWorkExperiences, addWorkExperience, updateWorkExperience, deleteWorkExperience, getWorkExperienceById };
