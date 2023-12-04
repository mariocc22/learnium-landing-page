"use client";
// next imports
import Image from "next/image";

// icons
import ProgressIcon from "../../../public/assets/icons/progress.svg";

// images
import Feature3Img from "../../../public/assets/feature3.webp";
import Lumi from "../../../public/assets/feature3Lumi.svg";

const Contact = () => {
  return (
    <section
      className="  bg-primary pb-[327px] pt-[60px] xl:py-[70px] relative"
      id="hero"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full xl:gap-8">
          {/* Container Header */}
          <div className="xl:max-w-[425px] z-10">
            <h3 className="h3 p-4 bg-white w-fit text-primary rounded-2xl ">
              Feature #3
            </h3>

            {/* Container Text */}
            <div className="p-8 bg-white rounded-2xl mt-6">
              {/* Header container */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <Image
                  src={ProgressIcon}
                  width={31}
                  height={41}
                  alt="progress icon"
                />
                <h2 className="h2">Progress Tracker</h2>
              </div>
              <p className="p">
                Our app makes studying not only effective but also fun and
                engaging. Join us on a journey where learning is an exciting
                adventure.
              </p>
            </div>
          </div>

          {/* Container Image */}
          <div className="flex items-center justify-center mt-8 z-10">
            <Image
              src={Feature3Img}
              width={617}
              height={660}
              alt="lumi image"
              className="w-full h-auto"
            />
          </div>

          {/* Lumi background */}
          <div className="absolute bottom-0 left-0 z-0">
            <Image
              src={Lumi}
              width={500}
              height={420}
              alt="lumi background"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
