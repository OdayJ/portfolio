import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [state, handleSubmit] = useForm("mzblgndd");

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
    <div id="Contact" className="h-[537px] flex items-center justify-center ">
      <div className="h-[537px] w-[1063px] grid grid-rows-3 p-[60px]  bg-white shadow-lg rounded-md">
        <div className="font-cabinet text-[#2f303a] flex flex-col gap-6 ">
          <p className=" text-4xl font-extrabold">Lets get in touch!</p>
          <p className="opacity-50 font-bold text-xl">
            Fill out the fields below and submit your request, I will reach out
            to you as soon as I can.
          </p>
        </div>
        <form
          autoComplete="new-form"
          className="grid grid-cols-2 grid-rows-3 row-span-2 font-satoshi gap-12"
          onSubmit={handleSubmit}
        >
          <input
            style={{ display: "none" }}
            type="text"
            name="prevent_autofill"
            autoComplete="off"
            disabled
          />
          <input
            className=" border-b w-1/2 outline-none  "
            placeholder="Your name"
            type="name"
            name="name"
            id="name"
            autoComplete="new-password"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            style={{ display: "none" }}
            type="text"
            name="prevent_autofill"
            autoComplete="off"
            disabled
          />
          <input
            className="row-start-2 w-1/2 border-b outline-none "
            placeholder="Your email"
            type="email"
            name="email"
            id="email"
            autoComplete="new-email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <motion.textarea
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={variants}
            transition={{ duration: 0.7 }}
            placeholder="Your message"
            className="row-span-2 outline-none border-b max-h-full pt-4" // w-full ensures it takes the full width, transition classes for smoothness
            onClick={handleExpand}
            name="message"
            type="message"
            id="message"
          ></motion.textarea>
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
