import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CV from "./Icons/CV";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <header className="flex p-5 w-full max-w-[1300px] lg:p-7 z-10 mx-auto">
      <Link href="/">
        <h1 className="font-medium text-base text-default-white lg:text-xl">
          LANDEAU <span className="text-primary-orange">Antonin</span>
        </h1>
      </Link>
      <nav className="ml-auto mr-5 flex items-center justify-center">
        <Link
          href="/projects"
          className={`text-default-white text-xl font-medium pb-1 ${
            pathname === "/projects" ? "border-b-2 border-primary-orange" : ""
          } `}
        >
          Projets
        </Link>
      </nav>
      <div className="">
        <Link href="CV.pdf" download={true} legacyBehavior>
          <a
            className="block bg-primary-orange p-1 px-2 text-default-white font-medium rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <CV className="w-3 fill-default-white mr-2" />
              <div>CV</div>
            </div>
          </a>
        </Link>
        {/* <div className="font-medium text-base text-default-white ">Menu</div>
        <div className="h-[2px] w-2/3 bg-primary-orange mx-auto"></div> */}
      </div>
    </header>
  );
};

export default Header;
