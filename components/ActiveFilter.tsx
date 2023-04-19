import React, { MouseEventHandler } from "react";

interface props {
  title: string;
  onClick: (title: string) => void;
}

const ActiveFilter = ({ title, onClick }: props) => {
  return (
    <div className="flex items-center border-2 rounded-full px-2 py-0.5 whitespace-nowrap bg-primary-orange text-default-white">
      <div className="font-medium">{title}</div>
      <svg
        onClick={() => onClick(title)}
        className="h-5 w-5 ml-1"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default ActiveFilter;
