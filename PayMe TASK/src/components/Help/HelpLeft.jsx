import React from "react";
import Plus from "../../assets/Plus.svg";

function HelpLeft() {
  return (
    <div className="border-t-2 ">
      {[
        "How do i sign up for the project?",
        "What thing that i should prepare before starting",
        "Does my company need help for marketing advices?",
      ].map((item, index) => {
        return (
          <div
            key={index}
            className="flex border-b-2 justify-between items-center py-6 text-lg"
          >
            <h3>{item}</h3>
            <img src={Plus} className="cursor-pointer" alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default HelpLeft;
