import React, { useEffect, useState } from "react";
import TechnologieList from "../../TechnologieList";
import { GetStaticProps } from "next";
import { sanityClient } from "../../../sanity";
import { Project, Technology } from "../../../types/types";
import ProjectCard from "../../Library/Cards/ProjectCard";
import ProjectList from "../../ProjectList";
import FiltresButton from "../../FiltresButton";
import Filter from "../../Filter";

interface props {
 technologies: string[];
}

const ProjectsSection = ({ technologies }: props) => {
 const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
 const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

 const [projects, setProjects] = useState<Project[]>([]);
 const getProjects = async (filter: string[]) => {
  const getProjectsQuery = `*[_type == "project" && references(*[_type == "technology" && title in ${JSON.stringify(
   filter
  )}]._id)]{
    ...,
    'technologies': technologies[]->{title, descriptionIcon}
  }`;
  const projects = await sanityClient.fetch(getProjectsQuery);
  console.log(projects);
  setProjects(projects);
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
   console.log("data", data);
   setProjects(data);
  } catch (error) {
   console.log(error);
  }
  console.log(projects);
 };

 const handleSubmitFilter = (filter: string[]) => {
  console.log("sub");
  setIsFilterOpen(false);
  setSelectedTechnologies(filter);
 };

 useEffect(() => {
  getAllProjects();
 }, []);

 return (
  <section className="p-5 bg-default-white m-auto">
   <FiltresButton onClick={(e) => setIsFilterOpen(e)} />
   {selectedTechnologies &&
    selectedTechnologies.map((selectedTechnologie, index) => (
     <div key={index}>{selectedTechnologie}</div>
    ))}
   <ProjectList projects={projects} />

   {isFilterOpen && (
    <Filter
      
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
// export const getStaticProps: GetStaticProps = async () => {
//  const queryTechnologies = `*[_type == 'technology' ] {
//     title
//    }`;
//  const technologies = await sanityClient.fetch(queryTechnologies);
//  return {
//   props: {
//    technologies: technologies,
//   },
//  };
// };

export default ProjectsSection;
