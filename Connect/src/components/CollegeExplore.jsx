import React, { useState, useEffect } from "react";
import College from './Explorecards/College'
const CollegeExplore = (props) => {
    const [selectedExperiences, setSelectedExperiences] = useState([]);
    useEffect(() => {
        // Initial fetch from the backend
        fetchDataFromBackend();
    },[]);

    
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

    
    return (
        <>
           <College type="clgexp" />
        </>
    );
};

export default CollegeExplore;