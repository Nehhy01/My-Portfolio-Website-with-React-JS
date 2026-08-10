import { skills, experience, techStack } from "../../data/experience";
import React from "react";

import {
  ArchiveBoxArrowDownIcon,
  Squares2X2Icon,
  BriefcaseIcon,
} from "@heroicons/react/16/solid";

export default function Experience() {
  const techJSX = techStack.map((tech, index) => (
    <span
      key={tech}
      data-aoss="fade-left"
      data-aoss-delay={100 * index}
      className="px-4 py-2 bg-linear-to-r from-blue-500/40 rounded-full text-white border text-sm border-blue-400/30 font-medium hover:scale-105 transition-all duration-300"
    >
      {tech}
    </span>
  ));

  const skillsJSX = skills.map((skill) => (
    <div key={skill.id} className="group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-blue-200 font-semibold flex items-center gap-2">
          {React.createElement(skill.icon, {
            className: `w-5 h-5 ${skill.iconColor}`,
          })}
          {skill.title}
        </span>

        <span className={skill.percentageColor}>{skill.percentage}</span>
      </div>

      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`group-hover:scale-105 transition-all duration-500 h-full rounded-full overflow-hidden ${skill.gradient}`}
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  ));

  const experienceJSX = experience.map((exp) => (
    <div
      key={exp.id}
      className={`relative pl-6 border-l-2 group ${exp.borderColor}`}
    >
      <div
        className={`absolute top-0 -left-2 w-4 h-4 rounded-full group-hover:scale-150 transition-all duration-300 ${exp.dotColor}`}
      ></div>
      <div
        className={`bg-linear-to-br from-gray-800/50 to-blue-900/30 rounded-2xl p-6 border backdrop-blur-sm group-hover:border-blue-400/40 transition-all duration-300 ${exp.borderClass}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h4 className="text-2xl font-semibold text-white">{exp.position}</h4>
          <span className={`mt-1 sm:mt-0 ${exp.dateColor}`}>{exp.period}</span>
        </div>
        <p className={`font-medium mb-3 ${exp.companyColor}`}>{exp.company}</p>
        <p className="text-blue-100 text-sm leading-relaxed">{exp.desc}</p>
      </div>
    </div>
  ));

  return (
    <section className="relative overflow-hidden py-20" id="skills">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aoss="fade-up">
          <h2 className="text-transparent bg-clip-text bg-linear-to-tr from-blue-500 to-cyan-500 text-4xl md:text-5xl lg:text-6xl font-bold">
            Skills <span className="text-white"> & Experience</span>
          </h2>
          <p className="text-blue-200 font-semibold mt-3 text-lg max-w-2xl mx-auto">
            My technical and professional experiences
          </p>
        </div>

        <div
          className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16"
          data-aoss="fade-right"
        >
          <div className="h-full lg:justify-between lg:py-15 lg:flex lg:flex-col">
            {/*  Technical Skills */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ArchiveBoxArrowDownIcon className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  Technical Skills
                </h3>
              </div>

              <div className="space-y-6">{skillsJSX}</div>
            </div>

            {/*  Tech Stacks   */}
            <div className="mt-12" data-aoss="fade-left">
              <h4
                className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
                data-aoss-delay="100"
              >
                <Squares2X2Icon className="w-6 h-6 text-cyan-400" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">{techJSX}</div>
            </div>
          </div>

          {/* <!-- Work Experience --> */}

          <div data-aoss="fade-left" className="mt-12 lg:mt-0">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <BriefcaseIcon className="w-6 h-6 text-cyan-400" /> Work
              Experience
            </h3>

            <div className="space-y-8">

                {experienceJSX }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
