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
    <section className="bg-default-white w-full">
      <div className="grid ">
        <div className="flex items-center p-5 overflow-auto">
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
                />
              ))}
          </div>
        </div>
        <div className="mx-auto p-5">{projects && <ProjectList projects={projects} />}</div>
      </div>
      {/* <div className="flex items-center mb-5 w-full mx-auto w-full">
        <TechnologieList
        
          selectedTechnologies={selectedTechnologies}
          technologies={technologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
        <FiltresButton onClick={(e) => setIsFilterOpen(e)} />
        <div>
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
                />
              ))}
          </div>
          <ProjectList projects={projects} />
        </div>
      </div>
      */}

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
