import Image from "next/image";
import React from "react";
import Title from "./Library/Title";
import profilePicture from "./../public/profilePicture.png";
import SectionFooter from "./SectionFooter";

const PresentationSection = () => {
  return (
    <section className="bg-gb-color-black px-5">
      <Title title="A propos" variant="white" />
      <Image src={profilePicture} alt="profilePicture" />
      <p className="text-xl text-default-white py-7">
        Bonjour, je suis LANDEAU Antonin et
        <span className="text-primary-orange font-medium"> recherche </span>
        un travail en tant que
        <span className="text-primary-orange font-medium">
          {" "}
          developpeur web{" "}
        </span>
        .Vous pourrez décourvir les
        <span className="text-primary-orange font-medium"> projets </span>
        que j’ai pue réaliser durant mes études et mon temps libre à travers ce
        portfolio.
      </p>
      <SectionFooter variant="white">
        <div className="py-7 text-default-white">Bonne visite !</div>
      </SectionFooter>
    </section>
  );
};

export default PresentationSection;
