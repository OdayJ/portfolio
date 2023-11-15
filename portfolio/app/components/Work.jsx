import { getProjects } from "@/sanity/sanity-utils";

import Cards from "./Cards";

export default async function Work() {
  const projects = await getProjects();

  return (
    <div
      id="Work"
      className="lg:h-[1168px] pt-24 pb-12 lg:p-0 flex items-center justify-center"
    >
      <div className="flex items-center flex-col lg:gap-12 gap-6 ">
        <p className="text-[#2f303a] font-extrabold font-cabinet text-4xl">
          My work
        </p>

        <div className="grid lg:grid-rows-2 lg:grid-cols-2 text-center h-full w-full gap-y-14 lg:gap-x-14 lg:gap-y-16 ">
          {projects.map((project) => (
            <Cards
              key={project._id}
              name={project.name}
              slug={project.slug}
              shot={project.image}
              id={project._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
