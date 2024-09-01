import React from "react";
import Button from "../button/Button";
import UpArrow from "../../assets/UpArrow.svg";
import Bill from "../../assets/Bill.svg";

const StartJourney = () => {
  return (
    <div className="flex justify-center items-center p-10 bg-white">
      <div className="relative bg-[#353348] rounded-3xl p-10 flex flex-col md:flex-row items-center text-white w-full max-w-4xl">
        <div className="absolute inset-0 grid grid-cols-12 overflow-hidden rounded-3xl gap-px">
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>

          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>

          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>

          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>

          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-800"></div>
        </div>

        <div className="relative md:w-2/3 text-center md:text-left space-y-4 z-10">
          <h2 className="text-4xl mb-8 font-semibold">
            Start Your Journey <br /> With Us Now
          </h2>

          <Button ButtonText="Start Now" color="border-none px-8" />
        </div>

        <div className="relative md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0 z-10">
          <div className="bg-lime-400 media-height-200 h-[250px] w-[250px] text-blue-600 rounded-full p-10 flex items-center justify-center">
            <div className="flex justify-center media-width-50">
              <img src={Bill} alt="" />
              <img src={UpArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
