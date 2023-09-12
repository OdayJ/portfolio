import { getProject } from "@/sanity/sanity-utils";

import Cards from "./Cards";

export default async function Work() {
  const projects = await getProject();

  return (
    <div
      id="Work"
      className="lg:h-[1168px] pt-24 pb-12 lg:p-0 flex items-center justify-center"
    >
      <div className="flex items-center flex-col lg:gap-12 gap-6 ">
        <p className="text-[#2f303a] font-extrabold font-cabinet text-4xl">
          My work
        </p>

        <div className="grid lg:grid-rows-2 lg:grid-cols-3 text-center h-full w-full gap-y-8 lg:gap-x-14 lg:gap-y-9 ">
          {projects.map((project) => (
            <Cards key={project._id} name={project.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
