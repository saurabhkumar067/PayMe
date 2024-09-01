import React from "react";

function ThreeImage({ classValue, ImageTextValue }) {
  return (
    <div className={`rounded-full ${classValue}`}>
      {ImageTextValue}
    </div>
  );
}

export default ThreeImage;
