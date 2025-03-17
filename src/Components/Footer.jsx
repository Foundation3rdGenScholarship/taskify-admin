
import React from "react";
import TaskifyVertical from "../assets/TaskifyVertical.png";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Component } from "react";
import { Link } from "react-router";

export default function Footer() {
  const Website = [
    {
      id: 1,
      name: "OUR WEBSITE",
      colortxt: "text-secondary",
      font: "font-medium",
    },
    {
      id: 2,
      name: "Home",
      path: "/",
      underline: "hover:underline",
      colortxt: "text-white",
      hovering: "hover:text-secondary",
    },
    {
      id: 3,
      name: "Our Mentor",
      path: "/aboutus",
      underline: "hover:underline",
      colortxt: "text-white",
      hovering: "hover:text-secondary",
    },
    {
      id: 4,
      name: "Team Member",
      path: "/aboutus",
      underline: "hover:underline",
      colortxt: "text-white",
      hovering: "hover:text-secondary",
    },
  ];

  const Info = [
    {
      id: 1,
      name: "LEGAL INFORMATION",
      colortxt: "text-secondary",
      font: "font-medium",
    },
    {
      id: 2,
      name: "Privacy Policy",
      path: "/aboutus",
      underline: "hover:underline",
      colortxt: "text-white",
      hovering: "hover:text-secondary",
    },
    {
      id: 3,
      name: "Terms and Conditions",
      path: "/aboutus",
      underline: "hover:underline",
      colortxt: "text-white",
      hovering: "hover:text-secondary",
    },
    {
      id: 4,
      name: "Sponsors",
      path: "/aboutus",
      underline: "hover:underline",
      colortxt: "text-white",
      hovering: "hover:text-secondary",
    },
  ];

  return (
    <footer className="w-full py-6 bg-primary min-w-80">
      <div className="flex flex-col w-4/5 gap-6 py-6 m-auto mx-auto text-white flex-colw-4/5 md:flex-row">
      <div className="flex justify-center">
    </div>
        {/* Logo & Description */}
        <div className="text-center md:text-left md:w-1/3">
          <img
            src={TaskifyVertical}
            style={{ width: "150px", height: "150px" }}
            alt=""
            className="w-24 h-24 mx-auto md:w-36 md:h-36 md:mx-0"
          />
        </div>

        {/* Links & Subscription */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 md:w-2/3">
          {/* Website Links */}
          <div>
            <ul className="flex flex-col space-y-2">
              {Website.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className={`${item.colortxt} ${item.underline} ${item.hovering} ${item.font} font-family no-underline`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <ul className="flex flex-col space-y-2">
              {Info.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className={`${item.colortxt} ${item.underline} ${item.hovering} ${item.font} font-family no-underline`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

{/* Subscription/Contact */}
          <div className="w-full max-w-md mx-auto sm:mx-0">
            <p className="text-sm font-semibold sm:text-base text-secondary">
              For More Information
            </p>
            <input
              type="text"
              placeholder="Write text here..."
              className="w-full text-[14px] sm:text-[16px] p-2 sm:p-3 mt-2 text-gray-600 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 md:max-w-[250px]"
              aria-label="Enter your message"
            />
          </div>
        </div>
      </div>
      
      <div className="w-full h-[1px] bg-secondary my-4"></div>
      <div className="items-center justify-between w-4/5 m-auto sm:flex">
        <div className="mt-4 text-white text-[12px] sm:mt-0">
          &copy;2025 TASKIFY™. All right reserved.
        </div>
        <div className="flex justify-center mt-6 sm:mt-0 sm:justify-start">
          <ul className="flex items-center space-x-4 sm:space-x-6">
            <li className="flex items-center justify-center text-white hover:text-secondary">
              <a href="#">
                <FaFacebook className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
            </li>

            <li className="flex items-center justify-center text-white hover:text-secondary">
              <a href="#">
                <FaTelegram className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
            </li>

            <li className="flex items-center justify-center text-white hover:text-secondary">
              <a href="#">
                <FaGithub className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

