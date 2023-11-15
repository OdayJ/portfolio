import Nav from "@/app/components/Nav";
import Highlight from "@/app/components/project/Highlight";
import Section from "@/app/components/project/section";
import React from "react";
import { getProjectById } from "@/sanity/sanity-utils";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import { MdOutlineSwipe } from "react-icons/md";
import ImageSlider from "@/app/components/project/ImageSlider";
import { FaRegHandRock } from "react-icons/fa";

export default async function page({ params }) {
  const project = await getProjectById(params.id);
  const imageUrls = project.gallery.map((item) => item.asset.url);

  return (
    <>
      <Nav />

      <div className="w-full grid place-items-center  pt-24 ">
        <div className="lg:max-w-7xl w-full mb-12 px-[20px] lg:px-0">
          <Image
            alt={project.title}
            className="rounded-xl object-cover "
            src={project.image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex flex-col gap-4 items-start w-full lg:max-w-2xl px-[20px] lg:px-0">
          <h1 className=" text-[#2F303A] text-3xl font-cabinet font-extrabold lg:text-7xl">
            {project.name}
          </h1>
          <h2 className="text-[#2F303A] opacity-50 lg:text-2xl">
            {project.slug}
          </h2>
        </div>
        <div className="flex gap-8 items-center justify-around border-y-2 mt-12 mb-5 py-4 lg:max-w-2xl w-full font-satoshi text-[#2F303A] px-[20px] lg:px-0 text-sm lg:text-base ">
          <div className="uppercase flex flex-col items-center justify-center  ">
            <p className="opacity-50">TIMELINE</p>
            <p className="font-bold">{project.timeline}</p>
          </div>
          <div className="flex flex-col items-center justify-center  ">
            <p className="opacity-50">LINK</p>
            <a className="font-bold" href={project.url} target="_blank">
              OdayJ/{project.name}
            </a>
          </div>
        </div>
        <div className="px-[20px] lg:px-0" id="Introduction">
          <Section title="Introduction">{project.description}</Section>
        </div>
        <div className="px-[20px] lg:px-0" id="Problem">
          <Section title="Problem">{project.problem}</Section>
        </div>
        <Highlight textcol="#fff" color={project.color}>
          {project?.statement}
        </Highlight>
        <div className="px-[20px] lg:px-0" id="Solution">
          <Section title="Solution">{project.results}</Section>
        </div>
        <div className="flex flex-col gap-2 lg:max-w-2xl w-full text-[#2F303A] font-satoshi mt-7 px-[20px] lg:px-0">
          <h2 className="font-cabinet font-bold lg:text-3xl">Image Gallery</h2>
          <div className="flex opacity-50 items-center gap-2">
            <h3 className="hidden lg:block">Drag the images to see more!</h3>
            <h3 className="lg:hidden">Swipe the images to see more!</h3>
            <div className="hidden lg:block">
              <FaRegHandRock />
            </div>
            <div className=" lg:hidden">
              <MdOutlineSwipe />
            </div>
          </div>
        </div>

        <ImageSlider images={imageUrls} color={project.color} />

        <div className="lg:mb-32 mb-8 px-[20px] lg:px-0" id="Reflection">
          <Section title="Reflection">{project.reflection}</Section>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}
