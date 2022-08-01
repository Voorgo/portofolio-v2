import React, { useEffect } from "react";
import { SEO, NavBar, Hero, About, Projects } from "../components";
import { gsap } from "gsap";

export default function Home() {
  return (
    <>
      <SEO />
      <NavBar />
      <main>
        <div>
          <Hero />
          <About />
          <Projects />
        </div>
      </main>
    </>
  );
}
