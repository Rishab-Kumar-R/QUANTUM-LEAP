import React, { useState } from "react";
import { FaImage, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import {
  AiOutlineComment,
  AiOutlineRobot,
  AiOutlineBulb,
} from "react-icons/ai";
import { MdOutlineImageSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { Command, PanelLeftOpen, PanelLeftClose, Send } from "lucide-react";

function ChatAI() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [imageAnalysis, setImageAnalysis] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);

      // Simulate image analysis (replace with API call)
      setTimeout(() => {
        setImageAnalysis(
          "This is a beach scene with a sunset and people playing."
        );
      }, 2000);
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { user: "You", message }]);
      setMessage("");

      // Simulate AI response
      setTimeout(() => {
        setChatHistory((prev) => [
          ...prev,
          {
            user: "AI",
            message: `You asked about: "${message}". Here's a response based on the image.`,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
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

        {/* Sidebar content */}
        {sidebarOpen && (
          <nav className="mt-8 space-y-4">
            <p className="text-center text-gray-400">Conversation History</p>
          </nav>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
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

        {/* Centered Chat Section */}
        <div className="flex-grow flex flex-col items-center justify-center bg-white px-6 py-10">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            What can I help with?
          </h1>

          {/* Input Box */}
          <div className="w-full max-w-4xl bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col space-y-4">
            {/* Input Area */}
            <div className="flex items-center space-x-4">
              {/* Image Upload Button */}
              <label className="flex items-center cursor-pointer space-x-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <span className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500">
                  <FaImage />
                </span>
                <span className="text-gray-800 font-medium">Upload Image</span>
              </label>

              {/* Text Input */}
              <input
                type="text"
                placeholder=" Type Your Message"
                className="flex-grow bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={handleSendMessage}
                className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500"
              >
                <Send />
              </button>
            </div>

            {/* Suggestions Below Input */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <button className="flex items-center space-x-2 bg-gray-200 hover:bg-indigo-100 p-2 rounded-md">
                <MdOutlineImageSearch className="text-indigo-600" />
                <span className="text-gray-800">Analyze Image</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-200 hover:bg-indigo-100 p-2 rounded-md">
                <AiOutlineComment className="text-indigo-600" />
                <span className="text-gray-800">Chat About Image</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-200 hover:bg-indigo-100 p-2 rounded-md">
                <AiOutlineRobot className="text-indigo-600" />
                <span className="text-gray-800">AI Insights</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-200 hover:bg-indigo-100 p-2 rounded-md">
                <AiOutlineBulb className="text-indigo-600" />
                <span className="text-gray-800">Creative Suggestions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatAI;
