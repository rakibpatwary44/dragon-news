import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold mb-5 ">Login With</h1>
      <div className=" space-y-3">
        <button className="btn btn-outline btn-secondary w-full ">
          {" "}
          <FcGoogle size={30} />
          Login with Github
        </button>
        <button className="btn btn-outline btn-primary shadow-0  w-full ">
          <FaGithub size={30} />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
