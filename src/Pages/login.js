import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center py-10 bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Log in to Attendance Tracker
        </h2>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700">
            Google
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center justify-center hover:bg-red-600">
            Firebase
          </button>
        </div>

        {/* Notice */}
        <div className="mb-4 text-sm text-blue-600 bg-blue-100 p-2 rounded-md">
          Notice: Temporary working on Twitter and ... Login
        </div>

        {/* Email and Password Inputs */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Recaptcha */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="recaptcha" />
            <label htmlFor="recaptcha" className="text-sm text-gray-700">
              I'm not a robot
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Log in
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <p href="#" className="text-sm">
            Don't have an account, 
            <Link
              to="/signup"
              className="hover:underline text-blue-600 hover:text-blue-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
