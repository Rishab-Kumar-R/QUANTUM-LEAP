import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../Components/ThemeContext";
import assets from "../assets/assets";
import { Dialog, DialogPanel } from "@headlessui/react";
import FeaturesSection from "./FeaturesSection";
import { Link } from "react-router-dom"; // Import Link for navigation

const navigation = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  { name: "About", href: "#about" },
];

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = () => navigate("/login");
  const handleSignUp = () => navigate("/signup");

  return (
    <div className="bg-transparent dark:bg-gray-800 transition-colors">
      <header className="sticky top-0 z-50 w-full bg-transparent dark:bg-gray-800 dark:bg-opacity-75 bg-opacity-50 backdrop-blur-md">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <img alt="Logo" src={assets.logo} className="h-16 w-12" />
              <span
                className={`ml-2 text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-indigo-900"
                }`}
              >
                QuantumLeap
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-md font-bold ${
                  theme === "dark"
                    ? "text-white hover:text-gray-400" // Changed hover color in dark mode to light gray
                    : "text-indigo-900 hover:text-indigo-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
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

            {/* Sign Up Button */}
            <button
              onClick={handleSignUp} // Use function to navigate on click
              className="text-md font-semibold bg-indigo-600 px-3 py-2 rounded-md text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
            >
              Sign Up
            </button>

            {/* Sign In Button */}
            <button
              onClick={handleSignIn} // Use function to navigate on click
              className="text-md font-semibold bg-indigo-600 px-3 py-2 rounded-md text-white shadow-sm hover:bg-indigo-500 flex items-center gap-2 transition ease-out duration-300"
            >
              Log In
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {/* <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-64 sm:w-72 overflow-y-auto bg-gray-200 dark:bg-gray-700 px-4 py-4 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img alt="Logo" src={assets.logo} className="h-12 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2.5 text-gray-700 dark:text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-300 dark:divide-gray-600">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                        theme === "dark" ? "text-gray-200" : "text-gray-900"
                      } hover:bg-gray-300 dark:hover:bg-gray-600`}
                      onClick={() => setMobileMenuOpen(false)} // Close the menu after clicking
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="mt-4 block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog> */}

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-64 sm:w-72 overflow-y-auto bg-gray-200 dark:bg-gray-700 px-4 py-4 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img alt="Logo" src={assets.logo} className="h-12 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2.5 text-gray-700 dark:text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-300 dark:divide-gray-600">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href} // Changed from Link to an anchor tag
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                        theme === "dark" ? "text-gray-200" : "text-gray-900"
                      } hover:bg-gray-300 dark:hover:bg-gray-600`}
                      onClick={() => setMobileMenuOpen(false)} // Close menu after click
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="mt-4 block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6  lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1
              className={`text-5xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-7xl`}
            >
              Welcome to QuantumLeap
            </h1>
            <p
              className={`mt-8 text-lg font-medium ${
                theme === "dark" ? "text-white" : "text-gray-500"
              } sm:text-xl`}
            >
              Empowering conversations through image recognition. Unlock
              insights, engage users, and transform how you interact with visual
              data.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
              >
                Get started
              </a>
              <a
                href="#"
                className={`text-sm font-semibold ${
                  theme === "dark"
                    ? "text-white hover:text-gray-400"
                    : "text-gray-900"
                }`}
              >
                Documentation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="features">
        <FeaturesSection />
      </section>
    </div>
  );
}

export default NavBar;
