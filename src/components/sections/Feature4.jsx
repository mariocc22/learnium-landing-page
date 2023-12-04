"use client";
// next imports
import Image from "next/image";

// icons
import ProfileIcon from "../../../public/assets/icons/profile.svg";

// images
import Feature4Img from "../../../public/assets/feature4.png";
import Lumi from "../../../public/assets/feature4Lumi.svg";

const Feature4 = () => {
  return (
    <section
      className="  bg-white pb-[327px] pt-[60px] xl:pt-[70px] xl:pb-[130px] relative"
      id="hero"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row-reverse justify-center items-center xl:justify-start h-full xl:gap-8">
          {/* Container Header */}
          <div className="xl:max-w-[425px] z-10">
            <h3 className="h3 p-4 bg-primary w-fit text-white rounded-2xl ">
              Feature #4
            </h3>

            {/* Container Text */}
            <div className="p-8 bg-primary rounded-2xl mt-6">
              {/* Header container */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <Image src={ProfileIcon} width={31} height={41} />
                <h2 className="h2 text-white">AI Assistant</h2>
              </div>
              <p className="p text-white">
                Our app makes studying not only effective but also fun and
                engaging. Join us on a journey where learning is an exciting
                adventure.
              </p>
            </div>
          </div>

          {/* Container Image */}
          <div className="flex items-center justify-center mt-8 z-10">
            <Image src={Feature4Img} width={536} height={660} />
          </div>

          {/* Lumi background */}
          <div className="absolute bottom-0 -right-40 z-0">
            <Image src={Lumi} width={500} height={420} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature4;
