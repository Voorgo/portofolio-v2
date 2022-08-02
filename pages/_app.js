import "../styles/globals.css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      direction: "vertical",
    });
    function raf() {
      lenis.raf();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
