import React from "react";
import ProjectCard from "./Library/Cards/ProjectCard";
import { Project } from "../types/types";
import ProjectCard2 from "./Library/Cards/ProjectCard2";

interface props {
  projects: Project[];
}

const ProjectList = ({ projects }: props) => {
  return (
    <>
      {projects &&
        projects.map((project, index) => (
          <ProjectCard2
            key={index}
            project={project}
            className="max-w-sm w-full"
          />
        ))}
    </>
  );
};

export default ProjectList;
