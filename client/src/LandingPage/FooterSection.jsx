// src/FooterSection.jsx
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "../Components/ThemeContext"; // Import theme context
import assets from "../assets/assets";

function FooterSection() {
  const { theme } = useTheme(); // Access the theme state

  return (
    <footer
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-gray-400"
          : "bg-gray-100 text-gray-700"
      } py-20 md:py-24 transition-colors`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-10 md:mb-0 md:max-w-xs">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <div className="text-indigo-500 text-3xl font-semibold">
                <img className="w-16 h-24" src={assets.logo} alt="" />
                {/* Simple logo placeholder */}
              </div>
            </div>
            <p className="mt-6 text-lg">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-500">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="h-6 w-6 hover:text-indigo-500" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="h-6 w-6 hover:text-indigo-500" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="h-6 w-6 hover:text-indigo-500" />
              </a>
              <a href="#" aria-label="GitHub">
                <FaGithub className="h-6 w-6 hover:text-indigo-500" />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="h-6 w-6 hover:text-indigo-500" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div>
              <h3
                className={`text-base font-bold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Solutions
              </h3>
              <ul className="mt-6 space-y-3 text-lg">
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Image Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Chat Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    AI Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Data Storage
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className={`text-base font-bold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Support
              </h3>
              <ul className="mt-6 space-y-3 text-lg">
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Submit Ticket
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Guides
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className={`text-base font-bold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Company
              </h3>
              <ul className="mt-6 space-y-3 text-lg">
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className={`text-base font-bold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Legal
              </h3>
              <ul className="mt-6 space-y-3 text-lg">
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 text-lg text-center">
          <p className={theme === "dark" ? "text-gray-500" : "text-gray-600"}>
            © 2024 QuantumLeap, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
