import { useState } from "react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = [
    { name: "Services", href: "#services" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const menuJSX = menu.map((item) => {
    return (
      <li key={item.name} className="group relative">
        <a
          href={item.href}
          className="relative block text-blue-100 hover:text-blue-400 transition-all duration-300 text md:text-base"
            // onClick={scrollToSection(item.href)}
        >
          {item.name}
          <span className="absolute bottom-0 left-0 bg-blue-400 w-0 h-0.5  hover:text-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    );
  });

  const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
      section.scrollInView({ behavior: "smooth" });
    }
  };


  // My HTML started here

  return (

    // My Logo is here
    <header className="flex justify-between item-center p-6 bg-opacity-50 relative z-20">
      <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Nehhy <span className="font-black">Portfolio </span>
      </div>

      {/* The Harmburger Menu */}

      <div className="md:hidden z-30">
        <button
          className="block focus:outline-none p-2 rounded-lg bg-blue-800/50 cursor-pointer hover:bg-blue-700/50 transition-all duration-250"
          onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300 ${isMenuOpen ? "rotate-45 top-3" : "top-1"}`}
            ></span>
            <span
              className={`absolute inset-0 w-6 top-3 bottom-4.5 h-0.5 bg-blue-200 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "top-3 opacity-100"}  `}
            ></span>
            <span
              className="absolute left-0 bottom-0 w-6 h-0.5 bg-blue-200 transition-all duration-300"
              className={`absolute left-0 bottom-0 w-6 h-0.5 bg-blue-200 transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-3" : "top-5"}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Navigation Body */}
      <nav
        className={`fixed inset-0 z-20 flex flex-col items-center justify-center  bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row ${isMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          {menuJSX}
        </ul>
        <div className="mt-8 md:mt-0 md:ml-8">
          <button className="cursor-pointer text-sky-100 font-medium px-6 py-2 bg-linear-to-r from-blue-600 to-cyan-400 rounded-full">
            Let's Talk
          </button>
        </div>
      </nav>


    </header>
  );
}
