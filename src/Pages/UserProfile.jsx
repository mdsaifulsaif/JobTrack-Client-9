import React from "react";
import { use } from "react";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UserProfile = () => {
  const { user } = use(AuthContext);
  const { email, photoURL, displayName } = user;
  // console.log(user.email);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl shadow-md p-6 text-center border border-blue-700">
        <img
          src={photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-700 object-cover"
        />
        <h2 className="text-xl font-bold text-blue-700 mb-1">
          {displayName && displayName}
        </h2>
        <div className="flex items-center justify-center text-gray-600 gap-2">
          <FaEnvelope className="text-blue-700" />
          <span>{email && email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
