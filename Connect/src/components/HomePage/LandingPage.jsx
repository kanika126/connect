// LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center mb-30">
      <div className="text-indigo-500 text-center">
        <h1 className="text-5xl mb-5">LETS CONNECT...</h1>
        <p className="text-2xl mb-8">For the Students,By the Students</p>
        <a href="/login" className="bg-indigo-500 text-white py-3 px-5 rounded-full text-lg transition duration-300 hover:bg-indigo-300 hover:text-white">Sign In</a>
      </div>
    </div>
  );
}

export default LandingPage;
