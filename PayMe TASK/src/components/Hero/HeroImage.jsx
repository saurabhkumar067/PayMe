import React from "react";
import Image1 from "../../assets/Image-1.svg";
import Image2 from "../../assets/Image-2.svg";
import ThreeImage from "../Image-3";
import Image4 from "../../assets/Image-4.svg";
import Ellipse from "../../assets/Ellipse.svg";
function Image() {
  const storeImges = [
    { svg: Image1 },
    { svg: Image2 },
    { svg: ThreeImage },
    { svg: Image4 },
    { svg: Ellipse },
    // { svg: Image6 },
    // { svg: Image7 },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 tracking-tighter leading-none relative gap-0">
        {/* <img src={Ellipse} alt="" /> */}
        {storeImges.map((item, index) => {
          return (
            <div key={index} className="">
              <img src={item.svg} className="w-[80%]" alt="" />
            </div>
          );
        })}
        <ThreeImage
          ImageTextValue="✏️"
          classValue="absolute px-16 py-12 text-7xl top-[27%] left-[0%] bg-[#5D34FF] "
        />
        <ThreeImage
          ImageTextValue="👩🏻‍💻"
          classValue="absolute px-8 py-16 text-7xl top-[62%] left-[39.5%] bg-[#E0FF22] "
        />
        <ThreeImage
          ImageTextValue="👑"
          classValue="absolute px-8 py-16 text-7xl top-[62%] left-[67.5%] bg-[#FFD360]"
        />
        <ThreeImage
          ImageTextValue="👑"
          classValue="absolute px-8 py-16 text-7xl top-[62%] left-[67.5%] bg-[#FFD360]"
        />
        <ThreeImage
          ImageTextValue="😍"
          classValue="absolute px-7 py-3 text-4xl rotate-[-30deg] top-[0%] left-[40%] bg-[#000000]"
        />
        <ThreeImage
          ImageTextValue="🤏"
          classValue="absolute px-2 py-7 text-4xl rotate-[120deg] top-[52%] left-[35%] bg-[#000000]"
        />
      </div>
    </div>
  );
}

export default Image;
