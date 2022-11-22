import React, { FunctionComponent } from "react";
import Title from "./Library/Title";
import ProjectCard from "./ProjectCard";

import { Project } from "./../types/types";
interface props {
  projects: Project[];
}

const ProjectSection: FunctionComponent<props> = ({ projects }) => {
  console.log(projects)
  return (
    <section className="px-5 bg-default-white">
      <Title title="Projects" />
      <div className="pb-20">
        {projects &&
          projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                mainImage={project.mainImage}
                technologies={project.technologies}
                githubRepository={project.githubRepository}
                url={project.url}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ProjectSection;
