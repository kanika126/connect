// ResourcesPage.js
import React from 'react';

const Resources= () => {
  return (
    <div className="flex flex-col items-center mt-10 font-sans">
      <div className="text-2xl font-bold text-indigo-500 mb-4 underline">Heading 1</div>
      <div className="flex items-center space-x-4 mb-8">
        <a href="https://link1.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/logo1.png" alt="Logo 1" className="cursor-pointer" />
        </a>
        <a href="https://link2.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/logo2.png" alt="Logo 2" className="cursor-pointer" />
        </a>
        <a href="https://link3.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/logo3.png" alt="Logo 3" className="cursor-pointer" />
        </a>
      </div>

      <div className="text-2xl font-bold text-indigo-500 mb-4 underline">Heading 2</div>
      <div className="flex items-center space-x-4 mb-8">
        {/* Repeat the same structure for Heading 2 */}
      </div>

      <div className="text-2xl font-bold text-indigo-500 mb-4 underline">Heading 3</div>
      <div className="flex items-center space-x-4 mb-8">
        {/* Repeat the same structure for Heading 3 */}
      </div>
    </div>
  );
};

export default Resources;

