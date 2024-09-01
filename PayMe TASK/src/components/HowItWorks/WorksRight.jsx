import React from "react";
import Discovery from "../../assets/Discovery.svg";
import Strategy from "../../assets/Strategy.svg";
import Execution from "../../assets/Execution.svg";
import Measurement from "../../assets/Measurement.svg";

function WorksRight() {
  const WorksTextData = [
    {
      icon: Discovery,
      title: "Discovery",
      disc: "We meet with you to learn about your business, your goals, and your target audience.",
    },
    {
      icon: Strategy,
      title: "Strategy",
      disc: "We develop a customized marketing strategy that is based on your unique needs and goals.",
    },
    {
      icon: Execution,
      title: "Execution",
      disc: "We execute our strategy using the latest digital marketing tools and techniques.",
    },
    {
      icon: Measurement,
      title: "Measurement",
      disc: "We track the results of our campaigns so that we can make adjustments as needed.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-between gap-11">
        {WorksTextData.map((item, index) => {
            const {icon, title, disc} = item;
          return (
            <div key={index} className="flex gap-6 justify-center items-center">
              <img src={icon} />
              <div>
                <h2 className="text-3xl font-semibold mb-2">{title}</h2>
                <p className="text-[15px] text-[#666666]">{disc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorksRight;
