import React from "react";
import { use } from "react";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router";

const UserProfile = () => {
  const { user, updateUser } = use(AuthContext);
  const { email, photoURL, displayName } = user;
  const location = useLocation();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;

    updateUser({ displayName: name, photoURL: photourl })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photourl });
      })
      .catch((error) => {
        const errorM = error.message;
        setUser(user);
      });
  };

  return (
    <div className="flex items-center mx-auto justify-evenly h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <Helmet>
          <title>Job House | Profile</title>
        </Helmet>
        <div className="card-body">
          <h1 className="text-3xl font-bold">Update Profile</h1>
          <form onSubmit={handleUpdateProfile} className="fieldset">
            <label className="label">Name</label>
            <input
              required
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Photo URL</label>
            <input
              required
              type="text"
              name="photourl"
              className="input"
              placeholder="Photo URL"
            />

            <button type="submit" className="btn bg-blue-700 text-white mt-4">
              Update
            </button>

            <p className="text-red-700 "></p>
          </form>
        </div>
      </div>

      {/* user info  */}
      <div className="w-gl  bg-white rounded-2xl shadow-md p-6 text-center border border-blue-700">
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
      </div>
    </div>
  );
};

export default UserProfile;
