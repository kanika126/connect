const express = require('express');
const {
  getWorkExperiences,
  addWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
  getWorkExperienceById, // Add this line
} = require('../controllers/workExperienceController');

const router = express.Router();

router.route('/')
  .get(getWorkExperiences)
  .post(addWorkExperience);

router.route('/:id')
  .get(getWorkExperienceById) // Add this line
  .put(updateWorkExperience)
  .delete(deleteWorkExperience);

module.exports = router;
