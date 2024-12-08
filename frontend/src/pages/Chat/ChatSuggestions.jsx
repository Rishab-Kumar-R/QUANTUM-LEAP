import React from "react";
import { MdOutlineImageSearch } from "react-icons/md";
import {
  AiOutlineComment,
  AiOutlineRobot,
  AiOutlineBulb,
} from "react-icons/ai";

const ChatSuggestions = () => (
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
);

export default ChatSuggestions;
