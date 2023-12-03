"use client";
// next imports
import Image from "next/image";

// images
import Edgar from "../../../public/assets/members/edgar.svg";
import Genia from "../../../public/assets/members/genia.svg";
import Nahla from "../../../public/assets/members/nahla.svg";
import Pablo from "../../../public/assets/members/pablo.svg";
import Tony from "../../../public/assets/members/tony.svg";
import Vaib from "../../../public/assets/members/vaib.svg";
import Wakana from "../../../public/assets/members/wakana.svg";
import Mario from "../../../public/assets/members/mario.svg";
import TeamMemberCard from "../TeamMemberCard";
const teamMembers = [
  {
    name: "Tony",
    role: "Full-Stack Developer",
    image: Tony,
    github: "github page",
    linkedin: "linkedin page",
  },
  {
    name: "Genia",
    role: "Full-Stack Developer",
    image: Genia,
    github: "github page",
    linkedin: "linkedin page",
  },
  {
    name: "Edgar",
    role: "Full-Stack Developer",
    image: Edgar,
    github: "github page",
    linkedin: "linkedin page",
  },
  {
    name: "Mario",
    role: "Full-Stack Developer",
    image: Mario,
    github: "github page",
    linkedin: "linkedin page",
  },
  {
    name: "Nahla",
    role: "UX/UI Designer",
    image: Nahla,
    linkedin: "linkedin page",
    portfolio: "portfolio page",
  },
  {
    name: "Vaibhav",
    role: "UX/UI Designer",
    image: Vaib,
    linkedin: "linkedin page",
    portfolio: "portfolio page",
  },
  {
    name: "Wakana",
    role: "UX/UI Designer",
    image: Wakana,
    linkedin: "linkedin page",
    portfolio: "portfolio page",
  },
  {
    name: "Pablo",
    role: "UX/UI Designer",
    image: Pablo,
    linkedin: "linkedin page",
    github: "github page",
    portfolio: "portfolio page",
  },
];

const Team = () => {
  return (
    <section
      className="min-h-screen xl:h-[90vh] bg-white pb-[110px] pt-[60px] relative"
      id="hero"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div>
            {/* Header */}
            <h2 className="h2 text-[32px] py-6 px-8 bg-primary w-fit text-white rounded-2xl mb-8 ">
              The Team
            </h2>
            <p className="p mb-14">
              Get to know the team that brought this app to life in just 12
              weeks! We designed and developed it from scratch, and we're
              excited to share our creation with you.
            </p>

            {/* Team Members */}
            <div className="flex flex-wrap gap-5 items-center justify-between ">
              {teamMembers.map((member, index) => {
                return <TeamMemberCard member={member} key={index} />;
              })}
            </div>

            {/* Container Image */}
            {/* <div className="flex items-center justify-center mt-8 ">
              <Image src={Lumi} width={350} height={341} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
