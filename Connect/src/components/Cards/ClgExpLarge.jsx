import React, { useState } from "react";

const ClgExpLarge = ({ id, imageSrc, name, semester, description, tags, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: name || "",
    semester: semester || "",
    description: description || "",
    tags: tags || [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setEditedData((prevData) => ({
      ...prevData,
      [name]: name === 'tags' ? value.split(',').map(tag => tag.trim()) : value,
    }));
  };
  

  const handleUpdate = async () => {
    try {
      // Make API call to update the data
      const updateResponse = await fetch(`http://localhost:5001/api/clgexp/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });

      if (updateResponse.ok) {
        setIsEditing(false);
        console.log('College experience updated successfully.');

        // Call the onUpdate callback to refresh data in the parent component
        onUpdate();
      } else {
        console.error('Error updating college experience.');
      }
    } catch (error) {
      console.error('Error updating college experience:', error.message);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-1/3 min-h-48 flex flex-col items-start mb-4">
      <div className="bg-indigo-100 border border-indigo-300 p-4 m-2 rounded-2xl shadow-md">
        <div className="flex justify-center items-center mb-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={imageSrc}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {isEditing ? (
          <div>
            <div className="mb-2">
              <label className="text-sm font-bold mb-1 block">Name</label>
              <input
                type="text"
                name="name"
                value={editedData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-2">
              <label className="text-sm font-bold mb-1 block">Semester</label>
              <input
                type="text"
                name="semester"
                value={editedData.semester}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-2">
              <label className="text-sm font-bold mb-1 block">Description</label>
              <textarea
                name="description"
                value={editedData.description}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-2">
              <label className="text-sm font-bold mb-1 block">Tags</label>
              <input
                type="text"
                name="tags"
                value={editedData.tags.join(", ")}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-green-500 text-white px-2 py-1 mr-2"
                onClick={handleUpdate}
              >
                Submit
              </button>
              <button
                className="bg-gray-500 text-white px-2 py-1"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-2">
              <p className="font-bold text-sm">{name}</p>
              <p className="text-xs">{semester}</p>
            </div>
            <p className="text-xs mb-2">
              {description}
            </p>
            <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-300 text-black-600 px-1 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
            <div className="mt-4 flex justify-end">
              {onDelete && (
                <button
                  className="bg-blue-500 text-white px-2 py-1 mr-2"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
              )}
              {onDelete && (
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={onDelete}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClgExpLarge;
