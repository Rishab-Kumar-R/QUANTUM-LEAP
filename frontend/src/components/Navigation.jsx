import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import {
  Menu,
  X,
  Command,
  Github,
  ChevronDown,
  Info,
  Mail,
  HelpCircle,
  Cog,
} from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Access the current location

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    { href: "#how-we-work", label: "How We Work" },
    { href: "#features", label: "Features" },
    { href: "#faq", label: "FAQs" },
  ];

  const mobileMenuItems = [
    { href: "#features", label: "Features" },
    { href: "#how-we-work", label: "How We Work" },
    { href: "#faq", label: "FAQs" },
  ];

  const dropdownItems = [
    {
      icon: Cog,
      label: "Services",
      path: "/services",
      description: "Explore our services",
    },
    {
      icon: Info,
      label: "About Us",
      path: "/about",
      description: "Learn more about our company",
    },
    {
      icon: Mail,
      label: "Contact Us",
      path: "/contact",
      description: "Get in touch with our team",
    },
    {
      icon: HelpCircle,
      label: "Help Center",
      path: "/help",
      description: "Documentation and support",
    },
  ];

  // Check if the current path is one of the excluded routes
  const isExcludedRoute = ["/services", "/contact", "/about"].includes(
    location.pathname
  );

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-indigo-900/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <Command className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-indigo-600">
              QUANTUM-LEAP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Main Menu Items */}
            {!isExcludedRoute &&
              menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-indigo-900 transition-colors hover:text-indigo-600"
                >
                  {item.label}
                </a>
              ))}

            {/* Action Items */}
            <div className="flex items-center gap-2">
              {/* GitHub Button */}
              <Button
                variant="ghost"
                className="text-sm hover:bg-indigo-50"
                onClick={() => window.open("https://github.com", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>

              {/* More Dropdown */}
              <div className="relative dropdown-container">
                <Button
                  variant="ghost"
                  className="text-sm font-medium text-indigo-900 hover:bg-indigo-50 flex items-center"
                  onClick={toggleDropdown}
                >
                  More
                  <ChevronDown
                    className={`h-4 w-4 ml-2 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
                <DropdownMenuContent
                  className={`absolute right-0 mt-2 w-64 bg-white shadow-lg p-2 rounded-md z-10 transition-all duration-300 transform ${
                    isDropdownOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {dropdownItems.map((item) => (
                    <DropdownMenuItem
                      key={item.path}
                      className="focus:bg-indigo-50 focus:text-indigo-900 cursor-pointer"
                    >
                      <Link to={item.path} className="flex gap-3 w-full">
                        <item.icon className="h-5 w-5 text-indigo-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">
                            {item.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </div>

              {/* Auth Buttons */}
              <Button
                variant="ghost"
                className="text-sm hover:bg-indigo-50"
                asChild
              >
                <Link to="/signup">Sign Up</Link>
              </Button>

              <Button
                className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20"
                asChild
              >
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-indigo-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-indigo-900/10 bg-white">
          <div className="space-y-1 p-4">
            {!isExcludedRoute &&
              mobileMenuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="block px-3 py-2 text-sm hover:bg-indigo-50 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            {dropdownItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-indigo-50 rounded-md"
              >
                <item.icon className="h-4 w-4 text-indigo-600" />
                {item.label}
              </Link>
            ))}
            <div className="pt-2 space-y-1">
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)} // Close menu on click
                className="block px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-md"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)} // Close menu on click
                className="block px-3 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 rounded-md text-center"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
