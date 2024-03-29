import React from "react";

interface props {
 onClick?: () => void;
 className?: string;
}

const ChevronLeft = ({ onClick, className }: props) => {
 return (
  <svg
   onClick={onClick}
   className={className}
   fill="currentColor"
   viewBox="0 0 20 20"
   xmlns="http://www.w3.org/2000/svg"
   aria-hidden="true"
  >
   <path
    clipRule="evenodd"
    fillRule="evenodd"
    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
   />
  </svg>
 );
};

export default ChevronLeft;
