import React, { useState } from "react";
import { ShieldCheckIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <ShieldCheckIcon className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-xl font-bold text-white">CyberSec Academy</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-red-600 transition-colors px-3 py-2 rounded-md font-medium ${
                    isActive ? "text-white" : "text-gray-400"
                  }`
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `hover:text-red-600 transition-colors px-3 py-2 rounded-md font-medium ${
                    isActive ? "text-white" : "text-gray-400"
                  }`
                }
              >
                Courses
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-red-600 transition-colors px-3 py-2 rounded-md font-medium ${
                    isActive ? "text-white" : "text-gray-400"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  `hover:text-red-600 transition-colors px-3 py-2 rounded-md font-medium ${
                    isActive ? "text-white" : "text-gray-400"
                  }`
                }
              >
                Careers
              </NavLink>
              {/* <NavLink
                to="/certifications"
                className={({ isActive }) =>
                  `hover:text-red-600 transition-colors px-3 py-2 rounded-md font-medium ${
                    isActive ? "text-white" : "text-gray-400"
                  }`
                }
              >
                Certifications
              </NavLink> */}
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `hover:text-red-600 transition-colors px-3 py-2 rounded-md font-medium ${
                    isActive ? "text-white" : "text-gray-400"
                  }`
                }
              >
                Contacts
              </NavLink>

              <button className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-lg font-semibold transition-colors">
                Enroll Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md font-medium text-gray-400 hover:text-red-600 ${
                      isActive ? "text-white" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md font-medium text-gray-400 hover:text-red-600 ${
                      isActive ? "text-white" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Courses
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md font-medium text-gray-400 hover:text-red-600 ${
                      isActive ? "text-white" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/careers"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md font-medium text-gray-400 hover:text-red-600 ${
                      isActive ? "text-white" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </NavLink>
                {/* <NavLink
                  to="/certifications"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md font-medium text-gray-400 hover:text-red-600 ${
                      isActive ? "text-white" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Certifications
                </NavLink> */}
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md font-medium text-gray-400 hover:text-red-600 ${
                      isActive ? "text-white" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacts
                </NavLink>
                <button
                  className="w-full mt-2 bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
