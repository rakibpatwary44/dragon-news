import React from "react";
import swmmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import palygImg from "../../assets/playground.png";
import bgImg from "../../assets/bg.png";
import vidoe from "../../assets/Triangles_01.mp4";

const Qzone = () => {
  return (
    <div>
      <div className="bg-base-300 p-5">
        <h2 className="font-bold text-xl text-center">Q-Zone</h2>
        <img src={swmmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={palygImg} alt="" />
      </div>
      <div className="p-5 space-y-4 ">
        <p className="text-accent text-center ">google ad:</p>
        <img src={bgImg} alt="" />
      </div>
      <video
        class="rotate-video rotate-90 p-5  h-72 mt-10   object-cover "
        autoplay
        muted
        loop
        playsinline
        controls
      >
        <source src={vidoe} type="video/mp4" />
      </video>
    </div>
  );
};

export default Qzone;
