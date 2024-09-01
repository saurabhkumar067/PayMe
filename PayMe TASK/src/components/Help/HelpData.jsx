import React from "react";
import HelpLeft from "./HelpLeft";
import HelpRight from "./HelpRight";

function HelpData() {
  return (
    <section>
      <div className="py-24 px-20">
        <div className="py-16  media-padding-full media-display-block  flex">
          <div className="left w-1/2 media-width-full">
          <HelpLeft/>
          </div>
          <div className="right w-1/2 media-width-full">
          <HelpRight/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpData;
