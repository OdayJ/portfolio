"use client";
import React from "react";
import useSmoothScroll from "@/app/useSmoothScroll";
export default function ProjectNav() {
  const scrollToSection = useSmoothScroll();
  return (
    <nav className="flex items-start flex-col fixed top-24 px-8 font-medium font-satoshi">
      <button onClick={() => scrollToSection("Introduction")}>
        Introduction
      </button>
      <button onClick={() => scrollToSection("Problem")}>Problem</button>
      <button onClick={() => scrollToSection("Solution")}>Solution</button>
      <button onClick={() => scrollToSection("Reflection")}>Reflection</button>
    </nav>
  );
}
