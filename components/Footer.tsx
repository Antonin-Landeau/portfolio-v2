import Image from "next/image";
import Link from "next/link";
import React from "react";
import GithubIcon from "./../public/social-icons/github-ico.svg";
import InstagramIcon from "./../public/social-icons/instagram-ico.svg";
import YoutubeIcon from "./../public/social-icons/youtube-ico.svg";
import Github from "./Icons/Github";
import Instagram from "./Icons/Instagram";
import Youtube from "./Icons/Youtube";

const Footer = () => {
  return (
    <footer className="px-5 py-14 bg-default-white">
      <div className="flex items-center justify-center gap-5 w-fit mx-auto">
        <Link
          href="https://www.youtube.com/channel/UCjhdG_xRLIxwez_fUBS7lsw"
          legacyBehavior
        >
          <a target="_blank">
            <Youtube className="w-10" />
          </a>
        </Link>
        <Link
          href="https://www.instagram.com/antonin_landeau/?hl=fr"
          legacyBehavior
        >
          <a target="_blank">
            <Instagram className="w-10" />
          </a>
        </Link>
        <Link
          href="https://github.com/Antonin-Landeau"
          legacyBehavior
        >
          <a target="_blank">
            <Github className="w-10" />
          </a>
        </Link>
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
