import React from "react";

import { delay, motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 5}}
      className="flex p-5 w-full max-w-[1300px] lg:p-7"
    >
      <h1 className="font-medium text-base text-default-white lg:text-xl">
        LANDEAU <span className="text-primary-orange">Antonin</span>
      </h1>
      <div className="ml-auto ">
        <div className="font-medium text-base text-default-white ">Menu</div>
        <div className="h-[2px] w-2/3 bg-primary-orange mx-auto"></div>
      </div>
    </motion.header>
  );
};

export default Header;
