import React from "react";
import Button from "../button/Button";
import Logo from "../../assets/Logo.svg"


function Navbar() {
  return (
    <div>
      <nav className="border-b-[1px] media-padding flex justify-between items-center py-2 px-20">
        <div className="logo text-xl font-bold flex flex-row justify-center items-center gap-1">
          <span className="tracking-tighter w-1/2 media-width">
            <img src={Logo} alt="" />
          </span>
        </div>
        <div className="navText">
          <ul className="flex justify-center items-center gap-7 media-gap">
            <li>
              <a href="/">How It Works</a>
            </li>
            <li>
              <a href="/our-work">Our Work</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>
        <Button ButtonText="Book A Call" color="media-button"/>
      </nav>
    </div>
  );
}

export default Navbar;
