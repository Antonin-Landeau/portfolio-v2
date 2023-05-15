import React from "react";
import Title from "../../Library/Title";
import ProjectsAmbelishments from "../../ProjectsAmbelishments";
import Header from "../../Header";

const ProjectsHeader = () => {
 return (
  <section className="relative overflow-hidden">
   <ProjectsAmbelishments />
   <Header />
   <div className="z-10 p-5">
    <Title title="Mes Projets" className="relative z-10" variant="white" small />
    <p className="m-auto text-xl text-center pb-10 text-default-white max-w-2xl md:text-left relative z-10">
     Retrouver tout les projet que j&apos;ai pu réaliser au cours de mon cursus
     scolaire et de mon temps libre
    </p>
   </div>
  </section>
 );
};

export default ProjectsHeader;
