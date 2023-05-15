import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import TechnologieList from "./TechnologieList";

interface props {
  technologies: string[];
  selectedTechnologies: string[];
  setSelectedTechnologies: Dispatch<SetStateAction<string[]>>;
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit: (e: string[]) => void;
}

const Filter = ({
  technologies,
  selectedTechnologies,
  setSelectedTechnologies,
  setIsFilterOpen,
  onSubmit,
}: props) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(selectedTechnologies);
  };
  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="fixed z-10 top-0 right-0 left-0 bottom-0 bg-default-white overflow-auto"
    >
      <div className="fixed top-0 flex items-center border-b-[1px] border-b-secondary-font w-full bg-default-white">
        <h2 className="py-3 w-full text-center text-xl font-medium">filtres</h2>
        <svg
          onClick={() => {
            setSelectedTechnologies((prev) => [...prev]);
            setIsFilterOpen(false);
          }}
          className="w-10 h-10 text-secondary-font"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="overflow-x-hidden overflow-y-scroll mt-12">
        <TechnologieList
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>
      <div className="fixed flex z-20 w-full bg-default-white bottom-0 left-1/2 -translate-x-1/2 py-5 drop-shadow-[0_-2px_5px_rgba(0,0,0,0.25)]">
        <button
          type="submit"
          className="  bg-primary-orange text-default-white p-2 rounded-lg w-full mx-5"
        >
          Filtrer
        </button>
      </div>
    </form>
  );
};

export default Filter;
