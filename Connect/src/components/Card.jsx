import React from 'react';

const Card = ({ imageUrl, title, linkUrl }) => {
  return (
    <div className="max-w-md mx-auto mt-40 mb-40 bg-white rounded-md overflow-hidden shadow-lg mb-4">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img className="w-20 h-20 object-cover rounded-full mx-auto" src={imageUrl} alt={title} />
      </a>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block text-center text-blue-500">Learn More</a>
      </div>
    </div>
  );
}

export default Card;