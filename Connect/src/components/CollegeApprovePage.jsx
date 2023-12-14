import React, { useState, useEffect } from 'react';

const CollegeApprovePage = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/clgexp');
        if (!response.ok) {
          throw new Error('Failed to fetch college experiences');
        }

        const data = await response.json();
        // Filter experiences where approved is false
        const notApprovedExperiences = data.filter((experience) => !experience.approved);
        setExperiences(notApprovedExperiences);
      } catch (error) {
        console.error('Error fetching college experiences:', error.message);
      }
    };

    fetchExperiences();
  }, []);

  const handleApprove = async (experienceId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/admin/approve/${experienceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'college' }), // Pass the experience type in the request body
      });

      if (!response.ok) {
        throw new Error('Failed to approve college experience');
      }

      // Remove the approved experience from the local state
      setExperiences((prevExperiences) =>
        prevExperiences.filter((exp) => exp._id !== experienceId)
      );
    } catch (error) {
      console.error('Error approving college experience:', error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">College Experiences (Not Approved)</h1>
      {experiences.map((experience) => (
        <div key={experience._id} className="bg-white rounded-lg overflow-hidden shadow-lg p-6 mb-4">
          <p className="text-xl font-bold mb-2">Description:</p>
          <p className="mb-4">{experience.description}</p>
          <p className="text-xl font-bold mb-2">Semester:</p>
          <p className="mb-4">{experience.semester}</p>
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

export default CollegeApprovePage;
