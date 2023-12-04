"use client";

// react
import { useContext, useEffect, useState } from "react";

// next image
import Image from "next/image";

// react scroll
import { Link } from "react-scroll";

// components

// media query hook
import { useMediaQuery } from "react-responsive";

// icons
import { BiX } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  const tabletMode = useMediaQuery({
    query: "(min-width: 900px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      // header
      setHeader(window.scrollY > 40);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // transition animation for header
    <header
      className={`${
        header ? "bg-white shadow-md py-4 " : "bg-transparent shadow-none py-4 "
      } fixed right-0 left-0  mx-auto z-20 xl:px-8 px-5  transition-all duration-300`}
    >
      <div className=" mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between xl:max-w-[1440px]">
        {/* logo */}
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            {tabletMode ? (
              <Image
                src={"/assets/logo desktop.svg"}
                width={245}
                height={38}
                alt="logo"
              />
            ) : (
              <Image
                src={"/assets/logo mobile.svg"}
                width={40}
                height={40}
                alt="logo"
              />
            )}
          </Link>

          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <IoMdMenu className="text-4xl text-secondary" />
            )}
          </div>
        </div>

        {/* nav */}
        <nav
          className={`${
            nav
              ? "max-h-max py-8 px-4 xl:py-0 xl:px-0 mt-6 "
              : "max-h-0 xl:max-h-max"
          } flex flex-col w-full  xl:w-fit xl:bg-white gap-y-6 overflow-hidden font-bold bg-tertiary rounded-2xl
           xl:font-medium xl:flex-row xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left xl:items-center
           text-sm xl:text-[15px] xl:normal-case xl:mt-0 `}
        >
          <Link
            className="cursor-pointer navEl py-5 hover:bg-tertiary-hover transition-all duration-150 ease-in rounded-lg"
            to="aboutus"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About Us
          </Link>
          <Link
            className="cursor-pointer navEl py-5 hover:bg-tertiary-hover transition-all duration-150 ease-in rounded-lg"
            to="features"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Features
          </Link>
          <Link
            className="cursor-pointer navEl py-5 hover:bg-tertiary-hover transition-all duration-150 ease-in rounded-lg"
            to="team"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            The Team
          </Link>
          <Link
            className="cursor-pointer navEl py-5 hover:bg-tertiary-hover transition-all duration-150 ease-in rounded-lg"
            to="contactus"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact Us
          </Link>
          <Link
            className="cursor-pointer"
            to="project"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            <button className="btn text-[25px]">Project Proposal</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;