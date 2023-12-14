import React, { useState, useEffect, useContext } from "react";

import ClgExpLarge from "../components/Cards/ClgExpLarge";
import WorkExpLarge from "../components/Cards/WorkExpLarge";
import AuthContext from "../context/AuthContext";
const Profile = () => {
  const [alumniData, setAlumniData] = useState(null);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [collegeExperiences, setCollegeExperiences] = useState([]);
  const {user} = useContext(AuthContext)
  
  useEffect(() => {
    fetchDataFromBackend();
    console.log(user)
  }, []);

  const fetchDataFromBackend = async () => {
    console.log(user.id)
    try {
      const alumniResponse = await fetch(
        `http://localhost:5001/api/alumni/${user.id}`
      );
      if (alumniResponse.ok) {
        const alumniData = await alumniResponse.json();
        setAlumniData(alumniData);

        const workResponse = await fetch(
          `http://localhost:5001/api/alumni/work/${user.id}`
        );
        if (workResponse.ok) {
          const workData = await workResponse.json();
          setWorkExperiences(workData);
        }

        // Fetch college experiences for the alumni
        const collegeResponse = await fetch(
          `http://localhost:5001/api/alumni/clg/${user.id}`
        );
        if (collegeResponse.ok) {
          const collegeData = await collegeResponse.json();
          setCollegeExperiences(collegeData);
        }
      } else {
        console.error("Error fetching alumni data from the backend");
      }
    } catch (error) {
      console.error("Error fetching data from the backend:", error.message);
    }
  };

  const refreshData = () => {
    // Implement logic to refetch data or update state in the Profile component
    fetchDataFromBackend(); // Assuming fetchDataFromBackend is a function to fetch data
  };


  const handleDeleteCollegeExperience = async (experienceId) => {
    try {
      const deleteResponse = await fetch(`http://localhost:5001/api/clgexp/${experienceId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (deleteResponse.ok) {
        // If deletion is successful, update the state to remove the deleted college experience
        setCollegeExperiences((prevExperiences) =>
          prevExperiences.filter((experience) => experience._id !== experienceId)
        );
        console.log(`College experience with ID ${experienceId} deleted successfully.`);
      } else {
        console.error(`Error deleting college experience with ID ${experienceId}`);
      }
    } catch (error) {
      console.error('Error deleting college experience:', error.message);
    }
  };


  const handleDeleteWorkExperience = async (experienceId) => {
    try {
      // Make API call to delete the work experience
      const deleteResponse = await fetch(`http://localhost:5001/api/workexp/${experienceId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (deleteResponse.ok) {
        // If deletion is successful, update the state or trigger a refresh in the parent component
        setWorkExperiences((prevExperiences) =>
          prevExperiences.filter((experience) => experience._id !== experienceId)
        );
        console.log(`Work experience with ID ${experienceId} deleted successfully.`);
      } else {
        console.error(`Error deleting work experience with ID ${experienceId}`);
      }
    } catch (error) {
      console.error('Error deleting work experience:', error.message);
    }
  };
  
  
  return (
    <div>
      {/* Cover Image */}
      <div
        className="bg-cover bg-center h-64"
        style={{
          backgroundImage:
            'url("https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg")',
        }}
      >
        {/* Profile Half Inside the Cover */}
        <div className="h-full flex items-center justify-center pr-2">
          {/* Profile Image */}
          <img
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
            alt="Profile"
            className="w-40 h-40 mt-60 rounded-full"
          />
        </div>
      </div>

      {/* Profile Information */}
      <div className="text-center mt-16">
        {alumniData && (
          <>
            {/* Name */}
            <h1 className="text-2xl font-bold">{alumniData.name}</h1>

            {/* Batch */}
            <p className="text-gray-500">{`Batch ${alumniData.graduationYear}`}</p>

            {/* Additional Details */}
            <div className="rounded-md overflow-hidden border my-4 mx-40 bg-grey-200 hover:shadow-md transition duration-300">
              <div className="p-4 text-center">
                <div className="mb-2">
                  <strong>Email:</strong> {alumniData.email}
                </div>
                <div className="mb-2">
                  <strong>Current Company:</strong> {alumniData.currentCompany}
                </div>
                <div className="mb-2">
                  <strong>Current City:</strong> {alumniData.currentCity}
                </div>
              </div>
            </div>

            {workExperiences.length > 0 && (
        <div className="rounded-md overflow-hidden border my-4 mx-40 bg-grey-200 hover:shadow-md transition duration-300">
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold mb-4">Work Experiences</h2>
            <div className="flex flex-wrap justify-start">
              {workExperiences.map((experience) => (
                <WorkExpLarge
                  key={experience._id}
                  company={experience.company}
                  position={experience.position}
                  description={experience.description}
                  startDate={new Date(experience.startDate)}
                  endDate={
                    experience.endDate ? new Date(experience.endDate) : null
                  }
                  id={experience._id}
                  tags={experience.tags}
                  onDelete={() => handleDeleteWorkExperience(experience._id)}
                  onUpdate={refreshData} 
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {collegeExperiences.length > 0 && (
        <div className="rounded-md overflow-hidden border my-4 mx-40 bg-grey-200 hover:shadow-md transition duration-300">
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold mb-4">College Experiences</h2>
            <div className="flex flex-wrap">
              {collegeExperiences.map((experience) => (
                <ClgExpLarge
                  key={experience._id}
                  imageSrc="https://via.placeholder.com/150"
                  name={experience.name}
                  semester={experience.semester}
                  description={experience.description}
                  tags={experience.tags}
                  id={experience._id}
                  onDelete={() => handleDeleteCollegeExperience(experience._id)}
                  onUpdate={refreshData} 
                />
              ))}
            </div>
          </div>
        </div>
      )}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
