"use client";
import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function ImageSlider({ color, images }) {
  const [width, setWidth] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const x = useMotionValue(0); // motion value for x-translation
  const carousel = React.useRef();
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  React.useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  React.useEffect(() => {
    const unsubscribeX = x.on("change", (latestX) => {
      // Calculate the percentage and clamp it between 0 and 100
      const percentage = clamp((-latestX / width) * 100, 0, 100);
      setCurrentX(percentage);
    });

    return () => {
      unsubscribeX();
    };
  }, [x, width]);

  return (
    <div className=" my-7 lg:max-w-3xl max-w-sm">
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden "
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          style={{ x }} // bind the motion value to the x style property
        >
          {images.map((image) => {
            return (
              <motion.div
                key={image}
                className="lg:min-w-[672px] min-w-[390px] lg:px-[40px] px-[20px] py-[5px]  "
              >
                <img
                  className="h-full w-full object-scale-down rounded-3xl pointer-events-none shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] "
                  src={image}
                  alt=""
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <div
        className="ml-[20px] lg:ml-[40px]"
        style={{
          width: "90%",
          height: "2px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginTop: "10px",
        }}
      >
        {/* Filled Portion of the Progress Bar */}
        <div
          style={{
            width: `${currentX.toFixed(2)}%`,
            backgroundColor: color,
            height: "2px",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
}
