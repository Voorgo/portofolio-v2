import React, { useEffect } from "react";
import {
  SEO,
  NavBar,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
} from "../components";
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

    ScrollTrigger.matchMedia({
      "(max-width: 767px)": function () {
        gsap.utils.toArray(".project-description").forEach((description) => {
          gsap.fromTo(
            description,
            {
              y: "-20%",
            },
            {
              scrollTrigger: {
                trigger: description,
                start: "top 90%",
                end: "bottom top",
                scrub: true,
              },
              y: "-40%",
            }
          );
        });
      },
      "(min-width: 768px)": function () {
        gsap.utils.toArray(".project-description").forEach((description) => {
          gsap.fromTo(
            description,
            {
              y: "30%",
            },
            {
              scrollTrigger: {
                trigger: description,
                start: "top 90%",
                end: "bottom top",
                scrub: true,
              },
              y: "-30%",
            }
          );
        });
      },
    });

    gsap.to(".home", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        scrub: true,
      },
      scaleX: 0.85,
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
