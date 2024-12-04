import React from "react";
import { Send } from "lucide-react";
import { FaImage } from "react-icons/fa";

const ChatInput = ({
  message,
  setMessage,
  handleSendMessage,
  handleImageUpload,
}) => (
  <div className="flex items-center space-x-4">
    {/* Image Upload Button */}
    <label className="flex items-center cursor-pointer">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <span className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500">
        <FaImage />
      </span>
      <p className="font-semibold px-2">Upload Image</p>
    </label>

    {/* Text Input */}
    <input
      type="text"
      placeholder="Type Your Message"
      className="flex-grow bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />

    {/* Send Button */}
    <button
      onClick={handleSendMessage}
      className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500"
    >
      <Send />
    </button>
  </div>
);

export default ChatInput;
