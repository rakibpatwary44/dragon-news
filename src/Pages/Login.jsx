import React, { use } from "react";
import { Link } from "react-router";
import { authContext } from "../Provider/AuthProvider";

const Login = () => {
  const { userSignIn } = use(authContext);
  console.log(userSignIn);
  const handelLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center text-blue-600">
          Login your account
        </h2>
        <form onSubmit={handelLogIn} className="card-body">
          <fieldset className="fieldset">
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
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
        </form>
        <p className="font-semibold text-center">
          Dont’t Have In Account ?{" "}
          <Link className="text-secondary " to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
