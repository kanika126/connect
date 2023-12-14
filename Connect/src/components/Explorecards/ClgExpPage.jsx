import React, { useState, useEffect } from "react";

import ClgExpLarge from '../Cards/ClgExpLarge';

const ClgExpPage = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchDataFromBackend();
    // Remove the interval fetching if it's not necessary for your use case
  }, []); // Empty dependency array to run the effect only once

  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/clgexp`);
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setExperiences(data);
      } else {
        console.error('Error fetching data from the backend');
      }
    } catch (error) {
      console.error('Error fetching data from the backend:', error.message);
    }
  };

  return (
    <div className="flex flex-wrap justify-start">
      {experiences.map((experience) => (
        <ClgExpLarge
          key={experience._id}
          imageSrc="https://via.placeholder.com/150"  // Replace with actual logic to get image
          name={experience.name}
          semester={experience.semester}
          description={experience.description}
          tags={experience.tags}
        />
      ))}
    </div>
  );
};

export default ClgExpPage;
