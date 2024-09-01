import React from "react";
import Apple from "../assets/Apple.svg";
import CocaCola from "../assets/CocaCola.svg";
import Nike from "../assets/Nike.svg";
import Button from "./button/Button";

function OurWork() {
  const ourWorkData = [
    {
      name: "Apple",
      svg: Apple,
    },
    {
      name: "Coca-Cola",
      svg: CocaCola,
    },
    {
      name: "Nike",
      svg: Nike,
    },
  ];
  return (
    <section>
      <div className="mb-20">
        <div className="text-center">
          <h1 className="text-6xl font-semibold">Our Work</h1>
          <p className="mt-8 mb-14 text-[#666666]">
            A glimpse of our portfolio
          </p>
        </div>
        <div className="flex gap-5 media-padding-lef-right px-20 justify-between items-center">
          {ourWorkData.map((item, index) => {
            const { name, svg } = item;
            return (
              <div key={index}>
                <img src={svg} />
                <h2 className="text-center text-xl font-semibold mt-2">
                  {name}
                </h2>
              </div>
            );
          })}
        </div>
        <div className="w-[12.4%] media-width-16  my-10 m-auto">
          <Button ButtonText="See More" color="px-10 text-xl" />
        </div>
      </div>
    </section>
  );
}

export default OurWork;
