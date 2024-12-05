import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Command, 
  // Settings, 
  User, 
  LogOut, 
  Moon, 
  Sun, 
  Bell 
} from "lucide-react";

const Header = ({ onLogout }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to change theme
  };

  return (
    <header 
      className="
        flex 
        justify-between 
        items-center 
        p-4 
        border-b 
        border-gray-200 
        bg-white 
        shadow-sm
      "
    >
      {/* Logo */}
      <Link 
        to="/" 
        className="
          flex 
          items-center 
          space-x-2 
          text-indigo-600 
          hover:opacity-90 
          transition
        "
      >
        <Command className="h-8 w-8" />
        <span className="text-xl font-bold">QUANTUM-LEAP</span>
      </Link>

      {/* Profile Actions */}
      <div className="flex items-center space-x-3">
        {/* Notifications */}
        <button
          className="
            p-2 
            text-gray-600 
            rounded-lg 
            hover:bg-gray-100 
            transition
            relative
          "
          title="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span 
            className="
              absolute 
              -top-1 
              -right-1 
              bg-red-500 
              text-white 
              rounded-full 
              h-4 
              w-4 
              flex 
              items-center 
              justify-center 
              text-xs
            "
          >
            3
          </span>
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="
            p-2 
            text-gray-600 
            rounded-lg 
            hover:bg-gray-100 
            transition
          "
          title={isDarkMode ? "Light Mode" : "Dark Mode"}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        {/* Settings */}
        {/* <button
          className="
            p-2 
            text-gray-600 
            rounded-lg 
            hover:bg-gray-100 
            transition
          "
          title="Settings"
        >
          <Settings className="h-5 w-5" />
        </button> */}

        {/* Profile */}
        <button
          className="
            p-2 
            text-gray-600 
            rounded-lg 
            hover:bg-gray-100 
            transition
          "
          title="Profile"
        >
          <User className="h-5 w-5" />
        </button>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="
            p-2 
            text-gray-600 
            rounded-lg 
            hover:bg-gray-100 
            transition
          "
          title="Logout"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;