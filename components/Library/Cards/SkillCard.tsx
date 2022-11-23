import React, { FunctionComponent } from "react";
import { urlFor } from "../../../sanity";
import { Skills } from "../../../types/types";

const SkillCard: FunctionComponent<Skills> = ({ skills, technologies }) => {
  return (
    <div className="my-10 max-w-md md:max-w-xs lg:max-w-md">
      <div className="flex items-center gap-4 border-b border-primary-orange w-fit py-2 pr-4">
        {technologies &&
          technologies.map((techno, index) => {
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
      <div className="border-l border-terthary-font ml-7 mt-4">
        {skills &&
          skills.map((techno, index) => {
            return <p className="text-xl pl-4 py-1 text-primary-font text-" key={index}>{techno}</p>;
          })}
      </div>
    </div>
  );
};

export default SkillCard;
