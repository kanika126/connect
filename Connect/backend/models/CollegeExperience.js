const mongoose = require('mongoose');

// Define enum for semesters (up to sem 8)
const SemesterEnum = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];

const collegeExperienceSchema = new mongoose.Schema({
    alumni: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumni', required: true },
    description: { type: String, required: true },
    time: { type: Date, default: Date.now, required: true },
    semester: { type: String, enum: SemesterEnum, default: null }, // Optional field
    tags: [String],  // Tags for searchability
    approved: { type: Boolean, default: false },
    //image later
    // other fields if needed
});

const CollegeExperience = mongoose.model('CollegeExperience', collegeExperienceSchema);

module.exports = CollegeExperience;
