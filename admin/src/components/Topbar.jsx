import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Topbar({ setSidebarOpen }) {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center z-10">
      {/* Left side: Mobile hamburger + Title */}
      <div className="flex items-center gap-4">
        {/* Mobile hamburger - visible only on small screens */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-600 focus:outline-none lg:hidden"
          aria-label="Open sidebar"
        >
          <Bars3Icon className="h-6 w-6 text-gray-800" />
        </button>

        {/* Text Logo */}
        <h1 className="text-lg font-semibold text-gray-800">
          Admin Dashboard
        </h1>
      </div>

      {/* Right side: Logout button */}
      <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
        Logout
      </button>
    </div>
  );
}
