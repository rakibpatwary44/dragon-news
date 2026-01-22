import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const FindUs = () => {
  return (
    <div className=" space-y-5">
      <h2 className="font-bold">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full  ">
          <button className="btn font-bold text-base bg-base-100  text-accent border shadow-none justify-start join-item ">
            <FaFacebook size={20} color="Blue" /> Facebook
          </button>
          <button className="btn font-bold text-base bg-base-100  text-accent border shadow-none justify-start join-item">
            <TiSocialTwitter size={25} color="red" /> Twitter
          </button>
          <button className="btn font-bold text-base bg-base-100  text-accent border shadow-none justify-start join-item">
            <BsInstagram size={20} color="orange" /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
