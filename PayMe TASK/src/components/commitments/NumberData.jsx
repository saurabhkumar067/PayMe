import React from "react";

function NumberData() {
  const storeCommData = [
    { numberText: "245%", paraText: "More revenues for the brand" },
    { numberText: "130K+", paraText: "Audiences reached" },
    { numberText: "50+", paraText: "Brands trust us" },
    { numberText: "24+", paraText: "Worldwide Awards" },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-y-10">
        {storeCommData.map((item, index) => {
          const { numberText, paraText } = item;
          return (
            <div key={index} className="">
              <h1 className="text-5xl media-font font-bold">{numberText}</h1>
              <p className="text-sm media-width-65 my-1 text-[#666666]">{paraText}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NumberData;
