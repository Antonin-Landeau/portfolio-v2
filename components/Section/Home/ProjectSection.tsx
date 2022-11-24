import React, { FunctionComponent } from "react";
import Title from "../../Library/Title";
import ProjectCard from "../../Library/Cards/ProjectCard";

import { Project } from "../../../types/types";
import SectionFooter from "./SectionFooter";
import Link from "next/link";
import Github from "../../Icons/Github";
interface props {
  projects: Project[];
}

const ProjectSection: FunctionComponent<props> = ({ projects }) => {
  return (
    <section className="p-5 bg-default-white">
      <Title title="Projects" variant="black" />
      <div className="py-10 mx-auto w-fit">
        <div className="lg:flex">
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
        <SectionFooter variant="">
          <div className="py-7 text-primary-orange">
            <Link href="https://github.com/Antonin-Landeau" legacyBehavior>
              <a target="_blank">
                <div className="flex items-center">
                  <Github className="h-6 mr-3" />
                  <span>Tout mes projets</span>
                </div>
              </a>
            </Link>
          </div>
        </SectionFooter>
      </div>
    </section>
  );
};

export default ProjectSection;
