"use client";

// next image
import Image from "next/image";

// react scroll
import { Link } from "react-scroll";

// react
import { useEffect, useState } from "react";

// svgs
import LogoDesktop from "../../public/assets/logo desktop.svg";
import LogoMobile from "../../public/assets/logo mobile.svg";

const Footer = () => {
  const [desktopMode, setDesktopMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDesktopMode(window.innerWidth >= 1300);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            {desktopMode ? (
              <Image
                src={LogoDesktop}
                width={251}
                height={39}
                alt="logo"
                className="w-full h-auto"
              />
            ) : (
              <Image
                src={LogoMobile}
                width={40}
                height={40}
                alt="logo"
                className="w-full h-auto"
              />
            )}
          </Link>
        </div>

        {/* copyright */}
        <p className="hidden xl:block">
          All rights reserved © 2023 Learnium Team
        </p>

        {/* Proposal */}
        <a href={"/learnium_proposal.pdf"} download="Learnium Proposal">
          <button className="btn text-[25px] cursor-pointer transition-all duration-200 hover:-translate-y-1">
            Project Proposal
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
