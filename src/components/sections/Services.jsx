import { useState, createElement } from "react";
import {ChatBubbleLeftRightIcon,ArrowRightIcon} from "@heroicons/react/16/solid";
import { data } from "../../data/services";

export default function Services() {
  const [services, setServices] = useState(data);

  const servicesJSX = services.map((service, index) =>  <div
      key={service.id}
        data-aoss="'fade-in'"
        data-aoss-delay="index * 100 + 100"
      className="group relativep-8 rounded-2xl bg-linear-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all p-6 duration-500 hover:transform hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 duration-0 transition-opacity group-hover:opacity-100"></div>
      <div className="relative z-10 mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
        
        {createElement(service.icon, {className:"w-8 h-8 text-blue-400"})}

        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {service.name}
        </h3>
        <p className="text-xl text-blue-100 leading-relaxed">{service.desc}</p>
      </div>
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <ArrowRightIcon className="'w-6 h-6 text-cyan-400" />
      </div>
    </div>
  );

  return (
    <section className="relative py-20 overflow-hidden" id="services">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center m-16" data-aosss="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My {" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
            Services
            </span>
          </h2>
          <p
            className="text-blue-200 text-lg max-w-2xl mx-auto"
            data-aoss="fade-up"
            data-aoss-delay="100"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            porro? adipisicing elit. Vero, porro.
          </p>
        </div>

        {/* <!-- Services Cards go here --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          { servicesJSX}
        </div>

        <div
          className="text-center mt-16"
          data-aoss="fade-up"
          data-aoss-dalay="800"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button className="px-8 py-4 group rounded-xl border-2 cursor-pointer border-blue-400 text-blue-400 font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center">
              Get in touch{" "}
              <ChatBubbleLeftRightIcon className="group-hover:translate-x-1 transition-all duration-150  w-5 h-5 ml-2" />{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
