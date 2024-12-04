// Sidebar.jsx
import React from "react";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => (
  <div
    className={`transition-all duration-300 ${
      sidebarOpen ? "w-64" : "w-16"
    } bg-gray-100 text-indigo-200 p-4`}
    style={{ minHeight: "100vh" }}
  >
    <button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="text-indigo-700 focus:outline-none"
    >
      {sidebarOpen ? (
        <PanelLeftClose size={30} className="text-indigo-700" />
      ) : (
        <PanelLeftOpen size={30} className="text-indigo-700" />
      )}
    </button>
    {sidebarOpen && (
      <nav className="mt-8 space-y-4">
        <p className="text-center text-gray-400">Conversation History</p>
      </nav>
    )}
  </div>
);

export default Sidebar;
