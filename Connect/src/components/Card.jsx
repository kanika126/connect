import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, linkUrl }) => {
  return (
    <div className="mx-auto mt-14 bg-indigo-400 rounded-md overflow-hidden shadow-lg mb-2 ml-16 mr-16">
      <Link to={linkUrl}  rel="noopener noreferrer">
        <img className="w-40 h-40 object-cover rounded-full mx-auto mt-10" src={imageUrl} alt={title} />
      </Link>
      <div className="p-12 h-full w-96">
        <h2 className="text-xl font-bold mb-2 text-center text-white">{title}</h2>
        <Link to ={linkUrl} rel="noopener noreferrer" className="block text-center text-white">Learn More</Link>
      </div>
    </div>
  );
}

export default Card;