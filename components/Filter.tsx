import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import TechnologieList from "./TechnologieList";

interface props {
 technologies: string[];
 selectedTechnologies: string[];
 setSelectedTechnologies: Dispatch<SetStateAction<string[]>>;
 onSubmit: (e: string[]) => void;
}

const Filter = ({
 technologies,
 selectedTechnologies,
 setSelectedTechnologies,
 onSubmit,
}: props) => {
 const submitHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  onSubmit(selectedTechnologies);
 };
 return (
  <form
   onSubmit={(e) => submitHandler(e)}
   className="fixed z-10 top-0 right-0 left-0 bottom-0 bg-default-white"
  >
   <TechnologieList
    technologies={technologies}
    selectedTechnologies={selectedTechnologies}
    setSelectedTechnologies={setSelectedTechnologies}
   />
   <button type="submit">Filtrer</button>
  </form>
 );
};

export default Filter;
