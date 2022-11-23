import Link from "next/link";
import { title } from "process";
import React, { FunctionComponent } from "react";
import { urlFor } from "../../../sanity";
import { Project } from "../../../types/types";
import Github from "../../Icons/Github";

import { animate, motion } from "framer-motion";

const ProjectCard: FunctionComponent<Project> = ({
  technologies,
  mainImage,
  title,
  githubRepository,
  url,
  slug,
}) => {
  return (
    <div
      className="hover:cursor-pointer group overflow-hidden rounded-xl shadow-black/20 shadow-xl border-[1px] border-border-color-1 max-w-lg mb-16 lg:w-1/3 mx-3"
    >
      <img
        className="w-full h-32 object-cover object-top  group-hover:scale-105 transition-transform duration-200 ease-in-out"
        src={urlFor(mainImage).url()}
        alt={`photo-post-${slug}`}
      />
      <div className="bg-default-white p-3 drop-shadow-[0_-5px_10px_rgba(0,0,0,0.1)] border-t border-border-color-1">
        <div className="w-full flex items-center mb-3">
          <h2 className="text-gb-color-black font-medium text-3xl">{title}</h2>
          <div className="ml-auto w-fit h-fit flex">
            {url && (
              <Link href={url} className="mr-2 text-primary-orange font-medium">
                <div className="underline">visiter</div>
              </Link>
            )}
            {githubRepository && (
              <Link href={githubRepository} legacyBehavior>
                <a target="_blank">
                  <Github className="h-6" />
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="h-[1px] w-full bg-primary-orange"></div>
        <div className="flex mt-4 gap-5 flex-wrap">
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
  );
};

export default ProjectCard;
