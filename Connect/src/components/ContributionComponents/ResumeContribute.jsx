import React, { useState, useEffect } from 'react';


const ResumeContribute = () => {
    const [file, setFile] = useState(null);
  const [resumes, setResumes] = useState([]);

  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('alumniId', '656b65c981528540b2011c0b');
      formData.append('resume', file);

      const response = await fetch('http://localhost:5001/api/resume', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Resume uploaded successfully');
        // Refresh the list of resumes after uploading
      } else {
        const data = await response.json();
        console.error('Error uploading resume:', data.message);
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error uploading resume:', error.message);
      // Handle error, e.g., show an error message
    }
  };
  return (
    <form className="w-full mb-20 ml-20 mx-auto align-content: flex-start;">
    <div className="font-bold text-2xl">Share Resume</div>
    <div className="relative z-0 w-full mb-5 group">
    <div>
        <label>
          Choose Resume:
          <input type="file" onChange={handleFileChange} />
        </label>  
    </div>
      <input
        type="desc"
        name="desc"
        id="desc"
        className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="desc"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-10 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Select Companies it got selected for
      </label>
    </div>
    <button
      type="submit"
      onClick={handleUpload}
      className="text-white bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </form>
  )
}

export default ResumeContribute