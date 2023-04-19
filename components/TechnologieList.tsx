import { GetStaticProps } from "next";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Technology } from "../types/types";
import { urlFor } from "../sanity";

interface props {
 technologies: string[];
 setSelectedTechnologies: Dispatch<SetStateAction<string[]>>;
 selectedTechnologies: string[];
}

const TechnologieList = ({
 technologies,
 selectedTechnologies,
 setSelectedTechnologies,
}: props) => {
 console.log("selectedTechnologies", selectedTechnologies);

 const updateTechnologies = (
  e: ChangeEvent<HTMLInputElement>,
  technology: string
 ) => {
  if (e.target.checked) {
   setSelectedTechnologies((prevState) => [...prevState, technology]);
  } else {
   setSelectedTechnologies(
    selectedTechnologies.filter((tech: string) => {
     return tech !== technology;
    })
   );
  }
 };
 return (
  <div className="p-5 text-lg">
   <h2 className=" border-b-[1px] text-lg mb-2 w-fit uppercase font-bold">Technologies</h2>
   <ul className="pl-2">
    {technologies &&
     technologies.map((technologie, index) => (
      <li key={index} className="flex p-0.5 items-center">
       <input
       className="w-5 h-5 mr-1 accent-primary-orange"
        type="checkbox"
        checked={selectedTechnologies.includes(technologie)}
        onChange={(e) => updateTechnologies(e, technologie)}
       />
       <div className="pl-1">{technologie}</div>
      </li>
     ))}
   </ul>
  </div>
 );
};

export default TechnologieList;
