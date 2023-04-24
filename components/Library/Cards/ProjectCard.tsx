import Link from "next/link";
import { title } from "process";
import React, { FunctionComponent } from "react";
import { urlFor } from "../../../sanity";
import { Project } from "../../../types/types";
import Github from "../../Icons/Github";

import { motion } from "framer-motion";

interface props {
 project: Project;
 className?: string;
}

const ProjectCard: FunctionComponent<props> = ({ project, className }) => {
 return (
  <div
   className={`group overflow-hidden rounded-xl shadow-black/20 shadow-sm border-[1px] border-border-color-1 ${className}`}
  >
   <img
    className="w-full h-32 object-cover object-top  group-hover:scale-105 transition-transform duration-200 ease-in-out"
    src={urlFor(project.mainImage).url()}
    alt={`photo-post-${project.slug}`}
   />
   <div className="bg-default-white p-3 drop-shadow-[0_-5px_10px_rgba(0,0,0,0.1)] border-t border-border-color-1 h-full">
    <div className="w-full flex items-center mb-3">
     <h2 className="text-gb-color-black font-medium text-3xl whitespace-pre-wrap">
      {project. title}
     </h2>
     <div className="ml-auto w-fit h-fit flex">
      {project.url && (
       <Link
        href={project.url}
        className="mr-2 text-primary-orange font-medium"
       >
        <div className="underline">visiter</div>
       </Link>
      )}
      {project.githubRepository && (
       <Link href={project.githubRepository} legacyBehavior>
        <a target="_blank">
         <Github className="h-6" />
        </a>
       </Link>
      )}
     </div>
    </div>
    <div className="h-[1px] w-full bg-primary-orange"></div>
    <div className="flex mt-4 gap-5 flex-wrap">
     {project.technologies &&
      project.technologies.map((techno, index) => {
       return (
        <img
         key={index}
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
