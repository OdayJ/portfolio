"use client";
import Tippy from "@tippyjs/react"; // different import path!
import "tippy.js/dist/tippy.css"; // optional
import Image from "next/image";

export default function Tech() {
  return (
    <div
      className="lg:h-[543px] h-[400px] flex items-center justify-center bg-[#b3b3b3] bg-opacity-20 "
      id="Tech"
    >
      <div className="flex lg:gap-[65px] lg:w-[980px] lg:h-[394px] flex-col ">
        <div className="flex flex-col">
          <p className="text-[#2f303a] font-cabinet font-extrabold text-2xl lg:text-4xl pb-2 text-center lg:text-left">
            Tools & Technologies
          </p>
          <p className="text-[#2f303a] px-10 lg:px-0 opacity-50 font-cabinet font-bold lg:text-2xl text-center lg:text-left">
            Discover the technologies and tools that enable me to build amazing
            things, fast.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-4 grid-rows-2 place-items-center gap-2 lg:gap-12">
          <Tippy content="React">
            <Image
              src="./react.svg"
              className="lg:w-[76px] w-[46px] pt-5"
              alt="react-icon"
              width={76}
              height={76}
            />
          </Tippy>
          <Tippy content="TailwindCSS">
            <Image
              src="./tailwind.svg"
              className="lg:w-[76px] w-[46px] pt-5"
              alt="tailwind-icon"
              width={76}
              height={76}
            />
          </Tippy>
          <Tippy content="HTML5">
            <Image
              src="./html.svg"
              className="lg:w-[76px] w-[46px] pt-5 hidden lg:block"
              alt="html-icon"
              width={76}
              height={76}
            />
          </Tippy>
          <Tippy content="CSS3">
            <Image
              src="./css.svg"
              className="lg:w-[76px] w-[46px] pt-5 hidden lg:block"
              alt="css-icon"
              width={76}
              height={76}
            />
          </Tippy>
          <Tippy content="Git">
            <Image
              src="./git.svg"
              className="lg:w-[76px] w-[46px] pt-5"
              alt="git-icon"
              width={76}
              height={76}
            />
          </Tippy>
          <Tippy content="NextJS">
            <Image
              src="./next.svg"
              className="lg:w-[76px] w-[46px] pt-5"
              alt="next-icon"
              width={76}
              height={76}
            />
          </Tippy>
          <Tippy content="ThreeJS">
            <Image
              src="./three.svg"
              className="lg:w-[76px] w-[46px] pt-5"
              alt="three-icon"
              width={76}
              height={76}
            />
          </Tippy>
          <Tippy content="NodeJS">
            <Image
              src="./node.svg"
              className="lg:w-[76px] w-[46px] pt-5"
              alt="node-icon"
              width={76}
              height={76}
            />
          </Tippy>
          <Tippy content="MongoDB">
            <Image
              src="./mongo.svg"
              className="lg:w-[76px] w-[46px] pt-5"
              alt="mongodb-icon"
              width={76}
              height={76}
            />
          </Tippy>
          <Tippy content="Java">
            <Image
              src="./java.svg"
              className="lg:w-[76px] w-[46px] pt-5"
              alt="java-icon"
              width={76}
              height={76}
            />
          </Tippy>
        </div>
      </div>
    </div>
  );
}
