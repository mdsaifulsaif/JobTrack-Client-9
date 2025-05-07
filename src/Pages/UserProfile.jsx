import React from "react";
import { use } from "react";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const UserProfile = () => {
  const { user, updateUser } = use(AuthContext);
  const { email, photoURL, displayName } = user;
  // console.log(user.email);

  return (
    <div className="flex items-center justify-center h-screen">
      <Helmet>
        <title>Job House | Profile </title>
      </Helmet>

      {/* user info  */}
      <div className="w-xl mx-auto  bg-white rounded-2xl shadow-md p-6 text-center border border-blue-700">
        <img
          src={photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-700 object-cover"
        />
        <h2 className="text-xl font-bold text-blue-700 mb-1">
          {displayName && displayName}
        </h2>
        <div className="flex mb-5 items-center justify-center text-gray-600 gap-2">
          <FaEnvelope className="text-blue-700" />
          <span>{email && email}</span>
        </div>
        <Link
          className="bg-blue-700 px-3 py-2 rounded-sm text-white mt-5"
          to="/update-user"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
