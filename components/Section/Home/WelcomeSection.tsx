import React, { useState } from "react";
import Header from "../../Header";
import ArrowDown from "../../Icons/ArrowDown";
import { AnimatePresence, motion } from "framer-motion";

import WelcomAnimation from "./WelcomAnimation";
import Ambelishments from "../../Ambelishments";

const WelcomeSection = () => {
  const [isTyping, setIsTyping] = useState(true);
  return (
    <section className="flex flex-col justify-between items-center h-screen overflow-hidden relative">
      <Ambelishments />
      <Header />
      <div className="text-[13vw] text-default-white font-semibold md:text-[8vw] z-10">
        <AnimatePresence>
          {isTyping && <WelcomAnimation action={setIsTyping} />}
        </AnimatePresence>
        {!isTyping && (
          <div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              Developpeur
            </motion.div>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center text-primary-orange"
            >
              Web
            </motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              FullStack
            </motion.div>
          </div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 4 }}
        className="w-10 mx-auto pb-10"
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
};

export default WelcomeSection;
