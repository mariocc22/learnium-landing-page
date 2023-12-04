"use client";
// next imports
import Image from "next/image";

// icons
import FlameIcon from "../../../public/assets/icons/flame.svg";

// images
import Feature5Img from "../../../public/assets/feature5.webp";
import Lumi from "../../../public/assets/feature5Lumi.svg";

const Feature5 = () => {
  return (
    <section
      className="  bg-primary pb-[327px] pt-[60px] xl:py-[70px] xl:pb-[180px] relative"
      id="hero"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full xl:gap-8">
          {/* Container Header */}
          <div className="xl:max-w-[425px] z-10">
            <h3 className="h3 p-4 bg-white w-fit text-primary rounded-2xl ">
              Feature #5
            </h3>

            {/* Container Text */}
            <div className="p-8 bg-white rounded-2xl mt-6">
              {/* Header container */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <Image src={FlameIcon} width={31} height={41} alt="feature 5" />
                <h2 className="h2">Daily Challenge</h2>
              </div>
              <p className="p">
                Learnium's daily challenge feature enhances knowledge retention
                and encourages consistent app use. It transforms free moments
                into opportunities for productive learning, making it engaging
                and beneficial for users.
              </p>
            </div>
          </div>

          {/* Container Image */}
          <div className="flex items-center justify-center mt-8 z-10">
            <Image
              src={Feature5Img}
              width={548}
              height={771}
              alt="lumi phone"
              className="w-full h-auto"
            />
          </div>

          {/* Lumi background */}
          <div className="absolute bottom-0 -left-10 z-0">
            <Image src={Lumi} width={400} height={420} alt="lumi background" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature5;
