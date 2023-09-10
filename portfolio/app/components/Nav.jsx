"use client";
import useSmoothScroll from "../useSmoothScroll";
export default function Nav() {
  const scrollToSection = useSmoothScroll();
  return (
    <div className="w-full grid place-items-center z-50  fixed">
      <div className=" max-w-7xl p-6 w-full">
        <div className="flex justify-between items-center ">
          <div
            onClick={() => scrollToSection("Hero")}
            className=" font-cabinet font-bold text-2xl cursor-pointer select-none"
          >
            OJ
          </div>
          <ul className="xl:flex items-center w-[380px] h-[45px] justify-between select-none bg-[#b3b3b3] bg-opacity-10 rounded-[12px] text-sm font-satoshi  backdrop-blur-[18px] hidden px-2 pt-[6px] pb-[5px] text-[#2F303A]">
            <li
              onClick={() => scrollToSection("About")}
              className="px-3 py-2 ml-2 focus:font-bold   cursor-pointer hover:bg-white hover:px-3 hover:py-1 hover:rounded-lg"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("Tech")}
              className="px-3 py-2  cursor-pointer hover:bg-white hover:px-3 hover:py-1 hover:rounded-lg"
            >
              Tech
            </li>
            <li className="px-3 py-2  cursor-pointer hover:bg-white hover:px-3 hover:py-1 hover:rounded-lg">
              Work
            </li>
            <li
              onClick={() => scrollToSection("Contact")}
              className="px-3 py-2 mr-2  cursor-pointer hover:bg-white hover:px-3 hover:py-1 hover:rounded-lg"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
