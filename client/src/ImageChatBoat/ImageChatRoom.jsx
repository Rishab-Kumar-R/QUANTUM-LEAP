// import React, { useState } from "react";
// import { FaBars, FaSignOutAlt, FaUserCircle, FaHome } from "react-icons/fa";
// import { MoonIcon, SunIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom"; // Import navigate hook

// import { useTheme } from "../Components/ThemeContext"; // Assuming you already have ThemeContext for managing theme

// function ImageChatRoom() {
//   const { theme, toggleTheme } = useTheme(); // Access theme from context
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);

//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setImage(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       setChatHistory([...chatHistory, { user: "You", message }]);
//       setMessage("");
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen flex flex-col ${
//         theme === "dark"
//           ? "bg-gray-900 text-white"
//           : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       <div className="flex flex-grow">
//         {/* Sidebar */}
//         <div
//           className={`transition-all duration-300 ${
//             sidebarOpen ? "w-64" : "w-16"
//           } dark:bg-gray-800 bg-gray-200  p-4`}
//           style={{ minHeight: "100vh", width: sidebarOpen ? "16rem" : "4rem" }}
//         >
//           {/* Sidebar remains empty */}
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className=" text-gray-900 focus:outline-none dark:text-white"
//           >
//             <FaBars size={30} />
//           </button>
//           <h1>Histroy section </h1>
//         </div>

//         {/* Chat Room */}
//         <div
//           className={`flex-1 p-6 flex flex-col justify-between ${
//             sidebarOpen ? "pl-6" : "pl-6"
//           }`} // Adjust padding when sidebar is open
//         >
//           {/* Header: Profile, Theme Toggle, Logout, Home */}
//           <div className="flex justify-between items-center mb-6">
//             <div className="flex items-center space-x-4">
//               {/* Home Icon */}
//               <button
//                 onClick={() => navigate("/")}
//                 className=" flex items-center space-x-2 text-gray-900 focus:outline-none dark:text-white"
//               >
//                 <FaHome size={20} />
//                 <span>Home</span>
//               </button>
//             </div>

//             {/* Theme toggle */}
//             <div className="flex items-center space-x-4">
//               {/* Profile Icon */}
//               <FaUserCircle size={40} />

//               <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-md text-gray-900 focus:outline-none dark:text-white"
//               >
//                 {theme === "dark" ? (
//                   <SunIcon className="h-6 w-6" />
//                 ) : (
//                   <MoonIcon className="h-6 w-6" />
//                 )}
//               </button>

//               {/* Logout Button */}
//               <button
//                 onClick={() => alert("Logging out...")}
//                 className="flex items-center space-x-2 text-red-500"
//               >
//                 <FaSignOutAlt />
//                 <span>Logout</span>
//               </button>
//             </div>
//           </div>

//           {/* Chat Section */}
//           <div className="bg-gray-200 rounded-lg shadow-md p-6 flex-grow overflow-auto mb-16 dark:bg-gray-800">
//             <div className="mb-6">
//               {image && (
//                 <img
//                   src={image}
//                   alt="Uploaded"
//                   className="w-full h-64 object-cover rounded-lg mb-4"
//                 />
//               )}
//             </div>

//             {/* Chat History */}
//             <div className="space-y-2">
//               {chatHistory.map((chat, index) => (
//                 <div key={index} className="flex items-start space-x-2">
//                   <strong>{chat.user}:</strong>
//                   <span>{chat.message}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImageChatRoom;
import React, { useState } from "react";
import { FaBars, FaSignOutAlt, FaUserCircle, FaHome } from "react-icons/fa";
import { MoonIcon, SunIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import navigate hook

import { useTheme } from "../Components/ThemeContext"; // Assuming you already have ThemeContext for managing theme

function ImageChatRoom() {
  const { theme, toggleTheme } = useTheme(); // Access theme from context
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { user: "You", message }]);
      setMessage("");
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-16"
          } dark:bg-gray-800 bg-gray-200 p-4`}
          style={{ minHeight: "100vh", width: sidebarOpen ? "16rem" : "4rem" }}
        >
          {/* Sidebar remains empty */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-900 focus:outline-none dark:text-white"
          >
            <FaBars size={30} />
          </button>
          <h1>History section </h1>
        </div>

        {/* Chat Room */}
        <div
          className={`flex-1 p-6 flex flex-col justify-between ${
            sidebarOpen ? "pl-16" : "pl-16"
          }`} // Adjust padding when sidebar is open
        >
          {/* Header: Profile, Theme Toggle, Logout, Home */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              {/* Home Icon */}
              <button
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 text-gray-900 focus:outline-none dark:text-white"
              >
                <FaHome size={20} />
                <span>Home</span>
              </button>
            </div>

            {/* Theme toggle */}
            <div className="flex items-center space-x-4">
              {/* Profile Icon */}
              <FaUserCircle size={40} />

              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-900 focus:outline-none dark:text-white"
              >
                {theme === "dark" ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>

              {/* Logout Button */}
              <button
                onClick={() => alert("Logging out...")}
                className="flex items-center space-x-2 text-red-500"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Chat Section */}
          <div className="bg-gray-200 rounded-lg shadow-md p-6 flex-grow overflow-auto mb-16 dark:bg-gray-800">
            <div className="mb-6">
              {image && (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
            </div>

            {/* Chat History */}
            <div className="space-y-2">
              {chatHistory.map((chat, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <strong>{chat.user}:</strong>
                  <span>{chat.message}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Textarea and Send Button */}
          <div className="flex items-center space-x-2 bg-gray-200 p-2 dark:bg-gray-800">
            {/* Image Upload Button */}
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button className="p-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm">
                📁
              </button>
            </label>

            {/* Text Input */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded-md shadow-sm resize-none bg-white dark:bg-gray-700 dark:text-white"
              rows="1"
              placeholder="Type your message..."
            />

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageChatRoom;
