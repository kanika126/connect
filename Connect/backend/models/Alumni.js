// Alumni/Student Model
const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Assuming this is the institutional email
  graduationYear: { type: Number, required: true },
  personalEmail: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  linkedinProfile: { type: String, unique: true },
  password: { type: String, required: true },
  currentCompany:{type:String ,required:true, default:'none'},
  currentCity:{type:String, required:true,default:'none'},
  workExperiences: [
    { type: mongoose.Schema.Types.ObjectId, ref: "WorkExperience" },
  ],

  collegeExperiences: [
    { type: mongoose.Schema.Types.ObjectId, ref: "CollegeExperience" },
  ],
  resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resume" }],
});

const AlumniStudent = mongoose.model("Alumni", alumniSchema);

module.exports = AlumniStudent;
