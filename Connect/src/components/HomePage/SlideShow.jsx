import React, { useState, useEffect } from "react";
import ClgExpCard from "../Cards/ClgExpSmall";
import WorkExpCard from "../Cards/WorkExpSmall";


const SlideshowComponent = (props) => {
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Initial fetch from the backend
    fetchDataFromBackend();

    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        fetchDataFromBackend();
        setIsTransitioning(false);
      }, 500); // Adjust the transition duration as needed
    }, 200000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);  // Empty dependency array to run the effect only once

  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/${props.type}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        selectRandomExperiences(data);
      } else {
        console.error('Error fetching data from the backend');
      }
    } catch (error) {
      console.error('Error fetching data from the backend:', error.message);
    }
  };

  const selectRandomExperiences = (data) => {
    const shuffledExperiences = shuffleArray(data);
    const selected = shuffledExperiences.slice(0, 3);
    setSelectedExperiences(selected);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="h-screen bg-indigo-300 flex flex-col items-center justify-center">
      <div className=" flex">
        <div className="w-1/2 mx-24">
          <div className="bg-gray-300 w-96 h-64 rounded-3xl ">
          
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center">
          <p className="text-lg font-bold mb-4">Explore Experiences</p>
          <div className="flex items-center justify-center space-x-8">
            {selectedExperiences.map((experience) => (
              // Conditionally render ClgExpCard or WorkExpCard based on props.type
              props.type === 'clgexp' ? (
                <ClgExpCard
                  key={experience._id}
                  imageSrc={experience.imageSrc}
                  name={experience.name}
                  semester={experience.semester}
                  description={experience.description}
                  tags={experience.tags}
                  maxLines={3}
                />
              ) : (
                <WorkExpCard
                  key={experience._id}
                  company={experience.company}
                  position={experience.position}
                  description={experience.description}
                  startDate={new Date(experience.startDate)}
                  endDate={experience.endDate ? new Date(experience.endDate) : null}
                  tags={experience.tags}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideshowComponent;
