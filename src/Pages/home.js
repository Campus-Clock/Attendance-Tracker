import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-lg font-semibold text-gray-500">For Everyone</h1>
      <h2 className="mt-2 text-4xl font-bold text-gray-800 text-center">
        Make a attendance in <span className="text-purple-600">2 Minutes</span>
      </h2>
      <p className="mt-4 text-gray-600 text-center max-w-md">
        attendancetracker.ai is your one-stop solution for professional attendance marking.
        Create and edit forms with ease, no knowledge required.
      </p>

      <div className="mt-6 space-y-4">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Make your attendance now
        </button>
        <p className="text-gray-600">
          Or starts with our{" "}
          <a href="#" className="text-purple-600 hover:underline">
            own profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;