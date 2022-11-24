import React from "react";

const Ambelishments = () => {
  return (
    <>
      <div
        className="absolute text-embelishment-color text-9xl top-20 rotate-12 font-bold lg:-rotate-12 lg:left-[6vw]"
        style={{
          fontFamily: "JetBrains Mono",
        }}
      >
        const
      </div>
      <div
        className="hidden lg:absolute text-embelishment-color text-9xl top-3/4 rotate-12 font-bold lg:rotate-12 lg:left-[6vw] lg:block"
        style={{
          fontFamily: "JetBrains Mono",
        }}
      >
        {`log()`}
      </div>
      <div
        className="absolute text-embelishment-color text-9xl whitespace-nowrap top-3/4 rotate-12 font-bold lg:-rotate-12 lg:right-[6vw] lg:top-1/2 lg:-translate-y-1/2"
        style={{
          fontFamily: "JetBrains Mono",
        }}
      >
        {`()=>{}`}
      </div>
    </>
  );
};

export default Ambelishments;
