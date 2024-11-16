// src/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate(); // For navigating back to the home page

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
