"use client";
import { animate, motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      id="Hero"
      className="grid place-items-center h-[900px] bg-[url('/background.png')] bg-center bg-contain w-auto bg-no-repeat"
    >
      <div className="text-8xl text-white font-cabinet font-bold text-center w-[825px] select-none">
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          Vision to reality
        </motion.div>
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          step by step.
        </motion.div>
      </div>
    </div>
  );
}
