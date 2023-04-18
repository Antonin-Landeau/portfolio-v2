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
  console.log(selectedTechnologies);
  console.log(JSON.stringify(selectedTechnologies));
 };
 return (
  <div>
   <h2 className=" border-b-[1px] text-lg mb-2">Technologies</h2>
   <ul className="pl-2">
    {technologies &&
     technologies.map((technologie, index) => (
      <li key={index} className="flex p-0.5">
       <input
        type="checkbox"
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
