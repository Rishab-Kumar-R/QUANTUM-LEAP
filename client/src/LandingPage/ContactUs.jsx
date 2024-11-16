import React from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";
import { useTheme } from "../Components/ThemeContext";

const ContactUs = () => {
  const { theme } = useTheme();

  return (
    <>
      <NavBar />
      <div
        className={`flex items-center justify-center min-h-screen ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div
          className={`w-full max-w-4xl p-8 shadow-lg rounded-lg flex gap-8 ${
            theme === "dark"
              ? "bg-gray-800 text-gray-200"
              : "bg-white text-gray-800"
          }`}
        >
          {/* Form Section */}
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-center">Contact Us!</h2>
            <p className="text-center">
              Fill up the form below to send us a message.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700 text-gray-200 focus:ring-indigo-500"
                    : "border-gray-300 bg-white text-gray-800 focus:ring-indigo-500"
                }`}
              />
              <input
                type="email"
                placeholder="Email"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700 text-gray-200 focus:ring-indigo-500"
                    : "border-gray-300 bg-white text-gray-800 focus:ring-indigo-500"
                }`}
              />
              <input
                type="text"
                placeholder="Subject"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700 text-gray-200 focus:ring-indigo-500"
                    : "border-gray-300 bg-white text-gray-800 focus:ring-indigo-500"
                }`}
              />
              <textarea
                placeholder="Type your message here..."
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700 text-gray-200 focus:ring-indigo-500"
                    : "border-gray-300 bg-white text-gray-800 focus:ring-indigo-500"
                }`}
                rows="4"
              ></textarea>

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className={`w-full px-4 py-2 rounded-lg focus:ring-4 transition ease-in-out duration-150 ${
                    theme === "dark"
                      ? "bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-400"
                      : "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-300"
                  }`}
                >
                  Send
                </button>
                <button
                  type="reset"
                  className={`w-full px-4 py-2 rounded-lg focus:ring-4 transition ease-in-out duration-150 ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-200 hover:bg-gray-600 focus:ring-gray-500"
                      : "bg-gray-200 text-gray-500 hover:bg-gray-300 focus:ring-gray-300"
                  }`}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden md:block w-1/2">
            <img
              src="/contact-form.jpg"
              alt="Contact us illustration"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ContactUs;
