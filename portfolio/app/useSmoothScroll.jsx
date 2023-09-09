import { animate } from "framer-motion";

const useSmoothScroll = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop;
      animate(window.scrollY, top, {
        type: "tween",
        ease: "easeInOut",
        duration: 1, // Duration set to 1 second for slower transition
        onUpdate(value) {
          window.scrollTo(0, value);
        },
      });
    }
  };

  return scrollToSection;
};

export default useSmoothScroll;
