// WorkApprovePage.js
import React, { useState, useEffect } from 'react';

const WorkApprovePage = () => {
  const [workExperiences, setWorkExperiences] = useState([]);

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/workexp');
        if (!response.ok) {
          throw new Error('Failed to fetch work experiences');
        }

        const data = await response.json();
        // Filter experiences where approved is false
        const notApprovedWorkExperiences = data.filter((exp) => !exp.approved);
        setWorkExperiences(notApprovedWorkExperiences);
      } catch (error) {
        console.error('Error fetching work experiences:', error.message);
      }
    };

    fetchWorkExperiences();
  }, []);

  const handleApprove = async (experienceId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/admin/approve/${experienceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'work' }), // Pass the experience type in the request body
      });

      if (!response.ok) {
        throw new Error('Failed to approve college experience');
      }

      // Remove the approved experience from the local state
      setWorkExperiences((workExperiences) =>
      workExperiences.filter((exp) => exp._id !== experienceId)
      );
    } catch (error) {
      console.error('Error approving college experience:', error.message);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Work Experiences (Not Approved)</h1>
      {workExperiences.map((experience) => (
        <div key={experience._id} className="bg-white rounded-lg overflow-hidden shadow-lg p-6 mb-4">
          <p className="text-xl font-bold mb-2">Company:</p>
          <p className="mb-4">{experience.company}</p>
          <p className="text-xl font-bold mb-2">Position:</p>
          <p className="mb-4">{experience.position}</p>
          <p className="text-xl font-bold mb-2">Description:</p>
          <p className="mb-4">{experience.description}</p>
          <p className="text-xl font-bold mb-2">Start Date:</p>
          <p className="mb-4">{new Date(experience.startDate.$date).toLocaleDateString()}</p>
          <p className="text-xl font-bold mb-2">Tags:</p>
          <p className="mb-4">{experience.tags.join(', ')}</p>
          <p className="text-xl font-bold mb-2">Time:</p>
          <p className="mb-4">{new Date(experience.time.$date).toLocaleString()}</p>
          <button
            onClick={() => handleApprove(experience._id)}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
};

export default WorkApprovePage;
