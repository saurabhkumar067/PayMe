import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Button from "../button/Button";
import Logo from "../../assets/Logo.svg"


function BottomLeft() {
  return (
    <div>
      <div className="flex flex-col justify-start w-[50%]">
        <div className="logo text-3xl font-bold flex flex-row justify-center items-center gap-1">
          <span className="w-1/2 media-width-full"><img src={Logo} alt="" /></span>
        </div>
        <div className="flex text-3xl media-margin-3 text-[#3461FF] my-10 mb-16 m-auto justify-between items-center gap-7">
          <RiInstagramFill />
          <FaTwitter />
          <FaFacebook />
        </div>
        <div className="m-auto">
          <Button
            ButtonText="Contact Us"
            color="py-3 bg-[#3461FF] text-lg px-12 media-padding-2-1"
          />
        </div>
      </div>
    </div>
  );
}

export default BottomLeft;
