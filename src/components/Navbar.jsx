import React, { useState } from "react";
import { ShieldCheckIcon } from "@heroicons/react/solid"; // If you use Heroicons v2: '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const desktop_baseClass = "hover:text-cyan-400 transition-colors ";
    const activeClass = "text-white";
    const inactiveClass = "text-gray-300";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo */}
                        <div className="flex items-center">
                            <ShieldCheckIcon className="h-8 w-8 text-cyan-400 mr-2" />
                            <span className="text-xl font-bold text-white">CyberSec Academy</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink to="/" className={({ isActive }) =>
                                "hover:text-cyan-400 transition-colors " + (isActive ? "text-white" : "text-gray-300")
                            }>Home</NavLink>
                            <NavLink to="/courses" className={({ isActive }) =>
                                "hover:text-cyan-400 transition-colors " + (isActive ? "text-white" : "text-gray-300")
                            }>Courses</NavLink>
                            <NavLink to="/about" className={({ isActive }) =>
                                "hover:text-cyan-400 transition-colors " + (isActive ? "text-white" : "text-gray-300")
                            }>About</NavLink>
                            <NavLink to="/careers" className={({ isActive }) =>
                                "hover:text-cyan-400 transition-colors " + (isActive ? "text-white" : "text-gray-300")
                            }>Careers</NavLink>
                            <NavLink to="/certifications" className={({ isActive }) =>
                                "hover:text-cyan-400 transition-colors " + (isActive ? "text-white" : "text-gray-300")
                            }>Certifications</NavLink>
                            <NavLink to="/contacts" className={({ isActive }) =>
                                "hover:text-cyan-400 transition-colors " + (isActive ? "text-white" : "text-gray-300")
                            }>Contacts</NavLink>
                            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors">
                                Enroll Now
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink to="/" className={({ isActive }) =>
                                    "block px-3 py-2 hover:text-cyan-400 " + (isActive ? "text-white" : "text-gray-300")
                                }>Home</NavLink>
                                <NavLink to="/courses" className={({ isActive }) =>
                                    "block px-3 py-2 hover:text-cyan-400 " + (isActive ? "text-white" : "text-gray-300")
                                }>Courses</NavLink>
                                <NavLink to="/about" className={({ isActive }) =>
                                    "block px-3 py-2 hover:text-cyan-400 " + (isActive ? "text-white" : "text-gray-300")
                                }>About</NavLink>
                                <NavLink to="/careers" className={({ isActive }) =>
                                    "block px-3 py-2 hover:text-cyan-400 " + (isActive ? "text-white" : "text-gray-300")
                                }>Careers</NavLink>
                                <NavLink to="/certifications" className={({ isActive }) =>
                                    "block px-3 py-2 hover:text-cyan-400 " + (isActive ? "text-white" : "text-gray-300")
                                }>Certifications</NavLink>
                                <NavLink to="/contacts" className={({ isActive }) =>
                                    "block px-3 py-2 hover:text-cyan-400 " + (isActive ? "text-white" : "text-gray-300")
                                }>Contacts</NavLink>
                                <button className="w-full mt-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar