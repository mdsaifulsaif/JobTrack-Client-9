import React, { use } from "react";
import { Link } from "react-router";

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <div className="">
      <div className="flex  items-center justify-center h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
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
              <button type="submit" className="btn bg-blue-700 mt-4">
                Register
              </button>

              <p className="text-sm mt-2">
                You Have An Account ?{" "}
                <Link className="text-blue-700" to="/auth/Login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
