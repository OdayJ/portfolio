import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

import Tech from "./components/Tech";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Work from "./components/Work";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Tech />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
