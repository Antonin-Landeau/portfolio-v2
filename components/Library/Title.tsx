import React, { FunctionComponent } from "react";

interface Props {
  title: string;
  variant?: string;
  className?: string;
}

const Title: FunctionComponent<Props> = ({ title, variant, className }) => {
  return (
    <div className={`${className} py-7 flex items-center`}>
      <span>
        <h1
          className={`text-4xl mr-5 whitespace-nowrap ${
            variant === "white" ? "text-default-white" : "text-primary-font"
          }`}
        >
          {title}
        </h1>
      </span>
      <div className="h-[1px] w-full bg-primary-orange"></div>
    </div>
  );
};

export default Title;
