import React from "react";
import Button from "../button/Button";
import { FaArrowRightLong } from "react-icons/fa6";

function HelpRight() {
  return (
    <div>
      <div className="px-20 media-padding-full media-padding-2-5 ">
        <h1 className="text-4xl font-semibold">How We Can Help You?</h1>
        <p className="text-[#8C8C8C] text-lg mt-4 mb-7 media-width-65">
          Follow our newsletter. We will regulary update our latest project and
          availability.
        </p>
        <div className="flex flex-row items-center">
          <input
            type="text"
            className="mr-2 bg-slate-100 py-3 placeholder:text-sm rounded-full px-3"
            placeholder="Enter Your Email"
          />
          <Button ButtonText="Lets Talk" color="py-3 px-7" />
        </div>
        <div className="text-blue-600 flex media-justify-content-none justify-center w-[26%] items-center mt-5">
          <Button
            ButtonText="More FAQ"
            color="underline text-[#3d3db5] media-color bg-white border-none color font-bold tracking-wide pl-0 m-0 text-[15px] hover:bg-white hover:text-blue-800"
          />
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
}

export default HelpRight;
