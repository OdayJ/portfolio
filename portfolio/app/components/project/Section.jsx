import { PortableText } from "@portabletext/react";
import React from "react";

export default function Section({ title, children }) {
  return (
    <div className="flex flex-col gap-2 lg:max-w-2xl w-full text-[#2F303A] font-satoshi my-10">
      <h2 className="font-cabinet font-bold lg:text-3xl">{title}</h2>
      <p className="lg:text-lg leading-8">
        <PortableText value={children} onMissingComponent={false} />
      </p>
    </div>
  );
}
