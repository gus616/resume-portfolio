
import About from "@/components/About";
import Companies from "@/components/Companies";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import GithubCard from "@/components/Github";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { useState } from "react";

export default function Home() {
  const [cyberMode, setCyberMode] = useState(false);
  return (
    <main>
      <Navbar cyberMode={cyberMode} setCyberMode={setCyberMode} />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Companies />
      <GithubCard />
      <Education />
      <Contact />
    </main>
  );
}
