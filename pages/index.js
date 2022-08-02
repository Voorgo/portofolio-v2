import React, { useEffect, useState } from "react";
import { SEO, NavBar, Hero, About, Projects } from "../components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.to(".home", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top+=10% 90%",
        end: "+=1",
        scrub: 1,
      },
      color: "#fff",
      backgroundColor: "#2c2c2c",
    });

    gsap.utils.toArray(".project-description").forEach((description) => {
      gsap.fromTo(
        description,
        {
          y: window.innerWidth < 768 ? "-20%" : "30%",
        },
        {
          scrollTrigger: {
            trigger: description,
            start: "top 90%",
            end: "bottom top",
            scrub: true,
          },
          y: window.innerWidth < 768 ? "-40%" : "-30%",
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <SEO />
      <NavBar />
      <main>
        <div className="home">
          <Hero />
          <About />
          <Projects />
        </div>
      </main>
    </>
  );
}
