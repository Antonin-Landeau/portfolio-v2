import React, { FormEvent, useState } from "react";
import TechnologieList from "./TechnologieList";

interface props {
 technologies: string[];
 onSubmit: (e: string[]) => void;
}

const Filter = ({ technologies, onSubmit }: props) => {
 const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
 const submitHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(selectedTechnologies);
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
