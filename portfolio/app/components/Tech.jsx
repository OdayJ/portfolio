import Tippy from "@tippyjs/react"; // different import path!
import "tippy.js/dist/tippy.css"; // optional

export default function Tech() {
  return (
    <div
      className="h-[543px] flex items-center justify-center bg-[#b3b3b3] bg-opacity-20 "
      id="Tech"
    >
      <div className="flex gap-[65px] w-[980px] h-[394px] flex-col ">
        <div className="flex flex-col">
          <p className="text-[#2f303a] font-cabinet font-extrabold text-4xl pb-2">
            Tools & Technologies
          </p>
          <p className="text-[#2f303a] opacity-50 font-cabinet font-bold text-2xl">
            Discover the technologies and tools that enable me to build amazing
            things, fast.
          </p>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 place-items-center gap-12">
          <Tippy content="React">
            <img src="./react.svg" className="w-[76px] pt-5" />
          </Tippy>
          <Tippy content="TailwindCSS">
            <img src="./tailwind.svg" className="w-[76px] pt-5" />
          </Tippy>
          <Tippy content="HTML5">
            <img src="./html.svg" className="w-[76px] pt-5" />
          </Tippy>
          <Tippy content="CSS3">
            <img src="./css.svg" className="w-[76px] pt-5" />
          </Tippy>
          <Tippy content="Git">
            <img src="./git.svg" className="w-[76px] pt-5" />
          </Tippy>
          <Tippy content="NextJS">
            <img src="./next.svg" className="w-[76px] pt-5" />
          </Tippy>
          <Tippy content="ThreeJS">
            <img src="./three.svg" className="w-[76px] pt-5" />
          </Tippy>
          <Tippy content="NodeJS">
            <img src="./node.svg" className="w-[76px] pt-5" />
          </Tippy>
          <Tippy content="MongoDB">
            <img src="./mongo.svg" className="w-[76px] pt-5" />
          </Tippy>
          <Tippy content="Java">
            <img src="./java.svg" className="w-[76px] pt-5" />
          </Tippy>
        </div>
      </div>
    </div>
  );
}
