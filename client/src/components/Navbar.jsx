import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, isLoaded } = useUser();
  if (!isLoaded) return null;
  const isAdmin = user?.publicMetadata?.role === "admin";

  const navLinkClass = ({ isActive }) =>
    `transition-colors px-3 py-2 font-medium text-sm ${
      isActive ? "text-terminal-green" : "text-gray-300 hover:text-cyan-bright"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md font-medium ${
      isActive ? "text-terminal-green" : "text-gray-300 hover:text-cyan-bright"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-white">TechHack</span>
                <span className="text-cyan-bright">World</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/courses" className={navLinkClass}>
                Courses
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About us
              </NavLink>
              <NavLink to="/careers" className={navLinkClass}>
                Careers
              </NavLink>
              <SignedIn>
                <NavLink to="/My_courses" className={navLinkClass}>
                  MyCourses
                </NavLink>
              </SignedIn>
              <NavLink to="/contacts" className={navLinkClass}>
                Contacts
              </NavLink>

              <div className="flex items-center gap-3 ml-4">
                <SignedOut>
                  <SignInButton>
                    <button
                      className="text-gray-300 hover:text-white cursor-pointer font-medium text-sm px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </button>
                  </SignInButton>
                  <SignInButton>
                    <button
                      className="bg-white text-bg-primary cursor-pointer hover:bg-gray-100 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
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
            <div className="md:hidden bg-bg-primary border-t border-border-subtle">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink to="/" end className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/courses" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                  Courses
                </NavLink>
                <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                  About us
                </NavLink>
                <NavLink to="/careers" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                  Careers
                </NavLink>
                <SignedIn>
                  <NavLink to="/My_courses" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                    MyCourses
                  </NavLink>
                </SignedIn>
                <NavLink to="/contacts" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                  Contacts
                </NavLink>

                <SignedOut>
                  <SignInButton>
                    <button
                      className="w-full mt-2 bg-white hover:bg-gray-100 text-bg-primary px-4 py-2 rounded-lg font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;