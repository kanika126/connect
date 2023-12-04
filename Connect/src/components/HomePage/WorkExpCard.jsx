// WorkExpCard.js
import React from "react";

const WorkExpCard = ({ company, position, description, startDate, endDate, tags }) => {
  const maxTagCharacters = 20; // Set the maximum characters to be displayed for tags
  const maxDisplayCharacters = 5; // Set the maximum characters to display in each tag

  // Function to truncate a tag if it exceeds the maximum characters
  const truncateTag = (tag) => {
    return tag.length > maxDisplayCharacters ? tag.slice(0, maxDisplayCharacters) + "..." : tag;
  };

  return (
    <div className="bg-white w-48 h-64 rounded-2xl shadow-md p-4 transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="flex flex-col items-center justify-center mb-2">
        <div className="w-10 h-10 rounded-full overflow-hidden mb-2">
          <img
            src="https://via.placeholder.com/150" // Replace with actual logic to get image
            alt="Company Logo"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="font-bold text-sm mb-1">{company}</p>
        <p className="text-xs">
          {startDate.toLocaleDateString()} - {endDate ? endDate.toLocaleDateString() : 'Present'}
        </p>
      </div>
      <div className="text-center mb-2">
        <p className="font-bold text-sm">{position}</p>
      </div>
      <p className="text-xs mb-2 overflow-hidden overflow-ellipsis max-h-12">
        {description}
      </p>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          // Check if adding the current tag exceeds the maximum characters
          index === 0 || maxTagCharacters > tag.length ? (
            <span
              key={index}
              className="bg-gray-200 text-gray-600 px-1 text-xs rounded-full"
            >
              {truncateTag(tag)}
            </span>
          ) : null
        ))}
      </div>
    </div>
  );
};

export default WorkExpCard;
