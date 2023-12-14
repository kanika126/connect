// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-indigo-500 text-white h-full p-4">
      <h2 className="text-2xl font-bold mb-4">Approval Options</h2>
      <ul>
        <li>
          <Link to="/approve/clgexp">College Experiences</Link>
        </li>
        
        <li>
          <Link to="/approve/workexp">Work Experiences</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
