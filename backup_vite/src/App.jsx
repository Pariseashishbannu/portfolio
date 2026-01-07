import React, { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));

function App() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="text-white text-center py-20">Loading...</div>}>
          <Skills />
          <Experience />
          <Projects />
        </Suspense>
        <Footer />
      </div>
    </main>
  );
}

export default App;
