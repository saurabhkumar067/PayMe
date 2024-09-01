import React from "react";
import WorksLeft from "./WorksLeft";
import WorksRight from "./WorksRight";

function Works() {
  return (
    <section>
      <div className="py-24 media-padding-bottom px-20">
        <div className="py-16 media-display-block flex">
            <div className="left w-1/2 media-width-full">
                <WorksLeft/>
            </div>
            <div className="right media-margin-4 w-1/2 media-width-full">
            <WorksRight/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
