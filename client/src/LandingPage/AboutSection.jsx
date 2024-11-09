// src/LandingPage/AboutSection.jsx
import React from "react";
import { useTheme } from "../Components/ThemeContext"; // Import useTheme to access theme state

function AboutSection() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <h1 className="text-4xl font-semibold text-indigo-700">
        About QuantumLeap
      </h1>
    </div>
  );
}

export default AboutSection;
