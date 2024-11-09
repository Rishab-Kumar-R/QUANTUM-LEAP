import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useTheme } from "../Components/ThemeContext"; // Import useTheme to access theme context

function Login() {
  const { theme } = useTheme(); // Access the theme context
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const password = watch("password", "");

  // Password validation function
  const validatePassword = (value) => {
    const minLength = value.length >= 8;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (!minLength) return "Password must be at least 8 characters long";
    if (!hasUpperCase)
      return "Password must contain at least one uppercase letter";
    if (!hasLowerCase)
      return "Password must contain at least one lowercase letter";
    if (!hasNumber) return "Password must contain at least one number";
    if (!hasSpecialChar)
      return "Password must contain at least one special character";
    return true;
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen px-4 sm:px-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div
        className={`w-full max-w-7xl flex flex-col md:flex-row rounded-lg shadow-xl overflow-hidden min-h-[600px] ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Left Section for Logo or Text */}
        <div
          className={`w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-100"
          }`}
        >
          <div className="text-center">
            <h1
              className={`text-3xl md:text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-indigo-600"
              }`}
            >
              Quantum Leap
            </h1>
            <p
              className={`mt-2 text-sm md:text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Transform Images into Meaningful Conversations Instantly
            </p>
          </div>
        </div>

        {/* Right Section for Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Log in
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  id="email"
                  {...register("email", {
                    required: "Email or Username is required",
                  })}
                  className={`w-full p-2 md:p-3 mt-1 border rounded-lg focus:outline-none ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
                      : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      validate: validatePassword,
                    })}
                    className={`w-full p-2 md:p-3 mt-1 border rounded-lg focus:outline-none ${
                      theme === "dark"
                        ? "border-gray-700 bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
                        : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    }`}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-2 md:py-3 mt-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition"
              >
                Log In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center justify-center mt-4">
              <div
                className={`border-t w-1/3 ${
                  theme === "dark" ? "border-gray-600" : "border-gray-300"
                }`}
              ></div>
              <span className="px-3 text-sm">Or continue with</span>
              <div
                className={`border-t w-1/3 ${
                  theme === "dark" ? "border-gray-600" : "border-gray-300"
                }`}
              ></div>
            </div>

            {/* OAuth Buttons */}
            <div className="flex justify-center mt-4 space-x-4">
              <button
                className={`p-2 rounded-lg shadow-md transition ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <FaGoogle size={20} className="text-blue-500" />
              </button>
              <button
                className={`p-2 rounded-lg shadow-md transition ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <FaGithub size={20} className="text-black" />
              </button>
            </div>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
