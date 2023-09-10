"use client";
import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

import Tech from "./components/Tech";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Tech />
      <Contact />
      <Footer />
    </main>
  );
}
