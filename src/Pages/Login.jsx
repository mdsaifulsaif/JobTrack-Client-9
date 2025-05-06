import React, { use } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useState } from "react";

function Login() {
  const [errorMassage, setErrorMassage] = useState();
  const navigate = useNavigate();
  const { LoginUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    LoginUser(email, password)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        const errorM = error.message;
        setErrorMassage(errorM);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn bg-blue-700 text-white mt-4">
              Login
            </button>

            <p className="text-sm mt-2">
              Dont’t Have An Account ?{" "}
              <Link className="text-blue-700" to="/auth/register">
                Register
              </Link>
            </p>
            <p className="text-red-700 ">{errorMassage}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
