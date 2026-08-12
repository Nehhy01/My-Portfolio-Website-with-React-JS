import React from "react";
import { contactInfo, socials } from "../../data/contact";

export default function Contacts() {
  function sendAsMail(formData) {}

  const contactInfoJSX = contactInfo.map((contact, index) => (
    <div
      key={contact.id}
      data-aoss="fade-right"
      data-aoss-delay={index * 100}
      className="flex items-center gap-4"
    >
      {React.createElement(contact.icon, {
        className: "w-6 h-6 text-blue-300",
      })}
      <div>
        <h4 className="text-lg font-semibold text-white">{contact.category}</h4>
        <p className="text-blue-200">{contact.address}</p>
      </div>
    </div>
  ));

  const socialsJSX = socials.map((social) => (
    <div> <link
      key={social.alt}
      className={`p-1 rounded-sm ${social.style}`}
      href={social.url}
    />
      {React.createElement(social.src, {
        className: `transition-all duration-200 ${social.iconStyle}`,
      })}
    </div>
  ));

  return (
    <section className="overflow-hidden relative py-20" id="contact">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Heading Here --> */}
        <div className="text-center mb-22" data-aoss="fade-up">
          <h2 className="text-white text-4xl md:text-5xl mb-3 font-bold">
            Get in {" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-600">
              Touch
            </span>
          </h2>
          <p className="text-blue-100 text-xl font-semibold">
            Let's work together on your next project
          </p>
        </div>
        {/* ---------- */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* <!-- contact infos --> */}
          <div className="flex ml-10 gap-8 flex-col" data-aoss="fade-right">
            <h3 className="text-2xl text-white font-bold">
              Contact Information
            </h3>
            <div className="flex flex-col gap-6">{contactInfoJSX}</div>

            {/* <!-- Follow me --> */}
            <div className="mt-4">
              <h3 className="text-2xl text-white font-bold mb-5">Follow Me</h3>
              <div className="flex gap-3 text-blue-400">{socialsJSX}</div>
            </div>
          </div>

          {/* <!-- contact form --> */}

          <div className="col-span-2">
            <form
              className="flex flex-col gap-6 mt-10 lg:mt-0"
              action={sendAsMail}
              data-aoss="fade-left"
            >
              {/* <!-- form Column --> */}

              <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col w-full">
                  <label className="label" htmlFor="name">
                    Name
                  </label>
                  <input id="name" type="text" className="input-field" />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    className="label"
                    htmlFor="email"
                  >
                    Email
                  </label> 
                  <input id="email" type="email" className="input-field" />
                </div>
              </div>

              {/* <!-- form Column --> */}
              <div className="flex flex-col w-full">
                <label className="label" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="input-field"
                  placeholder=""
                />
              </div>

              {/* <!-- form Column --> */}
              <div className="flex flex-col w-full">
                <label className="label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  type="text"
                  className="input-field"
                  placeholder="What do you wanna discuss 'bout?"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 px-4 py-4 font-bold text-white text-lg rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
