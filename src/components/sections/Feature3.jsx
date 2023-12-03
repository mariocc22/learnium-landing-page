"use client";
// next imports
import Image from "next/image";

// icons
import StudyIcon from "../../../public/assets/icons/book_study.svg";

// images
import Feature3Img from "../../../public/assets/feature3.svg";
import Lumi from "../../../public/assets/feature3Lumi.svg";

const Feature3 = () => {
  return (
    <section
      className="min-h-screen xl:h-[90vh] bg-primary pb-[327px] pt-[60px] relative"
      id="hero"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div>
            {/* Container Header */}
            <h3 className="h3 p-4 bg-white w-fit text-primary rounded-2xl ">
              Feature #3
            </h3>

            {/* Container Text */}
            <div className="p-8 bg-white rounded-2xl mt-6">
              {/* Header container */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <Image src={StudyIcon} width={31} height={41} />
                <h2 className="h2">Progress Tracker</h2>
              </div>
              <p className="p">
                Our app makes studying not only effective but also fun and
                engaging. Join us on a journey where learning is an exciting
                adventure.
              </p>
            </div>

            {/* Container Image */}
            <div className="flex items-center justify-center mt-8 ">
              <Image src={Feature3Img} width={352} height={735} />
            </div>

            {/* Lumi background */}
            <div className="absolute bottom-0 left-0">
              <Image src={Lumi} width={300} height={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
