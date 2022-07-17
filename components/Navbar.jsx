import React from "react";

import Link from "next/link";
import { useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import NavStyles from "../static/styles/CustomNav.module.css";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap p-3 navbar navbar-expand-lg">
        <Logo />
        <HamburgerMenuIcon handleClick={handleClick} />
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto transition`}
        >
          <div className="text-lg lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <NavLink text="Home" href="/"></NavLink>
            <NavLink text="Projects" href="/"></NavLink>
            <NavLink text="Photography" href="/"></NavLink>
            <NavLink text="Blog" href="/"></NavLink>
            <div className="inline-flex flex-row mr-auto w-auto w-full items-start flex flex-col sm:h-auto">
              <NavSocialLink href="https://github.com/Wrdle">
                <AiFillGithub />
              </NavSocialLink>
              <NavSocialLink href="https://www.linkedin.com/in/matt-dagostino/">
                <IoLogoLinkedin />
              </NavSocialLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <a className="hover:text-white inline-flex items-center p-2 mr-4">
        <span className={NavStyles.CustomBrand}>
          mattdag<span className={NavStyles.underscore}>_</span>
        </span>
      </a>
    </Link>
  );
};

const NavLink = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-zinc-400 items-center justify-center hover:text-zinc-200 transition">
        {text}
      </a>
    </Link>
  );
};

const NavSocialLink = ({ children, href }) => {
  return (
    <Link href={href}>
      {React.cloneElement(children, {
        className:
          "text-[42px] inline-flex w-auto px-3 py-2 text-zinc-400 items-center hover:text-zinc-200",
      })}
    </Link>
  );
};

const HamburgerMenuIcon = ({ handleClick }) => {
  return (
    <button
      className=" inline-flex p-3 lg:hidden text-white ml-auto outline-none transition"
      onClick={handleClick}
    >
      <GiHamburgerMenu
        size="1.3em"
        className=" text-zinc-300 hover:text-white transition"
      />
    </button>
  );
};
