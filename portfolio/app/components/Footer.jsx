"use client";
import useSmoothScroll from "../useSmoothScroll";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  const scrollToSection = useSmoothScroll();
  return (
    <div className="h-[577px] pt-32 grid grid-rows-2 place-items-center text-center select-none mb-12">
      <div className="grid grid-rows-3 w-[467px] gap-6 pt-[30px]  h-[196px] place-items-center font-satoshi font-medium">
        <p className="text-4xl text-[#6b6b6b] mb-10">
          Lets work on something amazing together!
        </p>
        <p className=" text-[16px] text-[#6b6b6b]">Thanks for dropping by!</p>
        <div className="flex gap-6 text-[#2f303a] opacity-50 mt-14 ">
          <a href="https://www.linkedin.com/in/oday-jawaada/" target="_blank">
            <AiFillLinkedin size={32} />
          </a>

          <a href="https://github.com/OdayJ" target="_blank">
            <AiFillGithub size={32} />
          </a>
          <a href="https://twitter.com/OdayDev" target="_blank">
            <AiFillTwitterCircle size={32} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3  self-start h-[200px]  gap-[230px]  text-center   font-satoshi font-medium text-[#6b6b6b] text-[16px]">
        <div className="grid grid-rows-2 self-end gap-4">
          <p>Oday Jawaada</p>
          <p>+447388213612</p>
        </div>
        <div className="grid grid-rows-4 place-items-center self-end gap-4 ">
          <p
            className="cursor-pointer hover:opacity-80"
            onClick={() => scrollToSection("About")}
          >
            About
          </p>
          <p
            className="cursor-pointer hover:opacity-80 "
            onClick={() => scrollToSection("Tech")}
          >
            Tech
          </p>
          <p
            className="cursor-pointer hover:opacity-80"
            onClick={() => scrollToSection("Work")}
          >
            Work
          </p>
          <p
            className="cursor-pointer hover:opacity-80"
            onClick={() => scrollToSection("Contact")}
          >
            Contact
          </p>
        </div>
        <div className="self-end text-left">
          Birmingham, <br /> United Kingdom
        </div>
      </div>
    </div>
  );
}
