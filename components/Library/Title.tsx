import React, { FunctionComponent } from "react";

interface Props {
  title: string;
  variant?: string;
  className?: string;
  small?: true
}

const Title: FunctionComponent<Props> = ({ title, variant, className, small }) => {
  return (
    <>
      {variant === "orange" && (
        <div className={`${className} py-11 flex items-center max-w-2xl mx-auto`}>
          <span>
            <h1
              className={`text-6xl mr-5 whitespace-nowrap font-semibold text-default-black ${
                className ? className : ""
              }`}
            >
              {title}
            </h1>
          </span>
          <div className="h-[2px] w-full bg-default-white"></div>
        </div>
      )}
      {variant === "white" && (
        <div className={`${className} py-11 flex items-center max-w-2xl mx-auto`}>
          <span>
            <h1
              className={` mr-5 whitespace-nowrap font-semibold text-default-white ${
                className ? className : ""
              } ${small ? 'text-4xl sm:text-6xl' : 'text-6xl'}`}
              
            >
              {title}
            </h1>
          </span>
          <div className="h-[2px] w-full bg-primary-orange"></div>
        </div>
      )}
      {variant === "black" && (
        <div className={`${className} py-11 flex items-center max-w-2xl mx-auto`}>
          <span>
            <h1
              className={`text-6xl mr-5 whitespace-nowrap font-semibold text-primary-font ${
                className ? className : ""
              }`}
            >
              {title}
            </h1>
          </span>
          <div className="h-[2px] w-full bg-primary-orange"></div>
        </div>
      )}
    </>
  );
};

export default Title;
