import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

import banner2 from "../assets/banner2.png";

function HiringBanner() {
  return (
    <div className="flex my-10 items-center justify-between bg-white shadow-md rounded-xl p-6 max-w-6xl mx-auto mt-10">
      {/* Left illustration (placeholder) */}
      <div className="w-1/5 flex items-center justify-center hidden md:block">
        <img src={banner2} alt="Person standing" className="w-full" />
        {/* <FaArrowLeft size={30} /> */}
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left px-4">
        <p className="text-gray-500 text-sm uppercase font-semibold tracking-wider">
          We Are
        </p>
        <h1 className="text-4xl font-bold text-blue-700">HIRING</h1>
        <p className="mt-2 text-gray-600 text-lg">
          Let’s <span className="font-semibold text-black">Work Together</span>{" "}
          &amp;{" "}
          <span className="font-semibold text-blue-600">
            Explore Opportunities
          </span>
        </p>
      </div>

      {/* Apply Now Button */}
      <div className="w-fit">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          <span>Apply now</span>
          <FaArrowRight />
        </button>
      </div>

      {/* Right illustration (placeholder) */}
      <div className="w-1/5 hidden md:block">
        {/* <img
          src="/illustration-right.svg"
          alt="Team working"
          className="w-full"
        /> */}
      </div>
    </div>
  );
}

export default HiringBanner;
