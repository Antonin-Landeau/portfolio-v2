import React, { useState } from "react";
import Header from "../../Header";
import ArrowDown from "../../Icons/ArrowDown";
import { motion } from "framer-motion";

import Typed from "react-typed";

const WelcomeSection = () => {
  const [isTyping, setIsTyping] = useState(true);
  return (
    <section className="flex flex-col justify-between items-center h-screen overflow-hidden">
      <Header />
      <div className="text-[13vw] text-default-white font-semibold md:text-[8vw]">
        {isTyping && (
          <Typed
            className="text-primary-orange text-2xl sm:text-[4vw]"
            strings={["console.log(Antonin);"]}
            startDelay={500}
            typeSpeed={50}
            backSpeed={150}
            onComplete={() => {
              setTimeout(() => {
                setIsTyping((state) => !state);
              }, 1500);
            }}
          />
        )}
        {!isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              Developpeur
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center text-primary-orange"
            >
              Web
            </motion.div>
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              FullStack
            </motion.div>
          </motion.div>
        )}
      </div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 4}}
        className="w-10 mx-auto pb-10"
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
};

export default WelcomeSection;
