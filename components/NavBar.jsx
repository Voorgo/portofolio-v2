import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  let menu = useRef();
  let navRef = useRef(null);
  let layerRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    menu.current = gsap.timeline({ paused: true });
    {
      /*remove nav bar and layer flicker */
    }
    gsap.set(navRef, {
      opacity: "1",
    });

    gsap.set(layerRef, {
      opacity: "1",
    });
    {
      /*//////// */
    }
    menu.current.fromTo(
      navRef,
      {
        y: "-100%",
      },
      {
        duration: 0.2,
        y: "0%",
      }
    );
    menu.current.fromTo(
      layerRef,
      {
        autoAlpha: 0,
      },
      {
        duration: 0.2,
        autoAlpha: 1,
      }
    );
  }, []);

  useEffect(() => {
    !toggle ? menu.current.play() : menu.current.reverse();
  }, [toggle]);

  return (
    <>
      <header className="p-5 fixed w-full z-[999] isolate text-white mix-blend-difference">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-[0] z-[3] ">
            <Link href="/" passHref>
              <a aria-label="home">
                <Image src="/logo.svg" alt="logo" width="50" height="50" />
              </a>
            </Link>
          </div>
          <button
            aria-label="menu"
            onClick={handleToggle}
            className="md:hidden z-[3]"
          >
            <div
              className={`bar mb-1 ${
                !toggle
                  ? "animate-[first_0.6s_forwards]"
                  : "animate-[firstReverse_0.6s]"
              }`}
            ></div>
            <div
              className={`bar ${
                !toggle
                  ? "animate-[second_0.6s_forwards]"
                  : "animate-[secondReverse_0.6s]"
              }`}
            ></div>
            <div
              className={`bar mt-1 ${
                !toggle
                  ? "animate-[third_0.6s_forwards]"
                  : "animate-[thirdReverse_0.6s]"
              }`}
            ></div>
          </button>
          <nav className="hidden md:flex">
            <ul className="text-2xl flex gap-3">
              <Link href="/">
                <li className="cursor-pointer link-underline">Home</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer link-underline">Projects</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer link-underline">Contact</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      {/*mobile nav*/}
      <nav
        ref={(el) => (navRef = el)}
        className={`fixed z-[20]
             left-0 w-full pt-20 pb-10 top-0 flex opacity-0 items-center bg-white justify-center md:hidden`}
      >
        <ul className="text-3xl  flex flex-col gap-3">
          <Link href="/">
            <li className="cursor-pointer  overflow-hidden">
              <span
                className={`inline-block translate-y-full ${
                  !toggle
                    ? "animate-[fadeIn_forwards_0.3s_0.1s]"
                    : "translate-y-0"
                }`}
              >
                Home
              </span>
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer overflow-hidden leading-tight">
              <span
                className={`inline-block translate-y-full ${
                  !toggle
                    ? "animate-[fadeIn_forwards_0.3s_0.2s]"
                    : "translate-y-0"
                } `}
              >
                Projects
              </span>
            </li>
          </Link>
          <Link href="/">
            <li className="cursor-pointer  overflow-hidden">
              <span
                className={`inline-block translate-y-full ${
                  !toggle
                    ? "animate-[fadeIn_forwards_0.3s_0.3s]"
                    : "translate-y-0"
                }`}
              >
                Contact
              </span>
            </li>
          </Link>
        </ul>
      </nav>
      <div
        onClick={handleToggle}
        ref={(el) => (layerRef = el)}
        className={`fixed top-0 left-0 z-10 bg-[#000000c8] opacity-0 w-screen h-screen ${
          !toggle ? "block pointer-events-auto" : " pointer-events-none"
        } md:hidden`}
      ></div>
    </>
  );
};

export default NavBar;
