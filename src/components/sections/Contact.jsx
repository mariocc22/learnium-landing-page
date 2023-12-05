"use client";
// next imports
import { useState, useRef } from "react";
import Image from "next/image";
// images
import LumiContactTop from "../../../public/assets/ContactLumi.svg";
import LumiContactBottom from "../../../public/assets/ContactLumiBottom.svg";
import backgroundImage from '../../../public/assets/book.svg';



const Contact = () => {
const [emailSending, setEmailSending] = useState(false);
const [emailSent, setEmailSent] = useState(false);
const emailForm = useRef(null);

  const webAppUrl = 'https://script.google.com/macros/s/AKfycbxF2WR1K1Rq5iVYmt94bjopvTXN-27Z4RRwncDM6VjmLgARMd4Y6UQFurc0IVfTkJJW/exec';


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
        method: 'POST',
        mode: 'no-cors', // Depending on the CORS policy of your endpoint
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setEmailSent(true);
        setEmailSending(false);
        emailForm.current.reset();
      } else {
        console.log('Failed to send email');
        setEmailSent(true);
        setEmailSending(false);
        emailForm.current.reset();
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setEmailSent(true);
      setEmailSending(false);
      emailForm.current.reset();
    }

    console.log('Form submitted');
  };


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
                <form onSubmit={handleSubmit} disabled={emailSending} ref={emailForm} className="flex flex-col space-y-4">
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
                    disabled={emailSending}
                    type="submit"
                    className="bg-primary text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                  >
                    { emailSending ? 'Sending...' : 'Send' }
                  </button>
                </form>
                { emailSent && (
                  <p className="text-sm text-gray-600 mt-2">
                    Email sent successfully! Thank you.'
                  </p>
                )}
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
