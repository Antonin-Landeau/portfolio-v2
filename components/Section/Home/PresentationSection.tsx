import Image from "next/image";
import React from "react";
import Title from "../../Library/Title";
import profilePicture from "./../../../public/profilePicture.png";
import SectionFooter from "./SectionFooter";

const PresentationSection = () => {
  return (
    <section className="bg-gb-color-black px-5 w-full">
      <Title title="A propos" variant="white" />
      <div className="w-fit mx-auto lg:my-28">
        <div className="md:flex items-center ">
          <Image
            className="mx-auto"
            src={profilePicture}
            alt="profilePicture"
          />
          <div className="h-w-[2px] bg-primary-orange"></div>
          <div className="md:ml-16">
            <p className="text-xl text-center text-default-white py-7 max-w-md md:text-left ">
              Bonjour, <br />
              je suis LANDEAU Antonin et
              <span className="text-primary-orange font-medium">
                {" "}
                recherche{" "}
              </span>
              un travail en tant que
              <span className="text-primary-orange font-medium">
                {" "}
                développeur web
              </span>
              .Vous pourrez découvrir les
              <span className="text-primary-orange font-medium"> projets </span>
              que j’ai réalisés durant mes études et mon temps libre à
              travers ce portfolio.
            </p>
            <SectionFooter variant="white">
              <div className="py-7 text-default-white">Bonne visite !</div>
            </SectionFooter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
