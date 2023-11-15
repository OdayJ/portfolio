import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cards({ name, slug, shot, id }) {
  return (
    <div className="text-left bg-opacity-20 grid grid-rows-6   w-[316px] lg:w-[500px] lg:h-[400px]  select-none">
      <div className="row-span-5 row-start-1 h-full w-full  ">
        <Image
          src={shot}
          alt="img"
          sizes="100vw"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
        />
      </div>
      <div className="flex justify-between items-center pt-4 lg:pt-0">
        <div className="flex flex-col text-lg gap-x-1 row-start-6 font-bold font-satoshi self-end px-3">
          {name}
          <div className="flex text-sm gap-1 items-center text-[#2f303a] opacity-70 font-satoshi font-bold  ">
            {slug}
          </div>
        </div>
        <Link
          href={{
            pathname: `/projects/${id}`,
          }}
        >
          <button className="bg-[#fa5252] hover:bg-opacity-90  h-fit font-medium text-white rounded-3xl px-4 py-1">
            View
          </button>
        </Link>
      </div>
    </div>
  );
}
