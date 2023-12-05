"use client";
// react
import { useState, useEffect } from "react";

import ReactPlayer from "react-player";

// link scroll
import { Link } from "react-scroll";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "@/utils/variants";

const Hero = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <section
      className="h-min-screen  pb-[62px] xl:pt-[40px] pt-[80px]"
      id="aboutus"
    >
      <div className="container mx-auto h-full xl:pt-20 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row-reverse xl:gap-8 justify-center items-center xl:justify-start h-full">
          {/* Text Hero Section */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className=" relative overflow-hidden w-full max-w-[398px] xl:w-[398px] h-[723px]  border-8 border-black rounded-[32px] mt-[2rem] bg-yellow-300"
          >
            {hasWindow && (
              <div className="absolute -left-10 -top-3 right-10">
                <ReactPlayer
                  width="460px"
                  height="723px"
                  url={"/videos/video_lumi.mp4"}
                  playing={true}
                  controls={true}
                  volume={1}
                  pip={false}
                  light={false}
                  muted={true}
                />
                <source src={"/videos/video_lumi.mp4"} type="video/mp4" />
              </div>
            )}
          </motion.div>
          {/* Video */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="h1 mt-[32px] mb-[12px]">
              Discover the joy of learning
            </h1>
            <p className="p mb-8 xl:w-[510px]">
              Learnium is an AI-Powered mobile app in edTech industry. Learnium
              simplifies the learning process by transforming textbooks into
              interactive content, provides a flexible learning schedule, and
              keeps learners engaged in practice and tests by rewarding their
              progress.
            </p>
            <Link
              to={`feature-1`}
              spy={true}
              smooth={true}
              className="cursor-pointer"
            >
              <button className="btn md:w-max md:mx-auto xl:mx-0">
                See Features
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
