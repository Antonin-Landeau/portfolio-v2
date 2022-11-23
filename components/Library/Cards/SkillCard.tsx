import React, { FunctionComponent } from "react";
import { urlFor } from "../../../sanity";
import { Skills } from "../../../types/types";

import { motion } from "framer-motion";

const SkillCard: FunctionComponent<Skills> = ({ skills, technologies }) => {
  return (
    <motion.div
      initial={{ scale: "0" }}
      viewport={{ once: true }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "backOut" }}
      className="my-10 max-w-md md:max-w-xs lg:max-w-md"
    >
      <div className="flex items-center gap-4 border-b border-primary-orange w-fit py-2 pr-4 overflow-hidden">
        {technologies &&
          technologies.map((techno, index) => {
            return (
              <img
                key={index}
                className="h-10 max-w-[55px]"
                src={urlFor(techno.descriptionIcon).url()}
                alt="ds"
              />
            );
          })}
      </div>
      <div className="border-l border-terthary-font ml-7 mt-4">
        {skills &&
          skills.map((techno, index) => {
            return (
              <p
                className="text-xl pl-4 py-1 text-primary-font text-"
                key={index}
              >
                {techno}
              </p>
            );
          })}
      </div>
    </motion.div>
  );
};

export default SkillCard;
