"use client";

// next image
import Image from "next/image";

// react scroll
import { Link } from "react-scroll";

// media query hook
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  const tabletMode = useMediaQuery({
    query: "(min-width: 900px)",
  });

  return (
    // transition animation for header
    <footer className="bg-white shadow-md py-4 mx-auto xl:px-8 px-5  transition-all duration-300">
      <div className=" mx-auto flex flex-row items-center justify-between max-w-[1440px]">
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
                src={"../assets/logo desktop.svg"}
                width={245}
                height={38}
                alt="logo"
              />
            ) : (
              <Image
                src={"../assets/logo mobile.svg"}
                width={40}
                height={40}
                alt="logo"
              />
            )}
          </Link>
        </div>

        {/* copyright */}
        <p>All rights reserved © 2023 Learnium Team</p>

        {/* Proposal */}

        <Link
          className="cursor-pointer"
          to="project"
          activeClass="active"
          smooth={desktopMode}
          spy={true}
        >
          <button className="btn w-fit text-[25px]">Project Proposal</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
