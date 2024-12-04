// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Command } from "lucide-react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Header = () => (
  <header className="p-4 bg-white text-white text-xl font-bold flex justify-between items-center">
    <Link
      to="/"
      className="flex items-center hover:opacity-90 transition-opacity"
    >
      <Command className="h-8 w-8 text-indigo-600" />
      <span className="ml-2 text-xl font-bold text-indigo-600">
        QUANTUM-LEAP
      </span>
    </Link>
    <div>
      <button
        className="p-2 bg-indigo-500 hover:bg-indigo-700 rounded-md mr-2"
        title="Profile"
      >
        <FaUserCircle />
      </button>
      <button
        className="p-2 bg-indigo-500 hover:bg-indigo-700 rounded-md"
        title="Logout"
      >
        <FaSignOutAlt />
      </button>
    </div>
  </header>
);

export default Header;
