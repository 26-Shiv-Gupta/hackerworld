import React from "react";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="bg-black border-b border-red-600 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-300 hover:text-white lg:hidden"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 border border-red-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
          </div>
          <button className="text-gray-300 hover:text-white">
            <i className="fas fa-bell text-xl"></i>
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/32x32/ef4444/ffffff?text=A"
              alt="Admin"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-white font-medium">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
