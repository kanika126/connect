import React from "react";

const WorkExpLarge = ({ company, position, description, startDate, endDate, tags }) => {
  return (
    <div className="flex-none max-w-400 bg-blue-100 border border-blue-300 p-4 m-2 rounded-2xl shadow-md">
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
      <p className="text-xs mb-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-600 px-1 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkExpLarge;
