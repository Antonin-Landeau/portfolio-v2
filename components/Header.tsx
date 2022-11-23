import React from "react";

import { delay, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CV from "./Icons/CV";


const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 4 }}
      className="flex p-5 w-full max-w-[1300px] lg:p-7"
    >
      <h1 className="font-medium text-base text-default-white lg:text-xl">
        LANDEAU <span className="text-primary-orange">Antonin</span>
      </h1>
      <div className="ml-auto">
        <Link href="CV.pdf" download={true} legacyBehavior>
          <a
            className="block bg-primary-orange p-1 px-2 text-default-white font-medium rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <CV className="w-3 fill-default-white mr-2" />
              <div>CV</div>
            </div>
          </a>
        </Link>
        {/* <div className="font-medium text-base text-default-white ">Menu</div>
        <div className="h-[2px] w-2/3 bg-primary-orange mx-auto"></div> */}
      </div>
    </motion.header>
  );
};

export default Header;
