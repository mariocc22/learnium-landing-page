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
  }),
    [];

  return (
    // transition animation for header
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col mdx:flex-row mdx:items-center mdx:justify-between">
        <div className="flex justify-between items-center px-4">
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
                width={250}
                height={40}
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
            className="cursor-pointer mdx:hidden"
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
              ? "max-h-max py-8 px-4 mdx:py-0 mdx:px-0"
              : "max-h-0 mdx:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold
           mdx:font-medium mdx:flex-row mdx:w-max mdx:gap-x-8 mdx:h-max mdx:bg-transparent mdx:pb-0 transition-all duration-150 text-center mdx:text-left uppercase
           text-sm mdx:text-[15px] mdx:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why us
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonial"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </Link>
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all cars
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
