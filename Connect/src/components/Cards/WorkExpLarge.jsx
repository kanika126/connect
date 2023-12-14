import React, { useState } from "react";

const WorkExpLarge = ({ id, company, position, description, startDate, endDate, tags, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    company: company || "",
    position: position || "",
    description: description || "",
    startDate: startDate || new Date(),
    endDate: endDate || null,
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
      const updateResponse = await fetch(`http://localhost:5001/api/workexp/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });

      if (updateResponse.ok) {
        setIsEditing(false);
        console.log('Work experience updated successfully.');

        // Call the onUpdate callback to refresh data in the parent component
        onUpdate();
      } else {
        console.error('Error updating work experience.');
      }
    } catch (error) {
      console.error('Error updating work experience:', error.message);
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
              src="https://via.placeholder.com/150" // Replace with actual logic to get image
              alt="Company Logo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {isEditing ? (
          <div>
            <div className="mb-2">
              <label className="text-sm font-bold mb-1 block">Company</label>
              <input
                type="text"
                name="company"
                value={editedData.company}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-2">
              <label className="text-sm font-bold mb-1 block">Position</label>
              <input
                type="text"
                name="position"
                value={editedData.position}
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
              <p className="font-bold text-sm mb-1">{company}</p>
              <p className="text-xs">
                {startDate.toLocaleDateString()} - {endDate ? endDate.toLocaleDateString() : "Present"}
              </p>
            </div>
            <div className="text-center mb-2">
              <p className="font-bold text-sm">{position}</p>
            </div>
            <p className="text-xs mb-2">{description}</p>
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

export default WorkExpLarge;
