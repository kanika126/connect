const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

connectDb();
app.use(cors());
app.use(express.json());

// Uncomment the routes you want to include
// app.use("/api/student", require("./routes/studentRoutes"));
app.use("/api/auth", require("./routes/authRoutes") )
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/alumni", require("./routes/alumniRoutes"));
app.use("/api/clgexp", require("./routes/collegeExperienceRoutes"));
app.use("/api/workexp", require("./routes/workExperienceRoutes"));
app.use("/api/resume", require("./routes/resumeRoutes"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
