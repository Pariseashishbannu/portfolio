import { Hero } from "@/components/sections/hero";
import { Education } from "@/components/sections/education";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Education />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
