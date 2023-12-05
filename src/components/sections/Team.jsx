"use client";
// next imports
import Image from "next/image";

// images
import Edgar from "../../../public/assets/members/edgar.png";
import Genia from "../../../public/assets/members/genia.png";
import Nahla from "../../../public/assets/members/nahla.png";
import Pablo from "../../../public/assets/members/pablo.png";
import Tony from "../../../public/assets/members/tony.png";
import Vaib from "../../../public/assets/members/vaib.png";
import Wakana from "../../../public/assets/members/wakana.png";
import Mario from "../../../public/assets/members/mario.png";
import TeamMemberCard from "../TeamMemberCard";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "@/utils/variants";

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
    github: "https://github.com/alvelx",
    linkedin: "https://www.linkedin.com/in/edgarvelandia",
  },
  {
    name: "Mario",
    role: "Full-Stack Developer",
    image: Mario,
    github: "https://github.com/mariocc22",
    linkedin: "https://www.linkedin.com/in/mariocesena/",
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
    linkedin: "https://www.linkedin.com/in/wakanakaneiwa/",
    portfolio: "https://wakanakaneiwa.com/",
  },
  {
    name: "Pablo",
    role: "UX/UI Designer",
    image: Pablo,
    linkedin: "https://www.linkedin.com/in/palimv/",
    github: "https://github.com/PaliTriesToDesign",
    portfolio: "https://www.palitriestodesign.com/",
  },
];

const Team = () => {
  return (
    <section
      className="min-h-screen  bg-white pb-[110px] pt-[60px] relative"
      id="team"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div>
            {/* Header */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="h2 text-[32px] xl:text-[64px] py-6 px-8 bg-primary w-fit text-white rounded-2xl mb-8 ">
                The Team
              </h2>
              <p className="p mb-14 xl:max-w-[659px]">
                Get to know the team that brought this app to life in just 12
                weeks! We designed and developed it from scratch, and we're
                excited to share our creation with you.
              </p>
            </motion.div>

            {/* Team Members */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap items-center justify-center max-w-[1000px] xl:gap-14 gap-4 mx-auto"
            >
              {teamMembers.map((member, index) => {
                return <TeamMemberCard member={member} key={index} />;
              })}
            </motion.div>

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
