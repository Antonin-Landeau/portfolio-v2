import React from "react";

const Footer = () => {
  return (
    <footer className="px-5 py-14 bg-default-white">
      <div className="flex items-center justify-center gap-5 w-fit mx-auto">
        <div className="w-14 h-14 bg-default-black"></div>
        <div className="w-14 h-14 bg-default-black"></div>
        <div className="w-14 h-14 bg-default-black"></div>
      </div>
      <div className="mx-auto w-fit">
        <p className="text-sm pt-8 text-secondary-font font-medium">
          ©2022 Antonin Landeau, Tout droit réservé
        </p>
      </div>
    </footer>
  );
};

export default Footer;
