import { title } from "process";
import React, { FunctionComponent } from "react";
import { urlFor } from "../sanity";
import { Project } from "./../types/types";

const ProjectCard: FunctionComponent<Project> = ({
  technologies,
  mainImage,
  title,
  githubRepository,
  url,
  slug,
}) => {
  return (
    <div>
      <div className="hover:cursor-pointer group overflow-hidden shadow-black/20 shadow-xl border-[1px] border-[#eaeaea]">
        <img
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
          src={urlFor(mainImage).url()}
          alt={`photo-post-${slug}`}
        />
        <div className="bg-default-white p-3">
          <h2 className="text-primary-font font-bold text-2xl">
            {title}
          </h2>
          <div className="h-[1px] w-16 bg-primary-orange"></div>
          <div className="flex mt-3 gap-2">
            {technologies &&
              technologies.map((techno, index) => {
                console.log(techno);
                return (
                  <img
                    className="h-6"
                    src={urlFor(techno.descriptionIcon).url()}
                    alt=""
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
