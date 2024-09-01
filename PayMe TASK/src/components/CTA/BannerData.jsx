import React from "react";
import BannerRight from "./BannerRight";
import BannerLeft from "./BannerLeft";

function Banner() {
  return (
    <section>
      <div className="py-24 media-padding-0 media-padding-lef-right px-20">
        <div className="flex h-[45vh] justify-center items-center bg-[#3561FF] rounded-3xl">
          <div className="left w-1/2">
            <BannerLeft />
          </div>
          <div className="right w-1/2">
            <BannerRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
