// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-200 mb-4 shadow-md">
      <div className="max-w-7xl mx-auto  md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </a>
          <button className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Hamburger Icon (Optional for mobile toggle) */}
        <div className="md:hidden">
          <button>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
