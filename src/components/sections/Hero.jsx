"use client";
// react
import { useState, useEffect } from "react";

import ReactPlayer from "react-player";

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
      id="hero"
    >
      <div className="container mx-auto h-full xl:pt-20 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row-reverse xl:gap-8 justify-center items-center xl:justify-start h-full">
          {/* Text Hero Section */}
          <div className=" relative overflow-hidden w-full max-w-[400px] xl:w-[400px] h-[723px]  border-8 border-black rounded-[32px] mt-[2rem] bg-yellow-300">
            {hasWindow && (
              <div className="absolute -left-10 top-0 bottom-0 right-10">
                <ReactPlayer
                  width="460px"
                  height="723px"
                  url={"/videos/video_lumi.mp4"}
                  playing={true}
                  controls={true}
                  pip={false}
                  light={false}
                />
                <source src={"/videos/video_lumi.mp4"} type="video/mp4" />
              </div>
            )}
          </div>
          {/* Video */}
          <div>
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
            <button className="btn md:w-max md:mx-auto xl:mx-0">
              See Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
