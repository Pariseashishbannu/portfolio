import { Suspense, lazy, useEffect } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Hero is crucial, keep eager
import GravityBackground from "./components/StarField";
import Footer from "./components/Footer";

// Lazy load heavy sections
const BentoGrid = lazy(() => import("./components/BentoGrid"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  useEffect(() => {
    // Native scroll for maximum performance
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen text-white selection:bg-white/20 relative">
        <GravityBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-white/20">Loading...</div>}>
            <BentoGrid />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>
          <Footer />
        </div>
      </div>
    </LazyMotion>
  );
}

export default App;
