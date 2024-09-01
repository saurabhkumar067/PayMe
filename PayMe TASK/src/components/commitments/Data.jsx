import React from "react";
import NumberData from "./NumberData";
import TextData from "./TextData";

function Data() {
  return (
    <section>
      <div className="">
        <div className="media-padding-lef-right py-32 flex px-20">
          <div className="left w-1/2">
            <NumberData />
          </div>
          <div className="right w-1/2 ">
            <TextData />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Data;
