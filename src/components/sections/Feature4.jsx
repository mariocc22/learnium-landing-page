"use client";
// next imports
import Image from "next/image";

// icons
import ProfileIcon from "../../../public/assets/icons/profile.svg";

// images
import Feature4Img from "../../../public/assets/feature4.webp";
import Lumi from "../../../public/assets/feature4Lumi.svg";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "@/utils/variants";

const Feature4 = () => {
  return (
    <section
      className="  bg-white pb-[327px] pt-[60px] xl:pt-[70px] xl:pb-[180px] relative"
      id="feature-4"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row-reverse justify-center items-center xl:justify-start h-full xl:gap-8">
          {/* Container Header */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="xl:max-w-[425px] z-10"
          >
            <h3 className="h3 p-4 bg-primary w-fit text-white rounded-2xl ">
              Feature #4
            </h3>

            {/* Container Text */}
            <div className="p-8 bg-primary rounded-2xl mt-6">
              {/* Header container */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <Image
                  src={ProfileIcon}
                  width={32}
                  height={33}
                  alt="feature 4"
                />
                <h2 className="h2 text-white">AI Assistant</h2>
              </div>
              <p className="p text-white">
                Dr.Lumi, an AI Assistant chatbot, exclusively retrieves answers
                from imported materials, ensuring reliability. It offers
                detailed responses and insightful examples to clarify learner
                questions, facilitating a better understanding of complex
                concepts.
              </p>
            </div>
          </motion.div>

          {/* Container Image */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center justify-center mt-8 z-10"
          >
            <Image
              src={Feature4Img}
              width={536}
              height={660}
              alt="lumi phone"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Lumi background */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="absolute bottom-0 -right-20 z-0"
          >
            <Image src={Lumi} width={344} height={303} alt="lumi background" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature4;
