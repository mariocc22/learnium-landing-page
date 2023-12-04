"use client";
// next imports
import Image from "next/image";

// icons
import ClockIcon from "../../../public/assets/icons/clock_planner.svg";

// images
import Lumi from "../../../public/assets/feature2.webp";

const Feature2 = () => {
  return (
    <section
      className="min-h-screen xl:min-h-fit bg-white pb-[110px] xl:pb-[80px] pt-[60px] relative"
      id="hero"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row-reverse justify-center items-center xl:justify-start h-full xl:gap-16">
          {/* Container Header */}
          <div className="xl:max-w-[425px]">
            <h3 className="h3 p-4 bg-primary w-fit text-white rounded-2xl ">
              Feature #2
            </h3>

            {/* Container Text */}
            <div className="p-8 bg-primary rounded-2xl mt-6">
              {/* Header container */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <Image src={ClockIcon} width={34} height={41} alt="feature 2" />
                <h2 className="h2 text-white">Dynamic Study Planner</h2>
              </div>
              <p className="p text-white">
                Learnium tailors study sessions to user’s learning preferences
                and upcoming exam dates. The study plan is responsive to the
                learner’s progress and quiz results and covers everything that
                the learner needs to practice to achieve a certain result.
              </p>
            </div>
          </div>

          {/* Container Image */}
          <div className="flex items-center justify-center mt-8 ">
            <Image
              src={Lumi}
              width={660}
              height={660}
              alt="lumi character"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
