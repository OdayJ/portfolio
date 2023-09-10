export default function About() {
  return (
    <div
      className="h-[710px] flex gap-[60px] items-center justify-center"
      id="About"
    >
      <div className="flex flex-col  w-[470px] h-[435px]  justify-center ">
        <p className="text-[#2F303A] font-cabinet font-extrabold text-4xl pb-2 ">
          Hi, The name's Oday
        </p>
        <p className="text-[#2F303A] opacity-50 text-2xl font-cabinet font-bold">
          A Front-End Developer & UI/UX Designer
        </p>
        <p className=" font-satoshi font-medium text-2xl text-[#6b6b6b] pt-8">
          My passion lies in translating concepts into responsive, user-friendly
          experiences. Bridging the gap between innovative design and precise
          code. With an eye for aesthetics and a dedication to the latest
          technologies, I ensure every digital journey is both intuitive and
          seamless.
        </p>
      </div>
      <img
        className="bg-yellow-500 w-[392px] h-[422px] shadow-lg rounded-[10px] rotate-2"
        src="/headshot.jpg"
      />
    </div>
  );
}
