import react from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import heroImg from "../../assets/images/hero1.png"

export default function Hero() {
//   react.useEffect(() => 
//     { async () => {
//     await nextTick();

//     AOS.init({
//       duration: 800,
//       once: false,
//       offset: 100,
//       easing: "ease-in-out",
//     });

//     setTimeout(() => {
//       loading.value = false;
//     }, 800);
//   }


// }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
          {/* Hero Texts */}
          <div className="flex flex-col md:mt-0 mt-20 justify-center">
            <div className="text-white lg:text-left" data-aoss="fade-right">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Hi, I'm
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                  Nehhy
                </span>
                ✌️
              </h1>
              <p
                className="text-blue-200 font-medium text-lg md:text-xl mt-3"
                data-aoss="fade-right"
                data-aoss-delay="100"
              >
                Frontend Developer & Graphic Artist
              </p>
            </div>
            <p
              className="text-gray-300 pt-6 text-center lg:text-left mx-auto max-w-xl"
              data-aoss="fade-right"
              data-aoss-delay="200"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium officiis ex eligendi incidunt ratione aliquid
              doloremque porro odit rerum earum!
            </p>
            <div
              className="flex items-center gap-4 pt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
              data-aoss="fade-up"
              data-aoss-delay="300"
            >
              <button className="flex group w-full overflow-hidden hover:from-blue-400 hover:to-sky-600 transition ease-in duration-150 items-center justify-center bg-linear-to-r sm:w-max from-blue-800 relative to-cyan-400 px-8 py-4 md:px-8 rounded-xl cursor-pointer">
                <span className="relative flex items-center justify-center text-white font-semibold text-lg">
                  Contact me
                  <ArrowRightIcon className="text-white ml-2 w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
                  
                </span>
              </button>

              <button className="border-2 border-blue-400 px-8 py-4 md:px-8 rounded-xl relative flex w-full sm:w-max items-center justify-center group text-sky-400 cursor-pointer">
                <div className="flex items-center justify-center relative">
                  <ArrowDownTrayIcon className="w-5 h-5 group-hover:translate-y-1 transition-all" />
                  <span className="pl-3 font-semibold text-lg">
                    Download CV
                  </span>
                </div>
              </button>
            </div>

            <div
              className="flex mt-15 items-center gap-6 justify-center lg:justify-start"
              data-aoss="fade-up"
              data-aoss-delay="400"
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
                className="relative z-10 bg-linear-to-r  from-blue-600 to-cyan-600 shadow-2xl rounded-[50%_40%_30%_60%/60%_30%_70%_30%] p-4 backdrop-blur-sm border border-blue-400/30 -tanslate-y-6"
                data-aoss="zoom-in"
                data-aoss-delay="500"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={heroImg}
                    loading="lazy"
                    className="object-cover w-150 h-150 -translate-y-8"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute -top-2 right-1 w-10 h-10 bg-blue-400 rounded-full blur-sm animate-pulse "></div>
            </div>
          </div>
          {/* <!-- Hero Image don finish  --> */}
        </div>
      </div>
    </section>
  );
}
