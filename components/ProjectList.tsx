import React from "react";
import ProjectCard from "./Library/Cards/ProjectCard";
import { Project } from "../types/types";

interface props {
  projects: Project[];
}

const ProjectList = ({ projects }: props) => {
  return (
    <>
      {projects &&
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            className="w-full mb-5"
          />
        ))}
    </>
  );
};

export default ProjectList;
