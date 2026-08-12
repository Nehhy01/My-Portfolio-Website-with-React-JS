import { socials } from "../../data/contact";
import React from "react";

const socialsJSX = socials.map((social) => (
  <div> <link
    key={social.alt}
    className={`p-1 rounded-sm ${social.style}`}
    href={social.url}
  />
    {React.createElement(social.src, {
      className: `w-5 h-5 ${social.iconStyle}`,
    })}
  </div>
));

export default function Footer() {
  return (
    <footer className="relative bg-gray-950/90 overflow-hidden py-20">
      <div className=" z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* <!-- Logo and Texts --> */}

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Nehhy.dev
            </h2>
            <p className=" text-blue-100 leading-relaxed">
              Motivated Web developer with growing experience in building
              responsive websites and web apps using modern JavaScript tools. I
              enjoy learning, experimenting, and improving code quality.
            </p>

            <div></div>
            <div className="flex gap-3 text-blue-900   ">{socialsJSX}</div>
          </div>

          {/* <!-- Quick links --> */}
          <div></div>

          {/* <!-- Services --> */}
          <div></div>

          {/* <!-- right reserved --> */}
          <div className=" px-6 py-3 mb-3 inset-x-0  border-t border-blue-950/70 text-blue-400/50 text-xs absolute bottom-0  ">
            @2026 Nehhy. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
