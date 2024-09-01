import React from "react";
import Button from "../button/Button";
import HeroImages from "./HeroImage";

function HeroSection() {
  return (
    <section>
      <div className="h-[90vh] media-height px-20 relative flex justify-center items-center">
        <div className="left w-1/2 media-width-full">
          <h1 className="text-5xl font-bold w-[80%]">
            We Take Care Of Your Brand
          </h1>
          <p className="text-sm my-5">
            We care abut our work and we care about our clients.
          </p>
          <div>
            <input
              type="text"
              className="border-[1px] mr-2 outline-none bg-slate-100 py-[9px] placeholder:text-sm rounded-full px-3"
              placeholder="Enter Your Email"
            />
            <Button ButtonText="Lets Talk" color="px-7 py-3 text-[18px]" />
          </div>
        </div>
        <div className="right h-full w-1/2 mt-28  media-display-none">
          <HeroImages />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
