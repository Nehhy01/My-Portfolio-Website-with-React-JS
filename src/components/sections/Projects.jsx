import React from "react";
import { projects } from "../../data/projects";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/16/solid";

export default function Projects() {
  const projectsJSX = projects.map((project, index) => (
    <div
      key={project.id}
      className={`group relative bg-linear-to-br from-gray-800/50 to-blue-900/30 rounded-3xl overflow-hidden border background-blur-sm hover:boder-blue-400/40 transition-all duration-500 hover:transform hover:-translate-y-2 ${project.borderColor}`}
      data-aoss="fade-up"
      data-aoss-delay={(index + 1) * 100}
    >
      {/* <!-- Project Image --> */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 text-white text-xs rounded-full font-semibold ${project.badgeColor}`}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* <!-- Project Content --> */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-blue-200 mt-2 mb-4 leading-tight">{project.desc}</p>

        {/* <!-- Technologies used --> */}

        <div className="flex gap-3 flex-wrap mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className={`py-1 px-3 rounded border text-white ${tech.class}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
        {/* <!-- ------------------- --> */}

        {/* <!-- Project links --> */}
        <div className="flex gap-5">
          {project.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`flex items-center gap-1 transition-colors duration-300 text-sm font-medium ${link.class}`}
            >
              {React.createElement(link.icon, { className: "w-4 h-4" })}
              {link.name}
            </a>
          ))}
        </div>
      </div>
      {/* <!-- ------------------- --> */}
    </div>
  ));

  return (
    <section className="relative py-20 overflow-hidden" id="projects">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Section-Header --> */}
        <div className="text-center mb-16" data-aoss="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
              Projects
            </span>
          </h2>
          <p className="text-lg font-semibold text-blue-200 mx-auto max-w-2xl">
            A collection of my recent works and creative solutions
          </p>
        </div>

        {/* <!-- Project Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsJSX}
        </div>
        {/* <!-----END OF A SINGLE PROJECT GRID----- --> */}

        {/* <!-- CTA Section --> */}
        <div className="text-center mt-16" data-aoss="fade-up">
          <div className="flex flex-col w-full sm:flex-row gap-4 items-center justify-center">
            <button className=" cursor-pointer px-8 py-4 rounded-xl bg-linear-to-r group from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center">
              View All Projects{" "}
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" />{" "}
            </button>

            <button className="relative overflow-hidden cursor-pointer px-8 py-4 rounded-xl border border-blue-400 text-blue-200 font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center">
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-all duration-300" />{" "}
              Discuss Projects{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
