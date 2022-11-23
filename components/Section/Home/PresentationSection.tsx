import Image from "next/image";
import React from "react";
import Title from "../../Library/Title";
import profilePicture from "./../../../public/profilePicture.png";
import SectionFooter from "./SectionFooter";

const PresentationSection = () => {
  return (
    <section className="bg-gb-color-black px-5">
      <Title title="A propos" variant="white" />
      <div className="w-fit mx-auto lg:my-12">
          <Image className="mx-auto" src={profilePicture} alt="profilePicture" />
        <p className="text-xl text-center text-default-white py-7 max-w-md">
          Bonjour, je suis LANDEAU Antonin et
          <span className="text-primary-orange font-medium"> recherche </span>
          un travail en tant que
          <span className="text-primary-orange font-medium">
            {" "}
            developpeur web{" "}
          </span>
          .Vous pourrez décourvir les
          <span className="text-primary-orange font-medium"> projets </span>
          que j’ai pue réaliser durant mes études et mon temps libre à travers
          ce portfolio.
        </p>
        <SectionFooter variant="white">
          <div className="py-7 text-default-white">Bonne visite !</div>
        </SectionFooter>
      </div>
    </section>
  );
};

export default PresentationSection;