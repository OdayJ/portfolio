"use client";
import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { animate } from "framer-motion";
import Tech from "./components/Tech";
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Tech />
    </main>
  );
}
