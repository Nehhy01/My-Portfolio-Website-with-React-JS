import react from "react";
import { ArrowDownTrayIcon, ArrowRightIcon, ArrowUpIcon } from "@heroicons/react/16/solid";

import heroImg from "../../assets/images/hero3.png"
// import CV from '../../data/ola_nehemiah_CV.pdf'

export default function Hero() {

function toContact() {
  const contact = document.querySelector("#contact")
  contact.scrollIntoView({behavior: 'smooth'})
  
}
const handledownloadCV = (event) => {
  event.preventDefault()
  const link = document.createElement('a')
  link.href = '/Ola_Nehemiah_CV.pdf'
  link.download = 'Ola_Nehemiah_CV.pdf'
  link.click()
}
  return (
    <>
    <section id="hero" className="relative mt-10 min-h-screen w-full overflow-hidden flex items-center z-10">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">

          {/* Hero Texts */}
          <div className="flex flex-col md:mt-0 mt-20 justify-center">
            <div className="text-white text-center lg:text-left" data-aos="fade-right">
              <h1 className="font-bold text-4xl lg:text-5xl leading-tight">
                Hi, I'm {" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                  Nehhy
                </span>
                ✌️
              </h1>
              <p
                className="text-blue-200 font-medium text-lg md:text-xl mt-3"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                A Creative Frontend Developer 
              </p>
            </div>
            <p
              className="text-gray-300 pt-6 text-center lg:text-left mx-auto max-w-xl"
              data-aos="fade-right"
              data-aos-delay="200"
            >
             I don't just build web apps, i build solutions and solve the globe's problem, one app at a time.
            </p>
            <div
              className="flex items-center gap-4 pt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button className="flex group w-full overflow-hidden hover:from-blue-400 hover:to-sky-600 transition ease-in duration-150 items-center justify-center bg-linear-to-r sm:w-max from-blue-800 relative to-cyan-400 px-8 py-4 md:px-8 rounded-xl cursor-pointer" onClick={toContact}>
                <span className="relative flex items-center justify-center text-white font-semibold text-lg">
                  Contact me
                  <ArrowRightIcon className="text-white ml-2 w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
                  
                </span>
              </button>

              <a className="border-2 border-blue-400 px-8 py-4 md:px-8 rounded-xl relative flex w-full sm:w-max items-center justify-center group text-sky-400 cursor-pointer" href="/Ola_Nehemiah_CV.pdf" onClick={handledownloadCV}>
                <div className="flex items-center justify-center relative">
                  <ArrowDownTrayIcon className="w-5 h-5 group-hover:translate-y-1 transition-all duration-200" />
                  <span className="pl-3 font-semibold text-lg">
                    Download CV 
                  </span>
                </div>
              </a>
            </div>

            <div
              className="flex mt-15 items-center gap-6 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <p className="text-blue-400 text-3xl font-bold">50+</p>
                <p className="text-white text-sm">Projects</p>
              </div>
              <div>
                <p className="text-blue-400 text-3xl font-bold">3+</p>
                <p className="text-white text-sm">Years</p>
              </div>
              <div>
                <p className="text-blue-400 text-3xl font-bold">20+</p>
                <p className="text-white text-sm">Clients</p>
              </div>
            </div>
          </div>
          {/* <!-- Hero-text Finish --> */}

          {/* <!-- Hero Image --> */}
          <div className="lg:h-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div
                className="mt-10 lg:mt-0 relative z-10 bg-linear-to-r  from-blue-600 to-cyan-600 shadow-2xl rounded-[50%_40%_30%_60%/60%_30%_70%_30%] p-4 backdrop-blur-sm border border-blue-400/30 -translate-y-6"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={heroImg}
                    loading="lazy"
                    className="object-cover w-150 h-150 -translate-y-6"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute -top-2 right-1 w-10 h-10 bg-blue-400 rounded-full blur-sm animate-pulse "></div>
            </div>
          </div>
          {/* <!-- Hero Image don finish  --> */}
        </div>
        <div id="hero-end-sentinel" className="absolute bottom-0 left-0 w-full h-1 pointer-events-none" />
      </div>
    </section>
    
     
    </>
  );
}
