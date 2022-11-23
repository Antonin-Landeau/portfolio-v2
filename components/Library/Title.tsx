import React, { FunctionComponent } from "react";

import { motion } from "framer-motion";

interface Props {
  title: string;
  variant?: string;
  className?: string;
  small?: true;
}

const Title: FunctionComponent<Props> = ({
  title,
  variant,
  className,
  small,
}) => {
  return (
    <>
      {variant === "orange" && (
        <motion.div
          className={`${className} py-11 flex items-center max-w-2xl mx-auto`}
        >
          <span>
            <motion.h1
              initial={{ scale: "0%" }}
              viewport={{ once: true }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className={`mr-5 whitespace-nowrap font-semibold text-default-black ${
                className ? className : "text-6xl"
              }`}
            >
              {title}
            </motion.h1>
          </span>
          <motion.div
            initial={{ width: 0 }}
            viewport={{ once: true }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-[2px] w-full bg-default-white"
          ></motion.div>
        </motion.div>
      )}
      {variant === "white" && (
        <div
          className={`${className} py-11 flex items-center max-w-2xl mx-auto`}
        >
          <span>
            <motion.h1
              initial={{ scale: "0%" }}
              viewport={{ once: true }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className={` mr-5 whitespace-nowrap font-semibold text-default-white ${
                className ? className : ""
              } ${small ? "text-4xl sm:text-6xl" : "text-6xl"}`}
            >
              {title}
            </motion.h1>
          </span>
          <motion.div
            initial={{ width: 0 }}
            viewport={{ once: true }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-[2px] w-full bg-primary-orange"
          ></motion.div>
        </div>
      )}
      {variant === "black" && (
        <motion.div
          className={`${className} py-11 flex items-center max-w-2xl mx-auto`}
        >
          <span>
            <motion.h1
              initial={{ scale: "0%" }}
              viewport={{ once: true }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className={`text-6xl mr-5 whitespace-nowrap font-semibold text-primary-font ${
                className ? className : ""
              }`}
            >
              {title}
            </motion.h1>
          </span>
          <motion.div
            initial={{ width: 0 }}
            viewport={{ once: true }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-[2px] w-full bg-primary-orange"
          ></motion.div>
        </motion.div>
      )}
      
    </>
  );
};

export default Title;
