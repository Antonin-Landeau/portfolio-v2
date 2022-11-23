import React from "react";

const Header = () => {
  return (
    <header className="flex p-5 w-full max-w-[1300px]">
      <h1 className="font-medium text-base text-default-white ">
        LANDEAU <span className="text-primary-orange">Antonin</span>
      </h1>
      <div className="ml-auto ">
        <div className="font-medium text-base text-default-white ">Menu</div>
        <div className="h-[2px] w-2/3 bg-primary-orange mx-auto"></div>
      </div>
      
    </header>
  );
};

export default Header;
