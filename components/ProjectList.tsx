import React from "react";
import ProjectCard from "./Library/Cards/ProjectCard";
import { Project } from "../types/types";

interface props {
 projects: Project[];
}

const ProjectList = ({ projects }: props) => {
 return (
  <div className="flex flex-col justify-center items-center w-full">
   {projects &&
    projects.map((project, index) => (
     <ProjectCard
      key={index}
      project={project}
      className="w-full mb-5 mx-0 max-w-md"
     />
    ))}
  </div>
 );
};

export default ProjectList;
