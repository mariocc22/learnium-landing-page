"use client";
// next imports
import { useState, useRef } from "react";
import Image from "next/image";
// images
import LumiContactBottom from "../../../public/assets/ContactLumiBottom.svg";
import backgroundImage from "../../../public/assets/book.svg";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "@/utils/variants";

const Contact = () => {
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const emailForm = useRef(null);

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbxF2WR1K1Rq5iVYmt94bjopvTXN-27Z4RRwncDM6VjmLgARMd4Y6UQFurc0IVfTkJJW/exec";

  // Will handle form submission here
  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailSending(true);

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors", // Depending on the CORS policy of your endpoint
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setEmailSent(true);
        setEmailSending(false);
        emailForm.current.reset();
      } else {
        console.log("Failed to send email");
        setEmailSent(true);
        setEmailSending(false);
        emailForm.current.reset();
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setEmailSent(true);
      setEmailSending(false);
      emailForm.current.reset();
    }

    console.log("Form submitted");
  };

  return (
    <section className="relative mt-56">
      <div className="relative flex flex-col justify-top items-center bg-primary min-h-screen z-20 pt-24 pb-10 overflow-hidden  ">
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-4xl text-left p-4"
        >
          <h2 className="text-[65px] font-semibold text-white">Let's talk</h2>
        </motion.div>

        {/* Notebook Background */}
        <div
          className="w-full max-w-[1000px]   min-h-[750px] p-5 xl:p-10 rounded-lg bg-cover bg-top pt-24  "
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            minHeight: "750px",
          }}
        >
          <div className="flex flex-col md:flex-row items-end justify-center md:space-x-6 xl:py-14">
            {/* Form */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full md:w-1/2 bg-white p-6 xl:px-[2px] rounded-lg"
            >
              <form
                onSubmit={handleSubmit}
                disabled={emailSending}
                ref={emailForm}
                className="flex flex-col space-y-4"
              >
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-[19px] font-semibold text-primary"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 p-2 border-2 xl:w-[432px] w-full border-secondary  rounded-lg focus:border-secondary "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-[19px] font-semibold text-primary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 p-2 border-2 xl:w-[432px] w-full border-secondary  rounded-lg focus:border-secondary "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-[19px] font-semibold text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 p-2 border-2 xl:w-[432px]  w-full border-secondary  rounded-lg focus:border-secondary "
                  ></textarea>
                </div>
                <button
                  disabled={emailSending}
                  type="submit"
                  className="btn py-2 xl:w-[432px]"
                >
                  {emailSending ? "Sending..." : "Send"}
                </button>
              </form>
              {emailSent && (
                <p className="text-sm text-gray-600 mt-2">
                  Email sent successfully! Thank you.
                </p>
              )}
            </motion.div>
            {/* Lumi */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="absolute -bottom-16 md:relative"
            >
              <Image
                src={LumiContactBottom}
                width={250}
                height={320}
                alt="Let's talk"
                className="scale-150"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
