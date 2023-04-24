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

const ProjectCard2: FunctionComponent<props> = ({ project, className }) => {
  return (
    <div className="p-5 border-secondary-font border rounded-lg w-48">
      <img src={urlFor(project.mainImage).url()} alt="" className="w-full h-45 object-cover" />
      <h3>{project.title}</h3>
    </div>
  );
};

export default ProjectCard2;
