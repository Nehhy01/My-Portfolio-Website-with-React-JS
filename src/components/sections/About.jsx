import { aboutImage, skills, ctaButtons } from "../../data/about";
import React from 'react'
export default function About() {
  const aboutImageJSX = aboutImage.map((image, index) => 
    <div
      key={image.id}
      className="relative group"
      data-aoss={image.animation}
      data-aoss-delay={image.delay}
    >
      <div
        className={`rounded-2xl p-2 border shadow-lg ${image.gradient}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div
        className={`absolute -top-2 -right-2 text-white text-xs px-2 py-1 rounded-full font-semibold ${image.badgeColor}`}
      >
        {image.badge}
      </div>
    </div>
  );

  const skillsJSX = skills.map((skill) => 
    <div key={skill.id} className="flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        {/* ------ the icon ----- */}
        {React.createElement(skill.icon, {className: `w-6 h-6 ${skill.iconColor}`})}
        {/* --------------------- */}

        <h3 className="text-white text-lg font-bold">{skill.title}</h3>
      </div>
      <p className="text-left text-sm text-blue-100">{skill.desc}</p>
    </div>
  );

  const ctaButtonsJSX = ctaButtons.map((button) => 
    <button
      key={button.id}
      className={`px-8 py-3 rounded-xl font-semibold transition-all group duration-300 gap-2 cursor-pointer flex items-center justify-center ${button.classes}`}
    >
      {React.createElement(button.icon, {
        className: `w-6 h-6 ${button.iconClass}`,
      })}

      {button.text}
    </button>
  );

  return (
    <section
      className="relative py-20 overflow-hideen min-h-screen flex items-center"
      id="about"
    >
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14  items-center">

          {/* // GRID CHILD 1 */}
          <div className="lg:h-full flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div
                data-aoss="zoom-in"
                className="relative bg-linear-to-br from-gray-800/60 to-blue-900/40 rounded-3xl p-6 background-blur-sm border broder-blue-500/30 shadow-2xl"
              >
                <div className="grid grid-cols-2 gap-4">{aboutImageJSX}</div>

                <div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl px-6 py-3 border border-blue-400/40 shadow-xl"
                  data-aoss="fade-up"
                  data-aoss-delay="600"
                >
                  <p className="text-white text-center text-xl font-semibold capitalize">
                    3+ years of experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* // GRID CHILD 2 */}
          <div
            className="text-center flex flex-col justify-center order-1 lg:order-2 lg:text-left"
            data-aoss="fade-left"
          >
            <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              About {" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-500">
                Me
              </span>
            </h2>
            <p
              className="text-blue-200 font-medium text-lg md:text-xl mt-4"
              data-aoss="fade-left"
              data-aoss-delay="200"
            >
              A Creative Frontend Developer 
            </p>
            <p
              className="text-gray-300 pt-4 text-center lg:text-left leading-relaxed"
              data-aoss="fade-left"
              data-aoss-delay="300"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, voluptas nemo? Impedit culpa sit temporibus tenetur
              sunt perspiciatis modi dicta! Odio quis consequatur, ratione
              labore iusto cum deserunt a similique adipisci doloribus
              voluptates vel itaque alias sunt repellendus at neque dolor
              inventore quaerat et sapiente optio id perspiciatis assumenda?
              Laborum.
            </p>
            {/* my Tech Stacks */}
            <div
              className="grid grid-cols-1 justify-between sm:grid-cols-2 gap-8 pt-8"
              data-aoss="fade-up"
              data-aoss-delay="300"
            >
              {skillsJSX}
            </div>
            {/* CTA buttons */}
            <div
              className="flex gap-4 pt-10 flex-col mx-auto lg:mx-0 sm:flex-row"
              data-aoss="fade-up"
              data-aoss-delay="400"
            >
              {ctaButtonsJSX}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
