import React, { useState } from 'react'
const Profile = ({ company, profile, experience, onDelete, onEdit }) => {
        const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    onDelete();
  };

  const handleSave = () => {
    // Add logic to save changes to the backend or update state
    setIsEditing(false);
  };
        return (
          <div>
            {/* Cover Image */}
            <div className="bg-cover bg-center h-64" style={{ backgroundImage: 'url("https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg")' }}>
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
              {/* Name */}
              <h1 className="text-2xl font-bold">Your Name</h1>
              
              {/* Batch */}
              <p className="text-gray-500">Batch XYZ</p>
            </div>
            <div className="rounded-md overflow-hidden border my-4 mx-40 bg-grey-200 hover:shadow-md transition duration-300">
      <div className="p-4 text-center">
        <div className="flex items-center mb-2">
          
          <div>
            <strong>Company:</strong> {isEditing ? <input type="text" value={company} onChange={(e) => onEdit('company', e.target.value)} /> : company}
          </div>
          <div className="ml-4">
            <strong>Profile:</strong> {isEditing ? <input type="text" value={profile} onChange={(e) => onEdit('profile', e.target.value)} /> : profile}
          </div>
        </div>
        <div className="mb-2">
          <strong>Experience:</strong> {isEditing ? <input type="text" value={experience} onChange={(e) => onEdit('experience', e.target.value)} /> : experience}
        </div>
        <div>
          {isEditing ? (
            <>
              <button className="bg-indigo-500 text-white px-2 py-1 mr-2" onClick={handleSave}>
                Save
              </button>
              <button className="bg-gray-500 text-white px-2 py-1" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className="bg-indigo-500 text-white px-2 py-1 mr-2" onClick={handleEdit}>
                Edit
              </button>
              <button className="bg-indigo-500 text-white px-2 py-1" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    <div className="rounded-md overflow-hidden border my-4 mx-40 bg-grey-200 hover:shadow-md transition duration-300">
      <div className="p-4 text-center">
        <div className="flex items-center mb-2">
          
          <div>
            <strong>Semester:</strong> {isEditing ? <input type="text" value={company} onChange={(e) => onEdit('company', e.target.value)} /> : company}
          </div>
          <div className="ml-4">
            <strong>Year:</strong> {isEditing ? <input type="text" value={profile} onChange={(e) => onEdit('profile', e.target.value)} /> : profile}
          </div>
        </div>
        <div className="mb-2">
          <strong>Experience:</strong> {isEditing ? <input type="text" value={experience} onChange={(e) => onEdit('experience', e.target.value)} /> : experience}
        </div>
        <div>
          {isEditing ? (
            <>
              <button className="bg-indigo-500 text-white px-2 py-1 mr-2" onClick={handleSave}>
                Save
              </button>
              <button className="bg-gray-500 text-white px-2 py-1" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className="bg-indigo-500 text-white px-2 py-1 mr-2" onClick={handleEdit}>
                Edit
              </button>
              <button className="bg-indigo-500 text-white px-2 py-1" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
          </div>
        );
      }
      
      export default Profile;