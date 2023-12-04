// StudentForm.js
import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        graduationYear: "",
        personalEmail: "",
        phoneNumber: "",
        linkedinProfile: "",
        currentCompany:"",
        currentCity:"",
        password: "",
        confirmPassword: "",
      });
    
      const [passwordMatchError, setPasswordMatchError] = useState(false);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    
        // Check if passwords match and set error state accordingly
        if (e.target.name === "confirmPassword") {
          setPasswordMatchError(formData.password !== e.target.value);
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if passwords match before submitting
        if (formData.password !== formData.confirmPassword) {
          setPasswordMatchError(true);
          return;
        }
    
        try {
          const response = await axios.post(
            "http://localhost:5001/api/alumni/",
            formData
          );
    
          console.log(response.data); // Handle the response as needed
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };
    
      const isSubmitDisabled = passwordMatchError || !formData.password || !formData.name || !formData.email || !formData.graduationYear || !formData.personalEmail || !formData.phoneNumber ||!formData.password || !formData.confirmPassword;
    

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-600">
            Graduation Year
          </label>
          <input
            type="number"
            id="graduationYear"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="personalEmail" className="block text-sm font-medium text-gray-600">
            Personal Email
          </label>
          <input
            type="email"
            id="personalEmail"
            name="personalEmail"
            value={formData.personalEmail}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-600">
            LinkedIn Profile
          </label>
          <input
            type="text"
            id="linkedinProfile"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-600">
             Current Company
          </label>
          <input
            type="text"
            id="currentCompany"
            name="currentCompany"
            value={formData.currentCompany}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="currentCity" className="block text-sm font-medium text-gray-600">
            Current City
          </label>
          <input
            type="text"
            id="currentCity"
            name="currentCity"
            value={formData.currentCity}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={`mt-1 p-2 w-full border rounded-md ${
              passwordMatchError ? "border-red-500" : ""
            }`}
          />
          {passwordMatchError && (
            <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
          )}
        </div>

        <div className="mb-4">
        <button
            type="submit"
            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ${isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
