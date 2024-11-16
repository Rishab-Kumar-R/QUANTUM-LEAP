// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { MoonIcon, SunIcon } from "lucide-react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { useTheme } from "../Components/ThemeContext";
// import assets from "../assets/assets";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Link } from "react-router-dom";
// import MoreDropdown from "./MoreDropdown"; // Import the new dropdown component

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Features", href: "#features" },
//   { name: "Workflow", href: "#workflow" },
//   { name: "More", href: "#" }, // Add More
// ];

// function NavBar() {
//   const { theme, toggleTheme } = useTheme();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();

//   const handleSignIn = () => navigate("/login");
//   const handleSignUp = () => navigate("/signup");

//   const handleScroll = (e, href) => {
//     e.preventDefault();
//     setMobileMenuOpen(false);
//     document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? theme === "dark"
//             ? "bg-gray-800 bg-opacity-90"
//             : "bg-white bg-opacity-90"
//           : theme === "dark"
//           ? "bg-gray-900"
//           : "bg-transparent"
//       }`}
//     >
//       <header className="w-full backdrop-blur-md">
//         <nav
//           aria-label="Global"
//           className="flex items-center justify-between p-6 lg:px-8"
//         >
//           <div className="flex lg:flex-1 items-center">
//             <a href="/" className="-m-1.5 p-1.5 flex items-center">
//               <img
//                 href="/"
//                 alt="Logo"
//                 src={assets.logo}
//                 className="h-16 w-12"
//               />
//               <span
//                 className={`ml-2 text-2xl font-bold ${
//                   theme === "dark" ? "text-white" : "text-indigo-900"
//                 }`}
//               >
//                 QuantumLeap
//               </span>
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="h-6 w-6" />
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item, index) =>
//               item.name === "More" ? (
//                 <MoreDropdown key={index} />
//               ) : (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   onClick={(e) => handleScroll(e, item.href)}
//                   className={`text-md font-bold ${
//                     theme === "dark"
//                       ? "text-white hover:text-gray-400"
//                       : "text-indigo-900 hover:text-indigo-600"
//                   }`}
//                 >
//                   {item.name}
//                 </a>
//               )
//             )}
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-md text-gray-900 focus:outline-none dark:text-white"
//             >
//               {theme === "dark" ? (
//                 <SunIcon className="h-6 w-6" />
//               ) : (
//                 <MoonIcon className="h-6 w-6" />
//               )}
//             </button>
//             <button
//               onClick={handleSignUp}
//               className="text-md font-semibold bg-indigo-600 px-3 py-2 rounded-md text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
//             >
//               Sign Up
//             </button>
//             <button
//               onClick={handleSignIn}
//               className="text-md font-semibold bg-indigo-600 px-3 py-2 rounded-md text-white shadow-sm hover:bg-indigo-500 flex items-center gap-2 transition ease-out duration-300"
//             >
//               Log In
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <Dialog
//           open={mobileMenuOpen}
//           onClose={setMobileMenuOpen}
//           className="lg:hidden"
//         >
//           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-64 sm:w-72 overflow-y-auto bg-gray-200 dark:bg-gray-700 px-4 py-4 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-out">
//             <div className="flex items-center justify-between">
//               <a
//                 href="#"
//                 onClick={(e) => handleScroll(e, "#")}
//                 className="-m-1.5 p-1.5"
//               >
//                 <img alt="Logo" src={assets.logo} className="h-12 w-auto" />
//               </a>
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="rounded-md p-2.5 text-gray-700 dark:text-white"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-300 dark:divide-gray-600">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item, index) =>
//                     item.name === "More" ? (
//                       <MoreDropdown key={index} isMobile />
//                     ) : (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         onClick={(e) => handleScroll(e, item.href)}
//                         className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
//                           theme === "dark" ? "text-gray-200" : "text-gray-900"
//                         } hover:bg-gray-300 dark:hover:bg-gray-600`}
//                       >
//                         {item.name}
//                       </a>
//                     )
//                   )}
//                 </div>
//                 <div className="py-6 flex flex-col space-y-4">
//                   <button
//                     onClick={toggleTheme}
//                     className="rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-gray-200"
//                   >
//                     {theme === "dark" ? (
//                       <SunIcon className="h-6 w-6" />
//                     ) : (
//                       <MoonIcon className="h-6 w-6" />
//                     )}
//                   </button>
//                   <Link
//                     to="/login"
//                     className="block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
//                   >
//                     Log In
//                   </Link>
//                   <Link
//                     to="/signup"
//                     className="mt-4 block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
//                   >
//                     Sign Up
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </DialogPanel>
//         </Dialog>
//       </header>
//     </div>
//   );
// }

// export default NavBar;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../Components/ThemeContext";
import assets from "../assets/assets";
import { Dialog, DialogPanel } from "@headlessui/react";
import MoreDropdown from "./MoreDropdown"; // Import the new dropdown component

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  { name: "More", href: "#" }, // Add More
];

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => navigate("/login");
  const handleSignUp = () => navigate("/signup");

  const handleScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-gray-800 bg-opacity-90"
            : "bg-white bg-opacity-90"
          : theme === "dark"
          ? "bg-gray-900"
          : "bg-transparent"
      }`}
    >
      <header className="w-full backdrop-blur-md">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1 items-center">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <img
                href="/"
                alt="Logo"
                src={assets.logo}
                className="h-16 w-12"
              />
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
            {navigation.map((item, index) =>
              item.name === "More" ? (
                <MoreDropdown key={index} />
              ) : (
                <a
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (item.name === "Home") {
                      navigate("/"); // Navigate to the home page
                    } else {
                      handleScroll(e, item.href); // Smooth scroll for other links
                    }
                  }}
                  className={`text-md font-bold hover:cursor-pointer ${
                    theme === "dark"
                      ? "text-white hover:text-gray-400"
                      : "text-indigo-900 hover:text-indigo-600"
                  }`}
                >
                  {item.name}
                </a>
              )
            )}
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
            <button
              onClick={handleSignUp}
              className="text-md font-semibold bg-indigo-600 px-3 py-2 rounded-md text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
            >
              Sign Up
            </button>
            <button
              onClick={handleSignIn}
              className="text-md font-semibold bg-indigo-600 px-3 py-2 rounded-md text-white shadow-sm hover:bg-indigo-500 flex items-center gap-2 transition ease-out duration-300"
            >
              Log In
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-64 sm:w-72 overflow-y-auto bg-gray-200 dark:bg-gray-700 px-4 py-4 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-out">
            <div className="flex items-center justify-between">
              <a
                href="#"
                onClick={(e) => handleScroll(e, "#")}
                className="-m-1.5 p-1.5"
              >
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
                  {navigation.map((item, index) =>
                    item.name === "More" ? (
                      <MoreDropdown key={index} isMobile />
                    ) : (
                      <a
                        key={item.name}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                          if (item.name === "Home") {
                            navigate("/"); // Navigate to the home page
                          } else {
                            handleScroll(e, item.href); // Smooth scroll for other links
                          }
                        }}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        } hover:bg-gray-300 dark:hover:bg-gray-600`}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
                <div className="py-6 flex flex-col space-y-4">
                  <button
                    onClick={toggleTheme}
                    className="rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-gray-200"
                  >
                    {theme === "dark" ? (
                      <SunIcon className="h-6 w-6" />
                    ) : (
                      <MoonIcon className="h-6 w-6" />
                    )}
                  </button>
                  <a
                    href="/login"
                    className="block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
                  >
                    Log In
                  </a>
                  <a
                    href="/signup"
                    className="mt-4 block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition ease-out duration-300"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}

export default NavBar;
