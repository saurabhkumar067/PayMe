import React from "react";
import HowItWorkImage from "../../assets/HowItWorkImage.svg";

function WorksLeft() {
  return (
    <div>
      <div className="pr-14">
        <h1 className="text-5xl media-margin-2 font-semibold">How It Works</h1>
        <p className="text-[#666666] media-margin-2 mt-10 media-margin-3 mb-20 flex flex-col gap-y-2">
          <span>
            We believe that the best way to create successful marketing
          </span>
          <span>
            campaigns is to work closely with our clients to understand
          </span>
          their goals and challenges.
        </p>
        <div>
          <img src={HowItWorkImage} className="w-[78%] media-width-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default WorksLeft;
