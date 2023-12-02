const Resume = require('../models/Resume');
const AlumniStudent = require('../models/Alumni');
const multer = require('multer');

// Configure Multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getResumes = async (req, res) => {
  console.log("get resume")
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addResume = async (req, res) => {
  console.log("resume req")
  try {
    // Multer middleware to handle file upload
    upload.single('resume')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      try {
        // Assuming you have alumniId in the request body
        const alumniId = req.body.alumniId;

        // Check if alumniId is provided
        if (!alumniId) {
          return res.status(400).json({ message: 'Alumni ID is required' });
        }

        const newResume = new Resume({
          alumni: alumniId,
          file: {
            data: req.file.buffer,
            contentType: req.file.mimetype,
            size: req.file.size,
            filename: req.file.originalname,
          },
          uploadDate: Date.now(),
          // Other fields as needed
        });

        const savedResume = await newResume.save();

        // Update the alumni document to include the saved resume
        await AlumniStudent.findByIdAndUpdate(
          alumniId,
          { $push: { resumes: savedResume._id } },
          { new: true }
        );

        res.status(201).json(savedResume);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });
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
