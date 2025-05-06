import { useState } from "react";
import {
  FiBriefcase,
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiTag,
} from "react-icons/fi";

import { FiX } from "react-icons/fi";
import { HiSpeakerphone } from "react-icons/hi";

const Job = ({ jobdata, weblink }) => {
  const [modalData, setModalData] = useState(null);
  const handleModal = (modaldata) => {
    setModalData(modaldata);
  };
  return (
    <>
      <div className="md:w-9/12 mx-auto p-4">
        <div className="bg-white  border border-blue-500  rounded-md flex flex-col md:flex-row justify-between  items-center p-4 relative overflow-hidden transition duration-300 hover:border-blue-500 hover:shadow-lg group">
          {/* Left section */}
          <div className="flex flex-col md:flex-row  items-center gap-4">
            {/* Logo */}
            <div className="w-16 h-16 rounded-full bg-white border p-1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
                alt="Company Logo"
                className="rounded-full w-full h-full object-contain"
              />
            </div>

            {/* Job Info */}
            <div className="">
              <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full font-medium mb-1">
                <FiBriefcase className="inline mr-1" />
                {jobdata.jobType}
              </span>
              <h2 className="text-xl font-semibold text-black group-hover:text-black leading-tight">
                {jobdata.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-700">
                  <FiTag className="mr-1" />
                  Graphic Designer
                </span>
                <span className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-700">
                  <FiDollarSign className="mr-1" />
                  {jobdata.salary}
                </span>
              </div>
            </div>
          </div>

          {/* Browse Button */}
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => handleModal(jobdata)}
              className="bg-blue-500 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-black transition"
            >
              Job Details <HiSpeakerphone className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md w-full max-w-lg p-6 relative">
            <button
              onClick={() => setModalData(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <FiX size={20} />
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {modalData.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {modalData.description}
            </p>

            <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
              {jobdata.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <span className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-700">
                <FiDollarSign className="mr-1" />
                salary {jobdata.salary}
              </span>
              <span className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-700">
                <FiDollarSign className="mr-1" />
                Location {jobdata.location}
              </span>
            </div>

            <div className="flex justify-end gap-3">
              <a
                href={weblink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Apply
              </a>
              <button
                onClick={() => setModalData(null)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;
