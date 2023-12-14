const express = require('express');
const {
  getCollegeExperiences,
  addCollegeExperience,
  updateCollegeExperience,
  deleteCollegeExperience,
  getCollegeExperienceById, // Add this line
} = require('../controllers/collegeExperienceController');

const router = express.Router();

router.route('/')
  .get(getCollegeExperiences)
  .post(addCollegeExperience);

router.route('/:id')
  .get(getCollegeExperienceById) // Add this line
  .put(updateCollegeExperience)
  .delete(deleteCollegeExperience);

module.exports = router;
