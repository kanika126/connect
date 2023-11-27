// SlideshowComponent.js
import React from 'react';

const SlideshowComponent = () => {
  return (
    <div className="bg-white p-16 flex">
      {/* Left half with larger curved rectangular box */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-gray-300 w-96 h-96 rounded-3xl">
          {/* Content of the larger box can be added here */}
        </div>
      </div>

      {/* Right half with three smaller curved boxes */}
      <div className='w-1/2 flex flex-col items-center'>
      <p className="text-lg font-bold mb-4">Three Smaller Curved Boxes</p>
       
      <div className="flex items-center justify-center space-x-8">
        <div className="bg-gray-300 w-40 h-40 rounded-3xl"></div>
        <div className="bg-gray-300 w-40 h-40 rounded-3xl"></div>
        <div className="bg-gray-300 w-40 h-40 rounded-3xl"></div>
      </div>
      </div>
    </div>
  );
}

export default SlideshowComponent;
