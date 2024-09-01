import React from "react";
import BannerRight from "./BannerRight";
import BannerLeft from "./BannerLeft";

function Banner() {
  return (
    <section>
      <div className="py-24 media-padding-0 media-padding-lef-right px-20">
        <div className="flex h-[45vh] justify-center items-center bg-[#3561FF] rounded-3xl">
          <div className="left w-1/2">
          {/* <div className="flex ">

          <div className="left h-full border-r-2 w-full rounded-full bg-gradient-to-r -blue-500">a</div>
          <div className="right h-full border-l-2 w-full rounded-full">a</div>
          </div> */}
          <BannerLeft/>
          </div>
          <div className="right w-1/2">
          <BannerRight/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
