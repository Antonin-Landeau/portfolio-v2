import React from "react";

interface props {
 className: string;
 fill?: string;
}
const LinkIcon = ({ className, fill }: props) => {
 return (
  <svg
   className={className}
   fill={`${fill ? fill : "none"}`}
   stroke="currentColor"
   strokeWidth={2}
   viewBox="0 0 24 24"
   xmlns="http://www.w3.org/2000/svg"
   aria-hidden="true"
  >
   <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
   />
  </svg>
 );
};

export default LinkIcon;
