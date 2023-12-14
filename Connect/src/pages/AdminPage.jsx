import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlumniTable from '../components/AdminTable';

const AdminPage = () => {
  const [alumniDataState, setAlumniDataState] = useState([]);

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/alumni`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAlumniDataState(data);
      } else {
        console.error('Error fetching data from the backend');
      }
    } catch (error) {
      console.error('Error fetching data from the backend:', error.message);
    }
  };

  const handleProfileClick = (alumniId) => {
    // Add logic to navigate to the profile page or show a modal
    console.log('Viewing profile for alumni with ID:', alumniId);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Alumni List</h1>
      <Link to="/approve" className="block py-2 px-3 text-indigo-600 rounded border border-indigo-600 hover:bg-indigo-100 focus:outline-none mb-4">
        Go to Approve Page
      </Link>
      <AlumniTable alumniData={alumniDataState} handleProfileClick={handleProfileClick} />
    </div>
  );
};

export default AdminPage;
