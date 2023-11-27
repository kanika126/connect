import React from 'react';

const Card = ({ imageUrl, title, linkUrl }) => {
  return (
    <div className="max-w-md mx-auto mt-20 mb-20 bg-indigo-400 rounded-md overflow-hidden shadow-lg mb-4">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img className="w-40 h-40 object-cover rounded-full mx-auto mt-10" src={imageUrl} alt={title} />
      </a>
      <div className="p-16 h-full w-50">
        <h2 className="text-xl font-bold mb-2 text-center text-white">{title}</h2>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block text-center text-white">Learn More</a>
      </div>
    </div>
  );
}

export default Card;