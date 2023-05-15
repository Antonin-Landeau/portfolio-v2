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
   <Title title="Projets" variant="black" />
   <div className="py-10 mx-auto w-fit">
    <div className="lg:flex gap-5">
     {projects &&
      projects.map((project, index) => {
       return (
        <ProjectCard key={index} project={project} className="w-full mb-5" />
       );
      })}
    </div>
    <SectionFooter variant="">
     <div className="py-7 text-primary-orange">
      <Link href="/projects" legacyBehavior>
       Tout mes projets
      </Link>
     </div>
    </SectionFooter>
   </div>
  </section>
 );
};

export default ProjectSection;
