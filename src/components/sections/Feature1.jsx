"use client";
// next imports
import Image from "next/image";

// icons
import StudyIcon from "../../../public/assets/icons/book_study.svg";

// images
import Feature1Img from "../../../public/assets/feature1.webp";
import Lumi from "../../../public/assets/feature1Lumi.svg";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "@/utils/variants";

const Feature1 = () => {
  return (
    <section
      className="  bg-primary pb-[350px] xl:pb-[200px] pt-[60px] relative"
      id="feature-1"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full xl:gap-16">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="xl:max-w-[470px] z-10"
          >
            {/* Container Header */}
            <h3 className="h3 p-4 bg-white w-fit text-primary rounded-2xl self-start">
              Feature #1
            </h3>
            {/* Container Text */}
            <div className="p-8 bg-white rounded-2xl mt-6">
              {/* Header container */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <Image src={StudyIcon} width={31} height={41} alt="feature 1" />
                <h2 className="h2">Interactive Content</h2>
              </div>
              <p className="p">
                Learnium simplifies interactive content creation by allowing
                users to upload PDFs, paste text, or capture book pages via OCR
                technology. It scans and generates key topics for focused
                learning, including quizzes, flashcards, and summaries.
              </p>
            </div>
          </motion.div>

          {/* Container Image */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center justify-center mt-8 "
          >
            <Image
              src={Feature1Img}
              width={783}
              height={515}
              alt="lumi phone"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Lumi background */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="absolute bottom-0 left-0 z-0"
          >
            <Image
              src={Lumi}
              width={350}
              height={350}
              alt="lumi background"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
