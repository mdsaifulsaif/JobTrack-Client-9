import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Register() {
  const { crateUser, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [errorMassage, setErrorMassage] = useState();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photorul = e.target.photourl.value;
    crateUser(email, password)
      .then((res) => {
        const user = res.user;
        // updateUser({ displayName: name, photoURL: photorul })
        //   .then((res) => {
        //     setUser({ ...user, displayName: name, photoURL: photorul });
        //     navigate("/");
        // })
        // .catch((error) => {
        //   const errorM = error.message;
        //   setErrorMassage(errorM);
        // });
        navigate("/");
      })
      .catch((error) => {
        const errorM = error.message;
        setErrorMassage(errorM);
      });
  };

  return (
    <div className="">
      <div className="flex my-5  items-center justify-center h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <Helmet>
              <title>Job House | Register</title>
            </Helmet>
            <h1 className="text-3xl font-bold">Register Now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              {/* name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              {/* name  */}
              <label className="label">Photo URL</label>
              <input
                name="photourl"
                type="text"
                className="input"
                placeholder="Photo URl"
              />
              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn text-white bg-blue-700 mt-4">
                Register
              </button>

              <p className="text-sm mt-2">
                You Have An Account ?{" "}
                <Link className="text-blue-700" to="/auth/Login">
                  Login
                </Link>
              </p>
              <p className="text-red-700 py-5">{errorMassage}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
