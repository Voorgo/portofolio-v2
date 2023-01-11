import React, { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formMessage, setFormMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const button = document.querySelector(".sendButton");
    button.disabled = true;
    button.innerText = "Sending...";
    button.style.cursor = "default";

    emailjs
      .sendForm(
        "service_ppjozy9",
        "template_lnx57zc",
        form.current,
        "d2x-kRryyzLDyWz6N"
      )
      .then(
        (result) => {
          setFormMessage("Thank you for your message!");
        },
        (error) => {
          setFormMessage(
            "There was an error sending your message. Please refresh the page and try again."
          );
        }
      );
  };

  return (
    <section
      className="w-full relative bg-yellow-300 text-[#2c2c2c] pt-12 contact px-[6vw] before:content-[''] before:absolute before:h-[200%] before:w-full before:bg-yellow-300 before:top-[-200%] before:left-0 before:-z-10"
      id="contact"
    >
      <div className="w-full max-w-[70rem] mx-auto flex flex-col gap-10">
        <h2 className="relative before:content-['<'] after:content-['>'] text-3xl font-semibold left-0 md:-left-6">
          Contact
        </h2>
        <p className="text-lg font-semibold">
          Whether you have a question, an offer or just want to chat, send me a
          message and I will get back to you!
        </p>
        <div className="w-full max-w-[35rem] self-center">
          <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
            {formMessage && (
              <div className="text-center text-lg py-2 mb-3 text-black font-bold">
                {formMessage}
              </div>
            )}
            <input
              type="text"
              placeholder="Name"
              aria-label="Enter your name"
              required
              name="user_name"
              className="border border-black indent-2 bg-[#e9e9e961] focus:bg-[#ebebebcc] py-1 placeholder:text-black"
            />
            <input
              type="email"
              placeholder="Email"
              aria-label="Enter your email"
              required
              name="user_email"
              className=" border border-black indent-2 py-1 bg-[#e9e9e961] placeholder:text-black focus:bg-[#ebebebcc]"
            />
            <textarea
              aria-label="Enter your message"
              placeholder="Message"
              required
              name="message"
              className="resize-none border border-black bg-[#e9e9e961] indent-2 py-1 placeholder:text-black focus:bg-[#ebebebcc]"
            ></textarea>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Link href="https://github.com/Voorgo" passHref>
                  <a target="_blank" aria-label="Github">
                    <i className="devicon-github-original colored text-4xl"></i>
                  </a>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/%C8%99erban-c%C4%83t%C4%83lin-785397214/"
                  passHref
                >
                  <a aria-label="Linkedin">
                    <i className="devicon-linkedin-plain colored text-4xl"></i>
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  aria-label="Send message"
                  className="text-xl font-semibold sendButton"
                  value="Send"
                >
                  Send
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
        <div className="relative before:content-['</'] after:content-['>'] text-3xl font-semibold left-0 md:-left-6">
          Contact
        </div>
      </div>
    </section>
  );
};

export default Contact;
