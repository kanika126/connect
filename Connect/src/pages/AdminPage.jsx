import React, { useState, useEffect } from 'react';
import AlumniTable from '../components/AdminTable';

const AdminPage = () => {
  const [alumniDataState, setAlumniDataState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/alumni');
        if (!response.ok) {
          throw new Error('Failed to fetch alumni data');
        }

        const data = await response.json();
        setAlumniDataState(data);
      } catch (error) {
        console.error('Error fetching alumni data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleProfileClick = (alumniId) => {
    // Add logic to navigate to the profile page or show a modal
    console.log('Viewing profile for alumni with ID:', alumniId);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Alumni List</h1>
      <AlumniTable alumniData={alumniDataState} handleProfileClick={handleProfileClick} />
    </div>
  );
};

export default AdminPage;
