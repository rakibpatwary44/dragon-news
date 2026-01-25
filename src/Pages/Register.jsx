import React, { use } from "react";
import { Link } from "react-router";
import { authContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(authContext);
  const handelRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center text-red-500">
          Register your account
        </h2>
        <form onSubmit={handelRegister} className="card-body">
          <fieldset className="fieldset">
            {/* //Name */}
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter your name"
            />
            {/* //photo url */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="link"
              className="input"
              placeholder="Enter your photo link"
            />
            {/* //email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Enter your email address"
            />
            {/* //password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder=" Enter your  Password"
            />
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className="font-semibold text-center">
          Already! Have An Account ?{" "}
          <Link className="text-secondary " to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
