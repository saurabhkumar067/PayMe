import React from "react";
import Button from "../button/Button";
import { FaArrowRightLong } from "react-icons/fa6";

function TextData() {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-semibold mb-5">Commitments</h1>
        <p className="text-[#666666] mb-9">
          We are committed to working with you collaboratively to understand
          your goals and create a strategy that will achieve them.
        </p>
        <div className="text-blue-600 flex justify-center w-[21%] media-width-TextData items-center">
          <Button
            ButtonText="Learn More"
            color="bg-white media-color  border-none text-[#3d3db5] font-semibold tracking-wide pl-0 m-0 text-[15px] hover:bg-white hover:text-blue-800"
          />
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
}

export default TextData;
