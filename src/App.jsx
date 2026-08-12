import { useState, useEffect } from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contacts from "./components/sections/Contacts";
import Footer from "./components/sections/Footer";
import { ArrowUpIcon } from "@heroicons/react/16/solid";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => 
    {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });

  }, []);



  return (
    <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar />
      <Hero />

      {/* A floating button */}
      <button
        className="fixed right-6 bottom-8 p-2 bg-blue-200/30 hover:bg-blue-200 rounded-full z-50 group cursor-pointer transition-all duration-200"
        onClick={() =>
          document.querySelector("#header").scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-6 h-6 text-blue-300 group-hover:text-blue-600" />
      </button>

      <Services />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />

    </div>
  );
}

export default App;
