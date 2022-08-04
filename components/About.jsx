import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Skill = ({ icon, name }) => {
  return (
    <div className="w-28 flex flex-[0_0_7rem] border py-1 mr-12 px-3 flex-col gap-2 text-center rounded md:py-2 md:px-5">
      <i className={`${icon} colored text-4xl md:text-6xl`}></i>
      <p className="text-sm">{name}</p>
    </div>
  );
};

const Skills = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay({ delay: 2000 }, (emblaRoot) => emblaRoot.parentElement)]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="w-full px-8 relative">
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex  select-none cursor-grab">
          <Skill icon="devicon-javascript-plain" name="JavaScript" />
          <Skill icon="devicon-react-original" name="React" />
          <Skill icon="devicon-nextjs-line" name="NextJs" />
          <Skill icon="devicon-sass-original" name="SASS" />
          <Skill icon="devicon-tailwindcss-plain" name="Tailwind" />
          <Skill icon="devicon-jest-plain" name="Jest" />
          <Skill icon="devicon-firebase-plain" name="Firebase" />
          <Skill icon="devicon-git-plain" name="Git" />
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2"
        aria-label="Scroll Prev"
        onClick={scrollPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2"
        aria-label="Scroll Next"
        onClick={scrollNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const About = () => {
  return (
    <section className="px-[6vw]">
      <div className="max-w-[70rem] mx-auto pt-14 flex flex-col gap-10  relative before:absolute before:content-[''] before:w-full before:h-[1px] rounded before:bg-[#2c2c2c] before:left-0 before:top-0">
        <h2 className="relative before:content-['<'] after:content-['>'] text-3xl font-semibold left-0 md:-left-6">
          About
        </h2>
        <div className="flex flex-col gap-5 font-medium text-lg">
          <p>Hi there! I'm Cătălin, a front-end dev.</p>
          <i className="font-normal">
            Growing up I developed a passion for everything tech related. Being
            a driven and solution-oriented person, I always aimed to find new
            ways to get to the bottom of challenges. Curiosity and passion were
            some of the forces that helped me developed problem-solving skills.
          </i>
          <p>
            I'm fascinated by everything web development means, I enjoy creating
            new experiences for users and bringing designs to life using
            animations. My aim is to develop my aptitudes and enlarge my realm
            of knowledge with every task and project, as well as better myself
            as an employee in the progress.
          </p>
          <p>
            I work with <span className="font-semibold">JavaScript</span>,{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Tailwind</span>,{" "}
            <span className="font-semibold">SASS</span> and{" "}
            <span className="font-semibold">Firebase</span> to deliver front-end
            products. And i look forward to learn more about backend and others
            technologies.
          </p>
          <p>Here are a few technologies I've been working with:</p>
          <Skills />
        </div>
        <div className="relative before:content-['</'] after:content-['>'] text-3xl font-semibold left-0 md:-left-6">
          About
        </div>
      </div>
    </section>
  );
};

export default About;
