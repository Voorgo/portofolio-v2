import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  let upper = useRef(null);
  let lower = useRef(null);
  let line = useRef(null);
  let path = useRef(null);
  let hero = useRef(null);
  let textAnimation = useRef();

  useEffect(() => {
    textAnimation.current = gsap.timeline({ delay: 0.7 });
    textAnimation.current.set(hero, {
      opacity: 1,
    });

    textAnimation.current.fromTo(
      line,
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
      }
    );

    textAnimation.current.fromTo(
      upper,
      {
        duration: 0.75,
        y: "100%",
      },
      {
        y: 0,
      }
    );
    textAnimation.current.fromTo(
      lower,
      {
        duration: 0.75,
        y: "-100%",
      },
      {
        y: 0,
      }
    );

    textAnimation.current.fromTo(
      path,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  }, []);

  return (
    <section
      className="w-full px-[6vw] pt-28 pb-20 opacity-0"
      ref={(el) => (hero = el)}
    >
      <div className="w-full max-w-[70rem] mx-auto text-[#2C2C2C] flex justify-center">
        <h1 className="flex flex-col text-left relative w-max md:w-full">
          <figure className="absolute w-[45vw] top-[14%] h-full md:w-[35vw] lg:w-[25vw] 3xl:w-[640px]">
            <Image
              src="/background.svg"
              srcSet="/background.svg"
              sizes="100vw"
              alt="triangle"
              layout="fill"
              objectFit="contain"
              priority="true"
            />
          </figure>
          <div className="overflow-hidden w-full font-semibold text-[9vw] md:text-[7vw] lg:text-[4vw] 3xl:text-[7rem] ">
            <div ref={(el) => (upper = el)} className="w-full block">
              Hi, I'm <span className="text-[#670AC5]">Cătălin</span>
            </div>
          </div>
          <div
            ref={(el) => (line = el)}
            className="w-[70vw] h-[3px] bg-[#2c2c2c] inline-block md:w-[55vw] lg:w-[35vw] relative 3xl:w-[850px]"
          >
            <figure className="absolute right-0 -top-[1.3rem] md:-top-[2.2rem] -z-10">
              <svg
                width="30"
                height="47"
                viewBox="0 0 45 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[55px] md:h-[73px]"
              >
                <path
                  ref={(el) => (path = el)}
                  d="M15.7383 20.1831L31.9095 5.00001L41.3923 59.1943L1.30112 48.3694"
                  stroke="#D5D394"
                  strokeWidth="5"
                />
              </svg>
            </figure>
          </div>
          <div className="overflow-hidden w-full inline-block font-semibold text-[9vw] md:text-[7vw] lg:text-[4vw] 3xl:text-[7rem]">
            <div ref={(el) => (lower = el)}>
              <div>A Front-End </div>
              <div>Web Developer</div>
            </div>
          </div>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
