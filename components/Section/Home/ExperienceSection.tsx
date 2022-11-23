import React, { FunctionComponent } from "react";
import { Experiences } from "../../../types/types";
import Arrow from "../../Icons/Arrow";
import ExperienceCard from "../../Library/Cards/ExperienceCard";
import Title from "../../Library/Title";

interface Props {
  experiences: Experiences[];
}
const ExperienceSection: FunctionComponent<Props> = ({ experiences }) => {
  return (
    <section className="bg-gb-color-black px-5">
      <Title className="text-4xl" title="Experiences" variant="white" small />
      <div className="mx-4">
        <div className="py-5 mt-6 w-fit mb-16 relative max-w-lg mx-auto">
          <div className="absolute -top-5 left-0 w-5 -translate-x-1/2">
            <Arrow />
          </div>
          <div className="absolute w-[2px] h-full -translate-x-1/2 bg-terthary-font"></div>
          <div>
            {experiences &&
              experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  company={experience.company}
                  createdAt={experience.createdAt}
                  date={experience.date}
                  description={experience.description}
                  post={experience.post}
                  technologies={experience.technologies}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
