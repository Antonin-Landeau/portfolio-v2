import React, { useEffect, useState } from "react";
import TechnologieList from "../../TechnologieList";
import { GetStaticProps } from "next";
import { sanityClient } from "../../../sanity";
import { Project, Technology } from "../../../types/types";
import ProjectCard from "../../Library/Cards/ProjectCard";
import ProjectList from "../../ProjectList";
import FiltresButton from "../../FiltresButton";
import Filter from "../../Filter";
import ActiveFilter from "../../ActiveFilter";

interface props {
 technologies: string[];
}

const ProjectsSection = ({ technologies }: props) => {
 const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
 const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

 const [projects, setProjects] = useState<Project[]>([]);
 const getProjectsByTechnologies = async (technologies: string[]) => {
  const getProjectsQuery = `*[_type == "project" && references(*[_type == "technology" && title in ${JSON.stringify(
   technologies
  )}]._id)]{
    ...,
    'technologies': technologies[]->{title, descriptionIcon}
  }`;
  const data = await sanityClient.fetch(getProjectsQuery);
  console.log(data);
  setProjects(data);
 };

 const getAllProjects = async () => {
  const query = `*[_type == 'project'] {
    "technologies": technologies[]->{title,descriptionIcon},
    mainImage,
    title,
    githubRepository,
    url,
    slug,
  }`;
  try {
   const data = await sanityClient.fetch(query);
   setProjects(data);
  } catch (error) {
   console.log(error);
  }
 };

 useEffect(() => {
  getAllProjects();
 }, []);

 useEffect(() => {
  if (selectedTechnologies.length) {
   console.log("fetchDate with filter");
   getProjectsByTechnologies(selectedTechnologies);
  } else {
   getAllProjects();
  }
 }, [selectedTechnologies]);

 return (
  <section className="px-5 bg-default-white w-full lg:flex lg:justify-center lg:pt-7">
   <TechnologieList
    className="hidden lg:block lg:mr-5"
    technologies={technologies}
    selectedTechnologies={selectedTechnologies}
    setSelectedTechnologies={setSelectedTechnologies}
   />
   <div className="flex items-center p-5 overflow-auto max-w-2xl mx-auto lg:hidden ">
    <FiltresButton onClick={(e) => setIsFilterOpen(e)} />
    <div className="flex items-center gap-3 overflow-x-scroll w-full h-fit">
     {selectedTechnologies &&
      selectedTechnologies.map((selectedTechnologie, index) => (
       <ActiveFilter
        key={index}
        title={selectedTechnologie}
        onClick={(title: string) => {
         setSelectedTechnologies(
          selectedTechnologies.filter((title: string) => {
           return selectedTechnologie !== title;
          })
         );
        }}
        className="lg:hidden"
       />
      ))}
    </div>
   </div>
   <div className="lg:max-w-4xl">
    <div className="hidden items-center p-5 overflow-auto max-w-2xl lg:flex lg:pl-0">
      <div className="text-lg mr-3">Filtres :</div>
     {selectedTechnologies &&
      selectedTechnologies.map((selectedTechnologie, index) => (
       <ActiveFilter
        key={index}
        title={selectedTechnologie}
        onClick={(title: string) => {
         setSelectedTechnologies(
          selectedTechnologies.filter((title: string) => {
           return selectedTechnologie !== title;
          })
         );
        }}
        className="hidden lg:flex h-fit"
       />
      ))}
      {selectedTechnologies.length == 0 && <div className="text-secondary-font">
        Aucuns
      </div> }
    </div>
    <div className="mx-auto w-fit md:grid md:grid-cols-2 md:w-[800px] md:gap-5 xl:grid-cols-3 xl:w-[1000px] ">
     {projects && <ProjectList projects={projects} />}
     {projects.length == 0 && <div className="w-full">Aucun resultat</div>}
    </div>
   </div>
   {isFilterOpen && (
    <Filter
     selectedTechnologies={selectedTechnologies}
     setSelectedTechnologies={setSelectedTechnologies}
     setIsFilterOpen={setIsFilterOpen}
     onSubmit={(e) => {
      setSelectedTechnologies(e);
      setIsFilterOpen(false);
     }}
     technologies={technologies}
    />
   )}
  </section>
 );
};

export default ProjectsSection;
