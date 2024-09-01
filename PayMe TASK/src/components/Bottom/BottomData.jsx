import React from "react";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";

function BottomData() {
  return (
    <section>
      <div className="py-2 media-padding-lef-right px-20">
        <div className=" flex">
          <div className="left w-1/2 media-width-40">
          <BottomLeft/>
          </div>
          <div className="right w-1/2 media-width-60">
          <BottomRight/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomData;
