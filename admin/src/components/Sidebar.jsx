import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab }) {
  const location = useLocation();

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: "fas fa-tachometer-alt", path: "/" },
    { id: "users", label: "Users", icon: "fas fa-users", path: "/users" },
    { id: "jobs", label: "Jobs", icon: "fas fa-chart-line", path: "/jobs" },
    { id: "courses", label: "Courses", icon: "fas fa-cog", path: "/courses" },
  ];

  return (
    <>
      {/* Sidebar container */}
      <div
        className={`w-64 bg-white border-r border-gray-300 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 fixed lg:static inset-y-0 left-0 z-5`}
      >
        {/* Navigation Menu */}
        <nav className="mt-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false); // close on mobile
              }}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-red-600 hover:text-white transition-colors ${
                activeTab === item.id || location.pathname === item.path
                  ? "border-r-5 border-red-500 bg-red-200"
                  : "text-black"
              }`}
              aria-label={item.label}
            >
              <i className={`${item.icon} mr-3`}></i>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-4 z-2 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
