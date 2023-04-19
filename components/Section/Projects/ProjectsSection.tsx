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
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
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
    <section className="p-5 bg-default-white m-auto">
      <div className="flex items-center mb-5 w-full">
        <FiltresButton onClick={(e) => setIsFilterOpen(e)} />
        <div className="flex items-center gap-3 overflow-x-scroll w-full">
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
              />
            ))}
        </div>
      </div>
      <ProjectList projects={projects} />

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
