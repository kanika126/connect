import React, { useState, useEffect } from 'react';

// import { Document, Page } from 'react-pdf';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

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
        fetchResumes();
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

  const fetchResumes = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/resume');

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setResumes(data);
      } else {
        console.error('Error fetching resumes');
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error fetching resumes:', error.message);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div>
      <h2>Resume Upload</h2>
      <div>
        <label>
          Choose Resume:
          <input type="file" onChange={handleFileChange} />
        </label>
      </div>
      <div>
        <button onClick={handleUpload}>Upload Resume</button>
      </div>
     
    </div>
  );
};

export default ResumeUpload;
