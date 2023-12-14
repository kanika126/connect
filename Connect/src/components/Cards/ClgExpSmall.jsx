// ProfileCard.js
import React from "react";

const ClgExpCard = ({ imageSrc, name, designation, description, tags }) => {
  const maxTagCharacters = 20; // Set the maximum characters to be displayed for tags
  const maxDisplayCharacters = 5; // Set the maximum characters to display in each tag

  // Function to truncate a tag if it exceeds the maximum characters
  const truncateTag = (tag) => {
    return tag.length > maxDisplayCharacters ? tag.slice(0, maxDisplayCharacters) + "..." : tag;
  };

  return (
    <div className="w-1/2 flex flex-col items-center justify-center">
          
    <div className="bg-white w-48 h-48 rounded-2xl shadow-md p-4 transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="flex justify-center items-center mb-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={imageSrc}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="text-center mb-2">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-xs">{designation}</p>
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
    </div>
  );
};

export default ClgExpCard;
