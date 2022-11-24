import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import Typed from "react-typed";
import { motion, AnimatePresence } from "framer-motion";

interface props {
  action: Dispatch<SetStateAction<boolean>>;
}

const WelcomAnimation: FunctionComponent<props> = ({ action }) => {
  return (
    <motion.div
      key="div-wrapper"
      exit={{ opacity: 0 }}
      transition={{ delay: .7, duration: 0.5 }}
      className="fixed top-0 bottom-0 right-0 left-0 bg-gb-color-black z-10 flex justify-center items-center"
    >
      <div className="fixed top-0 bottom-0 right-0 left-0 z-20">
        <motion.div
          key="div-animated-1"
          initial={{ height: "100%" }}
          animate={{ height: 0 }}
          exit={{ height: "100%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-full w-full bg-primary-orange"
        ></motion.div>
        <motion.div
          key="div-animated-2"
          initial={{ height: "100%" }}
          animate={{ height: 0 }}
          exit={{ height: "100%" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="h-full w-full bg-default-white"
        ></motion.div>
      </div>
      <div className="m-auto w-fit h-fit px-5 max-w-7xl">
        <h1 className="block font-semibold w-fit  text-[15vw] leading-[1.2em] lg:text-[12vh]">
          <div className="overflow-hidden w-fit">
            <motion.div
              className="w-fit"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              Bienvenue{" "}
            </motion.div>
          </div>
          <div className="overflow-hidden w-fit">
            <motion.div
              className="w-fit"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
            >
              sur mon{" "}
            </motion.div>
          </div>
          <div className="overflow-hidden w-fit">
            <motion.div
              className="w-fit"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              portfolio
            </motion.div>
          </div>
        </h1>
        <Typed
          className="text-default-white text-[7vw] font-light lg:text-[5vh]"
          style={{
            fontFamily: "JetBrains Mono",
          }}
          strings={[
            "<span class='text-[#63BCF0]'>console</span>.<span class='text-[#EEF1AB]'>log</span><span class='text-[#A259FF]'>(</span><span class='text-[#63BCF0]'>antonin</span><span class='text-[#A259FF]'>)</span>;",
          ]}
          startDelay={1300}
          typeSpeed={50}
          backSpeed={150}
          onComplete={() => {
            setTimeout(() => {
              action(false);
            }, 1300);
          }}
        />
      </div>
    </motion.div>
  );
};

export default WelcomAnimation;
