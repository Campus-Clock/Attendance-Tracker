import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">
            <span className="text-purple-600">Attendance Tracker</span>.ai
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Menu Links */}
          <ul className="flex">
          <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>
            </li><li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                dashboard
              </Link>
            </li><li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                dashboard
              </Link>
            </li><li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                dashboard
              </Link>
            </li>
          </ul>

          {/* Profile Picture with Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40">
                <ul className="">
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      LOGIN
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
