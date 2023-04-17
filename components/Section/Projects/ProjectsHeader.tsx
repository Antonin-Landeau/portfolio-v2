import React from "react";
import Title from "../../Library/Title";

const ProjectsHeader = () => {
 return (
  <section className="p-5">
   <Title title="Mes Projets" variant="white" />
   <p className="m-auto text-xl text-center pb-10 text-default-white max-w-2xl md:text-left">
    Retrouver tout les projet que j'ai pu réaliser au cours de mon cursus
    scolaire et de mon temps libre
   </p>
  </section>
 );
};

export default ProjectsHeader;
