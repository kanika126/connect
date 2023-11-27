// LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl mb-4">Your Main Text</h1>
        <p className="text-lg mb-8">A smaller description below</p>
        <a href="#" className="bg-white text-blue-500 py-2 px-4 rounded-full text-lg transition duration-300 hover:bg-blue-700 hover:text-white">Sign In</a>
      </div>
    </div>
  );
}

export default LandingPage;
