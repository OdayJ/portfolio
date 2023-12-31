"use client";
import Lottie from "lottie-react";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import animationData from "../../public/animation.json";
export default function Contact() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [state, handleSubmit] = useForm("mzblgndd");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const style = {
    height: 250,
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormSubmitted(true);
    }
  }, [state.succeeded]);

  if (formSubmitted) {
    return (
      <div className="lg:h-[300px] hidden lg:block">
        <Lottie
          style={style}
          animationData={animationData}
          loop={false}
          autoplay={true}
          speed={0.7}
          onComplete={() => {
            setFormSubmitted(false);
            setShowForm(false);
          }}
        />
      </div>
    );
  }

  if (!showForm) return null;

  const handleExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const variants = {
    collapsed: { height: "33%" },
    expanded: { height: "100%" },
  };
  return (
    <div
      id="Contact"
      className="lg:h-[537px]  flex items-center justify-center "
    >
      <div className="h-[537px] lg:w-[1063px] w-full grid grid-rows-3 p-[40px]  bg-white lg:shadow-lg rounded-md">
        <div className="font-cabinet text-[#2f303a] flex flex-col gap-6 ">
          <p className=" text-2xl lg:text-4xl font-extrabold">
            Lets get in touch!
          </p>
          <p className="opacity-50 font-bold text-sm lg:text-xl">
            Fill out the fields below and submit your request, I will reach out
            to you as soon as I can.
          </p>
        </div>
        <form
          autoComplete="new-form"
          className="grid lg:grid-cols-2 lg:grid-rows-3 grid-rows-4 row-span-2 font-satoshi lg:gap-12 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            className=" border-b lg:w-1/2 w-full outline-none  "
            placeholder="Your name"
            type="name"
            name="name"
            id="name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            className="row-start-2 lg:w-1/2 w-full border-b outline-none "
            placeholder="Your email"
            type="email"
            name="email"
            id="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <motion.textarea
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={variants}
            transition={{ duration: 0.7 }}
            placeholder="Your message"
            className="row-span-2 outline-none border-b max-h-full lg:pt-4 hidden lg:block" // w-full ensures it takes the full width, transition classes for smoothness
            onClick={handleExpand}
            name="message"
            type="message"
            id="message"
          />
          <textarea
            placeholder="Your message"
            className="row-span-2 outline-none border-b max-h-full lg:pt-4 lg:hidden" // w-full ensures it takes the full width, transition classes for smoothness
            onClick={handleExpand}
            name="message"
            type="message"
            id="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="justify-self-start self-center font-cabinet  text-white font-bold bg-[#333] w-[125px] h-[48px] rounded-md"
          >
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
}
