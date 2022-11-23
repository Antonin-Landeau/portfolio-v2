import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import { urlFor } from "../../../sanity";
import { Experiences } from "../../../types/types";

const ExperienceCard: FunctionComponent<Experiences> = ({
  company,
  createdAt,
  date,
  description,
  post,
  technologies,
}) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      viewport={{ once: true }}
      whileInView={{ y: 0 }}
      transition={{ duration: .5, ease: "easeIn" }}
      className="pl-5 relative my-8"
    >
      <div className="absolute h-3 w-3 rounded-full bg-primary-orange top-2 left-0 -translate-x-1/2"></div>
      <h2 className="text-default-white text-xl">
        {date} | <span className="text-terthary-font">{company}</span> :{" "}
        <span className="text-primary-orange font-medium">{post}</span>
      </h2>
      <div className="pl-3 py-3">
        <p className="text-terthary-font">{description}</p>
        {technologies && (
          <div className="flex gap-5 py-3">
            {technologies.map((techno, index) => {
              return (
                <img
                  key={index}
                  className="h-10 max-w-[55px]"
                  src={urlFor(techno.descriptionIcon).url()}
                  alt=""
                />
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
