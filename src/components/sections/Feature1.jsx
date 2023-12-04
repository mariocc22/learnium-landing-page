"use client";
// next imports
import Image from "next/image";

// icons
import StudyIcon from "../../../public/assets/icons/book_study.svg";

// images
import Feature1Img from "../../../public/assets/feature1.png";
import Lumi from "../../../public/assets/feature1Lumi.svg";

const Feature1 = () => {
  return (
    <section
      className="min-h-screen  bg-primary pb-[350px] xl:pb-2 pt-[60px] relative"
      id="hero"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full xl:gap-16">
          <div className="xl:max-w-[470px] z-10">
            {/* Container Header */}
            <h3 className="h3 p-4 bg-white w-fit text-primary rounded-2xl self-start">
              Feature #1
            </h3>
            {/* Container Text */}
            <div className="p-8 bg-white rounded-2xl mt-6">
              {/* Header container */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <Image src={StudyIcon} width={31} height={41} />
                <h2 className="h2">Interactive Content</h2>
              </div>
              <p className="p">
                Our app makes studying not only effective but also fun and
                engaging. Join us on a journey where learning is an exciting
                adventure.
              </p>
            </div>
          </div>

          {/* Container Image */}
          <div className="flex items-center justify-center mt-8 ">
            <Image src={Feature1Img} width={783} height={515} />
          </div>

          {/* Lumi background */}
          <div className="absolute bottom-0 left-0 z-0">
            <Image src={Lumi} width={350} height={350} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;