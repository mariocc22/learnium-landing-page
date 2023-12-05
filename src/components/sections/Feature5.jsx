"use client";
// next imports
import Image from "next/image";

// icons
import FlameIcon from "../../../public/assets/icons/flame.svg";

// images
import Feature5Img from "../../../public/assets/feature5.webp";
import Lumi from "../../../public/assets/feature5Lumi.svg";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "@/utils/variants";

const Feature5 = () => {
  return (
    <section
      className="  bg-primary pb-[327px] pt-[60px] xl:py-[70px] xl:pb-[180px] relative"
      id="feature-5"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full xl:gap-8">
          {/* Container Header */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="xl:max-w-[425px] z-10"
          >
            <h3 className="h3 p-4 bg-white w-fit text-primary rounded-2xl ">
              Feature #5
            </h3>

            {/* Container Text */}
            <div className="p-8 bg-white rounded-2xl mt-6">
              {/* Header container */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <Image src={FlameIcon} width={29} height={42} alt="feature 5" />
                <h2 className="h2">Daily Challenge</h2>
              </div>
              <p className="p">
                Learnium's daily challenge feature enhances knowledge retention
                and encourages consistent app use. It transforms free moments
                into opportunities for productive learning, making it engaging
                and beneficial for users.
              </p>
            </div>
          </motion.div>

          {/* Container Image */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center mt-8 z-10"
          >
            <Image
              src={Feature5Img}
              width={548}
              height={771}
              alt="lumi phone"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Lumi background */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="absolute bottom-0 -left-10 z-0"
          >
            <Image src={Lumi} width={310} height={292} alt="lumi background" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature5;
