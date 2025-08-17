import React from "react";

import Link from "next/link";
import {useState} from "react";

import {AiFillGithub} from "react-icons/ai";
import {IoLogoLinkedin} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";

import NavStyles from "@styles/Navbar.module.css";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="mx-5">
      <div className="container mx-auto flex flex-wrap py-1.5 font-montserrat">
        <Logo/>
        <HamburgerMenuIcon handleClick={handleClick}/>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto transition`}
        >
          <div
            className="container text-lg lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <NavLink text="Home" href="/"></NavLink>
            <NavLink text="Blog" href="/blog"></NavLink>
            <div className="flex flex-row mr-auto w-full items-start sm:h-auto">
              <NavSocialLink href="https://github.com/Wrdle">
                <AiFillGithub/>
              </NavSocialLink>
              <NavSocialLink href="https://www.linkedin.com/in/matt-dagostino/">
                <IoLogoLinkedin/>
              </NavSocialLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    (<Link
      href="/"
      className="hover:text-white inline-flex items-center py-2 mr-4 text-white">
      <span className={NavStyles.CustomBrand}>
        mattdag<span className={NavStyles.underscore}>_</span>
      </span>
    </Link>)
  );
};

const NavLink = ({text, href}) => {
  return (
    (<Link
      href={href}
      className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-zinc-400 items-center justify-center hover:text-zinc-200 transition">
        {text}
    </Link>)
  );
};

const NavSocialLink = ({children, href}) => {
  return (
    <Link href={href}>
      {React.cloneElement(children, {
        className:
          "text-[42px] inline-flex w-auto px-3 py-2 text-zinc-400 items-center hover:text-zinc-200",
      })}
    </Link>
  );
};

const HamburgerMenuIcon = ({handleClick}) => {
  return (
    <button
      className="inline-flex p-3 lg:hidden text-white ml-auto outline-none transition items-center"
      onClick={handleClick}
    >
      <GiHamburgerMenu
        size="1.3em"
        className=" text-zinc-300 hover:text-white transition"
      />
    </button>
  );
};
