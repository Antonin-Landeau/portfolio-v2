import React, { FunctionComponent } from "react";
interface Props {
  className: string;
}

const Youtube: FunctionComponent<Props> = ({ className }) => {
  return (
    <>
      <svg
        className={className}
        viewBox="0 0 47 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-primary-orange"
          d="M38.4127 0.368245C31.3549 -0.123748 15.6353 -0.121748 8.58729 0.368245C0.955667 0.900238 0.0567917 5.60817 0 18C0.0567917 30.3698 0.947834 35.0978 8.58729 35.6318C15.6373 36.1218 31.3549 36.1238 38.4127 35.6318C46.0443 35.0998 46.9432 30.3918 47 18C46.9432 5.63017 46.0522 0.902238 38.4127 0.368245V0.368245ZM17.625 25.9999V10.0001L33.2917 17.986L17.625 25.9999V25.9999Z"
        />
      </svg>
    </>
  );
};

export default Youtube;
