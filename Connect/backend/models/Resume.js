const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    alumni: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumni', required: true },
    // Store the file directly in the backend
    file: {
        data: Buffer, // Buffer to store binary data
        contentType: String, // MIME type of the file (e.g., 'application/pdf')
        size: Number, // Size of the file
        filename: String, // Original filename
    },
    uploadDate: { type: Date, default: Date.now, required: true },
    selectedForCompany: { type: String }, // Company for which the resume was selected
    approved: { type: Boolean, default: false },
    // other fields like file type, etc.
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
