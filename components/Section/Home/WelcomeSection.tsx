import React, { useState } from "react";
import Header from "../../Header";
import ArrowDown from "../../Icons/ArrowDown";
import {motion, AnimatePresence,} from 'framer-motion'

import Typed from "react-typed";

const WelcomeSection = () => {
  const [isTyping, setIsTyping] = useState(true);
  return (
    <section className="flex flex-col justify-between items-center h-screen">
      <Header />
      <div className="text-[13vw] text-default-white font-semibold md:text-[8vw]">
        {isTyping && (
          <Typed
            className="text-primary-orange text-2xl sm:text-[4vw]"
            strings={["console.log(Antonin);"]}
            startDelay={500}
            typeSpeed={60}
            backSpeed={150}
            onComplete={() => {
              setTimeout(() => {
                setIsTyping((state) => !state);
              }, 1500);
            }}
          />
        )}
        {!isTyping && (
          <div>
            <div className="text-center">Developpeur</div>
            <div className="text-center text-primary-orange">Web</div>
            <div className="text-center">FullStack</div>
          </div>
        )}
      </div>
      <div className="w-fit mx-auto pb-10">
        <ArrowDown />
      </div>
    </section>
  );
};

export default WelcomeSection;
