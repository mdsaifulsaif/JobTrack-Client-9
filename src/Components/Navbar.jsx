// Navbar.jsx
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {
  const [clickIcon, setClickIcon] = useState(false);
  const handleMenuIcon = () => {
    setClickIcon(!clickIcon);
    console.log(clickIcon);
  };

  const menuItem = (
    <>
      {/* Desktop Menu */}

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
      <Link
        to="/auth/login"
        className=" px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Login
      </Link>
    </>
  );

  return (
    <nav className="w-full bg-gray-200 mb-4 shadow-md relative">
      <div className="max-w-7xl mx-auto  md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">{menuItem}</div>
        {/* mobile Menu */}
        <div
          className={`w-full absolute ${
            clickIcon ? "top-15" : "-top-100"
          }   items-center left-0 md:hidden flex flex-col py-5  gap-3 bg-gray-200 transition-all`}
        >
          {menuItem}
        </div>

        {/* Mobile Hamburger Icon (Optional for mobile toggle) */}
        <div className="md:hidden">
          <button onClick={handleMenuIcon}>
            {clickIcon ? <IoClose size={30} /> : <FaBarsStaggered size={30} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
