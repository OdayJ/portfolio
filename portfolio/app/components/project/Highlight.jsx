import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function Highlight({ color, children, textcol }) {
  const style = {
    backgroundColor: color,
    color: textcol,
  };

  return (
    <div className="flex flex-col gap-10 my-10 px-[20px] lg:px-0">
      <h2 className="font-cabinet font-bold text-xl">Defining the problem</h2>
      <div
        className="flex lg:gap-1 max-w-2xl h-fit justify-center px-8 py-8 lg:px-16 rounded-xl lg:py-8  "
        style={style}
      >
        <div className="w-1/6 h-fit hidden lg:block ">
          <BiSolidQuoteAltLeft fill={textcol} size={38} />
        </div>
        <div className="w-1/6 h-fit  lg:hidden ">
          <BiSolidQuoteAltLeft fill={textcol} size={16} />
        </div>

        <div
          style={{ display: "inline-block" }}
          className="lg:text-4xl  font-cabinet font-bold h-fit"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
