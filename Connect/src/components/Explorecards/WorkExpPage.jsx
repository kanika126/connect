import React, { useState, useEffect } from "react";
import WorkExpLarge from '../Cards/WorkExpLarge';

const Workcard = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchDataFromBackend();
    // Remove the interval fetching if it's not necessary for your use case
  }, []); // Empty dependency array to run the effect only once

  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/workexp`);
      if (response.ok) {
        const data = await response.json();
        setExperiences(data);
      } else {
        console.error('Error fetching data from the backend');
      }
    } catch (error) {
      console.error('Error fetching data from the backend:', error.message);
    }
  };

  return (
    <div className="flex flex-wrap">
      {experiences.map((experience) => (
        <div key={experience._id} className="flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <WorkExpLarge
            company={experience.company}
            position={experience.position}
            description={experience.description}
            startDate={new Date(experience.startDate)}
            endDate={experience.endDate ? new Date(experience.endDate) : null}
            tags={experience.tags}
          />
        </div>
      ))}
    </div>
  );
};

export default Workcard;
