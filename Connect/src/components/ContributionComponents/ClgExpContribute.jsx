import React, { useState,useContext } from "react";
import AuthContext from "../../context/AuthContext";
const ClgExpContribute = () => {
  
  const {user} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    semester: "",
    description: "",
    tags: "",
    alumni: user.id,
    // image: null,
  });
  const SemesterEnum = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.description.trim()) {
      setDescriptionError(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/clgexp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful form submission, e.g., show a success message
        console.log("Form submitted successfully!");
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "description" && e.target.value.trim()) {
      setDescriptionError(false);
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-20 ml-20 mx-auto align-content: flex-start"
    >
      <div className="font-bold text-2xl">College Experience</div>
      <div className="grid md:grid-cols-2 m-1 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <select
            name="semester"
            id="semester"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleChange}
            value={formData.semester}
            required
          >
            <option value="" disabled hidden>
              Select Semester
            </option>
            {SemesterEnum.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
          <label
            htmlFor="semester"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Semester
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="description"
          id="description"
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
            descriptionError ? "border-red-500" : ""
          }`}
          placeholder=" "
          onChange={handleChange}
          value={formData.description}
          required
        />
        <label
          htmlFor="description"
          className={`peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
        >
          Experience Description
        </label>
        {descriptionError && (
          <p className="text-sm text-red-500 mt-1">Description is required.</p>
        )}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="tags"
          id="tags"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          onChange={handleChange}
          value={formData.tags}
        />
        <label
          htmlFor="tags"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Tags (comma-separated)
        </label>
      </div>
      {/* <div className="relative z-0 w-full mb-5 group">
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleFileChange}
          required
        />
        <label
          htmlFor="image"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Image
        </label>
      </div>
       */}
      <button
        type="submit"
        className="text-white bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Submit
      </button>
    </form>
  );
};

export default ClgExpContribute;
