import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden min-h-[600px]">
        
        {/* Left Section for Logo or Text */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-indigo-600">
              Quantum Leap
            </h1>
            <p className="mt-2 text-gray-600">
            Analyze, discuss, and unlock endless possibilities. Step into the future now!
            </p>
          </div>
        </div>

        {/* Right Section for Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Log in</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="text"
                  id="email"
                  {...register("email", { required: "Email or Username is required" })}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  {...register("password", { required: "Password is required" })}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition"
              >
                Log In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center justify-center mt-4">
              <div className="border-t border-gray-300 w-1/3"></div>
              <span className="text-gray-500 px-3 text-sm">Or continue with</span>
              <div className="border-t border-gray-300 w-1/3"></div>
            </div>

            {/* OAuth Buttons */}
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-gray-100 hover:text-indigo-600 p-2 rounded-lg shadow-md hover:bg-gray-200 transition">
                <FaGoogle size={20} />
              </button>
              <button className="bg-gray-100 p-2 hover:text-indigo-600 rounded-lg shadow-md hover:bg-gray-200 transition">
                <FaGithub size={20} />
              </button>
            </div>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-indigo-600 font-medium hover:underline">Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
