import React from "react";
import { FaMapMarkerAlt, FaGlobe, FaIndustry } from "react-icons/fa";

const Company = ({ comp }) => {
  return (
    <div className=" w-11/12 mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center space-y-4">
      <img
        src={comp.logo}
        alt={`${comp.name} logo`}
        className="w-24 h-24 object-contain rounded-full"
      />
      <h2 className="text-2xl font-bold text-gray-800">{comp.name}</h2>
      <div className="text-gray-600 flex items-center gap-2">
        <FaMapMarkerAlt />
        <span>{comp.location}</span>
      </div>
      <div className="text-gray-600 flex items-center gap-2">
        <FaIndustry />
        <span>{comp.industry}</span>
      </div>
      {/* <div className="text-blue-600 flex items-center gap-2">
        <FaGlobe />
        <a
          href={comp.website}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Visit Website
        </a>
      </div> */}
    </div>
  );
};

export default Company;
