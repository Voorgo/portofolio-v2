import React from "react";
import Image from "next/image";

const Project = ({ title, name, children, buildWith, liveLink, codeLink }) => {
  return (
    <article
      className="flex w-full items-center justify-center md:pt-16 md:mb-32 project text-[#2c2c2c]"
      id="allProjects"
    >
      <div className="flex flex-col md:grid md:grid-cols-[repeat(12,_1fr)] max-w-[70rem]">
        <div className="relative self-center w-[90%] md:w-full max-w-[30rem] justify-self-start col-[1_/_9] row-[1_/_9] project-image  aspect-square brightness-75">
          <img
            className="object-cover h-full"
            src={`/${name}.png`}
            // sizes="100vw"
            // srcSet={`/${name}.png`}
            // layout="fill"
            // objectFit="cover"
            alt="Project Screenshot"
          />
        </div>
        <div className="w-full col-[5_/_13] row-[2_/_8] z-[2] project-description flex flex-col justify-start relative gap-4  ">
          <h3 className="relative top-8 text-xl font-semibold px-5 py-3 mx-8 w-max bg-yellow-300">
            {title}
          </h3>
          <div className="flex flex-col gap-6 text-xl font-medium p-10 bg-white shadow-xl">
            <div>{children}</div>
            <i className="pt-5 border-t font-normal">{buildWith}.</i>
            <div className="self-end flex gap-6 text-2xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group"
                href={codeLink}
              >
                <div className="inline-block relative overflow-hidden  after:content-['Code']  after:duration-200 after:absolute after:top-full after:left-0 group-hover:after:top-0">
                  <span className="relative block group-hover:-translate-y-full duration-200">
                    Code
                  </span>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group"
                href={liveLink}
              >
                <div className="relative overflow-hidden flex gap-1 items-center after:content-['Live_Site']  after:duration-200 after:absolute after:top-full after:left-0 group-hover:after:top-0">
                  <span className="relative block group-hover:-translate-y-full duration-200">
                    Live Site
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section className="px-[6vw] w-full pt-12 pb-12 projects">
      <div className="w-full">
        <h2 className="relative before:content-['<'] after:content-['>'] text-3xl font-semibold mb-20 md:mb-0 left-0 md:-left-6 max-w-[70rem] mx-auto">
          Projects
        </h2>
        <Project
          title="Algorithm Visualizer"
          name="algo"
          buildWith="Build with React, Tailwind CSS, React Router and TypeScript"
          liveLink="https://voorgo.github.io/Algo-Visualizer/"
          codeLink="https://github.com/Voorgo/Algo-Visualizer"
        >
          <p>
            Algo Visualizer is an interactive platform that visualizes
            algorithms from code. Sorting algorithms are used to sort a data
            structure according to a specific order relationship, such as
            numerical order or lexicographical order. Learning an algorithm gets
            much easier with visualizing it.
          </p>
        </Project>
        <Project
          title="Artismo"
          name="artismo"
          buildWith="Build with React, Tailwind CSS, React Router and Firebase"
          liveLink="https://artismo-c64dd.web.app/"
          codeLink="https://github.com/Voorgo/Artismo"
        >
          <p>
            Artismo social media app to share your random generated art with
            CRUD functionality. You can create your posts and like other
            people's posts.
          </p>
        </Project>
        <Project
          title="Nextflix Clone"
          name="netflix"
          buildWith="Build with React, Styled Components, React Router and Firebase"
          liveLink="https://netflix-react-518ab.firebaseapp.com/"
          codeLink="https://github.com/Voorgo/Netflix-clone"
        >
          <p>
            This is a clone of Netflix website built using React as a Front-end
            & Firebase as Back-end and with my own design touch. It's not a
            replica, and it doesn't have all the features of Netflix website. It
            contains the home page, sign-in page, sign-up page, and account
            page.
          </p>
        </Project>
        <Project
          title="Zone"
          name="zone"
          buildWith="Build with React, Tailwind CSS and Framer Motion"
          liveLink="https://voorgo.github.io/Zone/"
          codeLink="https://github.com/Voorgo/Zone"
        >
          <p>
            A fictional clothing shop where the user can browse through a
            catalog of apparel, search for keywords, sort by gender, and add
            items to their cart.
          </p>
        </Project>
        <div className="relative before:content-['</'] after:content-['>'] text-3xl font-semibold left-0 md:-left-6 max-w-[70rem] mx-auto">
          Projects
        </div>
      </div>
    </section>
  );
};

export default Projects;
