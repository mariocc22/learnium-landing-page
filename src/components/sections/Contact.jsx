"use client";
// next imports
import Image from "next/image";
// images
import LumiContactTop from "../../../public/assets/ContactLumi.svg";
import LumiContactBottom from "../../../public/assets/ContactLumiBottom.svg";
import backgroundImage from '../../../public/assets/book.svg';

// Will handle form submission here
const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Form submitted');
};



const Contact = () => {
  return (
    <section className="relative mt-56">

      <div className="absolute w-full -top-72 z-10">
        <Image src={LumiContactTop} width={500} height={420} alt="Let's talk" className="h-auto mx-auto " />
      </div>
      
      <div className="relative flex flex-col justify-top items-center bg-primary min-h-screen z-20 pt-24">
          <div className="w-full max-w-4xl text-left p-4">
            <h2 className="text-4xl font-bold text-white">Let's talk</h2>
          </div>
          
          <div
            className="w-full max-w-4xl min-h-full p-6 rounded-lg bg-cover bg-top pt-24"
            style={{ backgroundImage: `url(${backgroundImage.src})`, minHeight: '700px' }}
          >
            <div className="flex flex-col md:flex-row items-end md:space-x-6">
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold text-primary">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 p-2 border-2 border-gray-200 rounded"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold text-primary">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 p-2 border-2 border-gray-200 rounded"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-semibold text-primary">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="mt-1 p-2 border-2 border-gray-200 rounded"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full md:w-1/2 p-6">
                <Image src={LumiContactBottom} width={200} height={320} alt="Let's talk" className="h-auto mx-auto " />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
