import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-6">
        Welcome to AuthApp
      </h1>
      <p className="text-gray-600 text-lg max-w-xl mb-8">
        A clean and simple authentication dashboard built with React, Vite,
        Context API, and Tailwind CSS.
      </p>
      <Link
        to="/signup"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg"
      >
        Get Started
      </Link>
    </div>
  );
}
