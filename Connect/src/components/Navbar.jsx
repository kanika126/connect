import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isAlumni = user && user.role === 'alumni';

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Clear the token from storage
    localStorage.removeItem('token');
  
    // Refresh the page
    window.location.reload();
  };
  

  return (
    <nav className="bg-indigo-100 rounded-lg shadow m-1">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-600">
          LETSCONNECT.
        </div>
        {user && ( // Only show the following section if there is a user
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
              onClick={toggleDropdown}
            >
              <div className="w-8 h-8 rounded-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBXNuO6PezhC18aYH_2cYtS0I7KbxoKYdwA&usqp=CAU"
                  alt="user photo"
                />
              </div>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border rounded-lg shadow-md overflow-hidden">
                <ul className="py-2">
                  <li>
                    <Link to="/profile" className="block px-4 py-2 text-indigo-600">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-indigo-600"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
        <div
          className="items w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-indigo-600 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={isAlumni ? '/contribute' : '/login'}
                className="block py-2 px-3 text-indigo-600 rounded"
              >
                Contribute
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                className="block py-2 px-3 text-indigo-600 rounded"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="block py-2 px-3 text-indigo-600 rounded"
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
