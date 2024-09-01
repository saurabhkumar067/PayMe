import React from "react";

function Button({ ButtonText, color }) {
  return (
    <button
      className={`border-[1px] text-sm py-2 rounded-full px-5 tracking-normal bg-blue-500 text-white hover:bg-blue-300 duration-500 hover:text-[#111] ${color}`}
    >
      {ButtonText}
    </button>
  );
}

export default Button;
