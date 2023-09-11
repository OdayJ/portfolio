import React from "react";
import { GoArrowRight } from "react-icons/go";
export default function Cards({ name, img }) {
  return (
    <div className="bg-[#6b6b6b] text-left bg-opacity-20 grid grid-rows-6 p-8 rounded-lg w-[316px] lg:h-[400px] shadow-sm select-none">
      <div className="row-start-5 font-bold text-3xl font-satoshi self-end">
        {name}
      </div>
      <div className="row-start-6 flex gap-1 items-center text-[#2f303a] opacity-70 font-satoshi font-bold cursor-pointer ">
        Check it out
        <span>
          <GoArrowRight color="#2f303a" size={18} />
        </span>
      </div>
    </div>
  );
}
