const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }, // Admin's email
    username: { type: String, required: true, unique: true }, // Admin's username
    password: { type: String, required: true }, // You would want to store a hashed password
    // Other fields like role, permissions, etc.
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
