import React from "react";
import { motion } from "framer-motion";

const ArrowDown = () => {
  return (
    <motion.svg
      animate={{
        y: [0, 20, 0, 20, 0],
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 2,
      }}
      viewBox="0 0 31 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-0.5"
        x2="20.0592"
        y2="-0.5"
        transform="matrix(0.752364 0.658748 -0.752364 0.658748 0 21.9697)"
        stroke="#D84A01"
      />
      <line
        y1="-0.5"
        x2="20.0592"
        y2="-0.5"
        transform="matrix(-0.752364 0.658748 -0.752364 -0.658748 30.1836 21.9697)"
        stroke="#D84A01"
      />
      <line
        y1="-0.5"
        x2="20.0592"
        y2="-0.5"
        transform="matrix(0.752364 0.658748 -0.752364 0.658748 0 13.2139)"
        stroke="#D84A01"
      />
      <line
        y1="-0.5"
        x2="20.0592"
        y2="-0.5"
        transform="matrix(-0.752364 0.658748 -0.752364 -0.658748 30.1836 13.2139)"
        stroke="#D84A01"
      />
    </motion.svg>
  );
};

export default ArrowDown;
