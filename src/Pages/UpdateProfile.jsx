import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

function UpdateProfile() {
  const { user, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log("click");
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;

    updateUser({ displayName: name, photoURL: photourl })
      .then((res) => {
        setUser({ ...user, displayName: name, photoURL: photourl });
        navigate("/myprofile");
        alert("user updated");
      })
      .catch((error) => {
        const errorM = error.message;
        // setErrorMassage(errorM);
      });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      {/* user update from  */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <Helmet>
            <title>Job House | Update User</title>
          </Helmet>
          <h1 className="text-3xl font-bold">Update Profile</h1>
          <form onSubmit={handleUpdateProfile} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Photo URL</label>
            <input
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
    </div>
  );
}

export default UpdateProfile;
