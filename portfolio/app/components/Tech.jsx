"use client";
import Tippy from "@tippyjs/react"; // different import path!
import "tippy.js/dist/tippy.css"; // optional

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
          <p className="text-[#2f303a] opacity-50 font-cabinet font-bold lg:text-2xl text-center lg:text-left">
            Discover the technologies and tools that enable me to build amazing
            things, fast.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-4 grid-rows-2 place-items-center gap-2 lg:gap-12">
          <Tippy content="React">
            <img src="./react.svg" className="lg:w-[76px] w-[46px] pt-5" />
          </Tippy>
          <Tippy content="TailwindCSS">
            <img src="./tailwind.svg" className="lg:w-[76px] w-[46px] pt-5" />
          </Tippy>
          <Tippy content="HTML5">
            <img
              src="./html.svg"
              className="lg:w-[76px] w-[46px] pt-5 hidden lg:block"
            />
          </Tippy>
          <Tippy content="CSS3">
            <img
              src="./css.svg"
              className="lg:w-[76px] w-[46px] pt-5 hidden lg:block"
            />
          </Tippy>
          <Tippy content="Git">
            <img src="./git.svg" className="lg:w-[76px] w-[46px] pt-5" />
          </Tippy>
          <Tippy content="NextJS">
            <img src="./next.svg" className="lg:w-[76px] w-[46px] pt-5" />
          </Tippy>
          <Tippy content="ThreeJS">
            <img src="./three.svg" className="lg:w-[76px] w-[46px] pt-5" />
          </Tippy>
          <Tippy content="NodeJS">
            <img src="./node.svg" className="lg:w-[76px] w-[46px] pt-5" />
          </Tippy>
          <Tippy content="MongoDB">
            <img src="./mongo.svg" className="lg:w-[76px] w-[46px] pt-5" />
          </Tippy>
          <Tippy content="Java">
            <img src="./java.svg" className="lg:w-[76px] w-[46px] pt-5" />
          </Tippy>
        </div>
      </div>
    </div>
  );
}
