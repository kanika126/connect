import React from "react";

const ClgExpLarge = ({ imageSrc, name, semester, description, tags }) => {
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
      </div>
    </div>
  );
};

export default ClgExpLarge;
