import React from 'react';

const AlumniTable = ({ alumniData, handleProfileClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Graduation Year</th>
            <th className="py-2 px-4">Personal Email</th>
            <th className="py-2 px-4">Phone Number</th>
            <th className="py-2 px-4">LinkedIn Profile</th>
            <th className="py-2 px-4">Current Company</th>
            <th className="py-2 px-4">Current City</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {alumniData.map((alumni) => (
            <tr key={alumni._id} className="border-t">
              <td className="py-2 px-4">{alumni.name}</td>
              <td className="py-2 px-4">{alumni.email}</td>
              <td className="py-2 px-4">{alumni.graduationYear}</td>
              <td className="py-2 px-4">{alumni.personalEmail}</td>
              <td className="py-2 px-4">{alumni.phoneNumber}</td>
              <td className="py-2 px-4">{alumni.linkedinProfile}</td>
              <td className="py-2 px-4">{alumni.currentCompany}</td>
              <td className="py-2 px-4">{alumni.currentCity}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleProfileClick(alumni._id)}
                  className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                >
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlumniTable;
