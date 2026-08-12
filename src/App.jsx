import { useState } from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contacts from "./components/sections/Contacts";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Experience />
      <Projects />
      <Contacts />

    </div>
  );
}

export default App;
