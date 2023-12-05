// icons
import { GoTriangleDown } from "react-icons/go";

// helpers
import { featuresOptions } from "@/utils/constants";

// react
import { useState } from "react";

// next
import Image from "next/image";

// scroll
import { Link } from "react-scroll";

const Dropdown = ({ desktopMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {desktopMode ? (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex flex-row items-center justify-center gap-1 navEl ${
              isOpen ? "text-primary" : ""
            }`}
          >
            Features
            <GoTriangleDown
              size={24}
              className={`transition-all ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isOpen && (
            <ul className="fixed z-20 flex flex-col bg-tertiary top-20 p-4 rounded-2xl w-[373px] gap-4 ">
              {featuresOptions.map((item, index) => (
                <Link
                  to={`feature-${index + 1}`}
                  activeClass="active"
                  spy={true}
                  key={index}
                  smooth={true}
                  className="cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <li className="flex flex-row items-center justify-start gap-4 p-4 hover:bg-tertiary-hover rounded-lg transition-all duration-200">
                    <Image
                      src={item?.icon}
                      width={24}
                      height={24}
                      alt={`icon-${index}`}
                    />
                    <h4 className="text-black navEl">{item?.name}</h4>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <Link
          className="cursor-pointer navEl py-5 hover:bg-tertiary-hover xl:hover:bg-white transition-all duration-150 ease-in rounded-lg"
          to="feature-1"
          activeClass="active"
          smooth={desktopMode}
          spy={true}
        >
          Features
        </Link>
      )}
    </>
  );
};

export default Dropdown;
