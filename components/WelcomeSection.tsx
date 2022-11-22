import React from "react";
import Header from "./Header";
import ArrowDown from "./Icons/ArrowDown";

const WelcomeSection = () => {
  return (
    <section className="flex flex-col justify-between items-center h-screen">
      <Header />
      <div className="text-5xl text-default-white font-semibold">
        <div className="text-center">Developpeur</div>
        <div className="py-5 text-center text-primary-orange">Web</div>
        <div className="text-center">FullStack</div>
      </div>
      <div className="w-fit mx-auto pb-10">
        <ArrowDown />
      </div>
    </section>
  );
};

export default WelcomeSection;
