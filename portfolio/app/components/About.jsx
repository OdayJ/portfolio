export default function About() {
  return (
    <div
      className="lg:h-[710px] h-[600px] flex flex-row lg:gap-[60px] items-center justify-center  text-center lg:justify-center  lg:text-left "
      id="About"
    >
      <div className="flex flex-col  lg:w-[470px] lg:h-[435px]  justify-center items-center lg:items-start ">
        <p className="text-[#2F303A] font-cabinet font-extrabold text-2xl lg:text-4xl pb-2 ">
          Hi, The name's Oday
        </p>
        <p className="text-[#2F303A] opacity-50 text-[15px] lg:text-2xl font-cabinet font-bold pb-5 lg:pb-0">
          A Front-End Developer & UI/UX Designer
        </p>
        <img
          className="bg-yellow-500  lg:hidden  w-48 h-48 shadow-lg rounded-[10px] rotate-2"
          src="/headshot.jpg"
          alt="profilesm"
        />
        <p className=" font-satoshi font-medium text-[16px] lg:text-2xl text-[#6b6b6b] pt-8 p-8 lg:p-0 lg:pt-8">
          My passion lies in translating concepts into responsive, user-friendly
          experiences. Bridging the gap between innovative design and precise
          code. With an eye for aesthetics and a dedication to the latest
          technologies, I ensure every digital journey is both intuitive and
          seamless.
        </p>
      </div>
      <img
        className="bg-yellow-500 hidden lg:block  w-[392px] h-[422px] shadow-lg rounded-[10px] rotate-2"
        src="/headshot.jpg"
        alt="profilelg"
      />
    </div>
  );
}
