const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
    alumni: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumni', required: true },
    company: { type: String, required: true }, // Company name
    position: { type: String, required: true }, // Position/Job title
    description: { type: String, required: true }, // Job post description
    startDate: { type: Date, required: true },
    endDate: { type: Date, default: null }, // End date can be null if still working
    tags: [String], // Tags for searchability
    time: { type: Date, default: Date.now, required: true }, // Time of the work experience
    approved: { type: Boolean, default: false },
});

const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema);

module.exports = WorkExperience;
