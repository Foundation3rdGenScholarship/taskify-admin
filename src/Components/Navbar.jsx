import React, { useState, useEffect } from "react";
import { faSun, faMoon, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import TaskifyLogo from "../assets/TaskifyLogo1.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  console.log(darkMode);
  console.log(localStorage);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      console.log(document);
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  console.log(document);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center h-[86px] bg-primary text-white px-4 min-w-80 sticky top-0 z-10">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        {/* Logo */}
        <div>
          <img src={TaskifyLogo} className="w-[175px]" alt="Logo" />
        </div>

        {/* Desktop Buttons */}
        <div className={`hidden gap-4 sm:flex flex-col sm:flex-row`}>
          <button className="px-4 py-2 bg-white border rounded text-primary hover:text-secondary">
            Create Account
          </button>
          <button className="px-4 py-2 font-medium transition-all duration-500 bg-white border rounded-full text-primary hover:bg-secondary text-txt16 ">
            Go to Dashboard
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex gap-10 sm:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 bg-secondary flex items-center justify-between gap-x-5 border border-white rounded-3xl w-20 relative overflow-hidden"
          >
            <motion.div
              layout
              animate={{ x: darkMode ? 40 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FontAwesomeIcon icon={faSun} />
            </motion.div>

            <motion.div
              layout
              animate={{ x: darkMode ? -40 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FontAwesomeIcon icon={faMoon} />
            </motion.div>
          </button>
          <button className="text-2xl text-white" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"} {/* Changes icon when open/closed */}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-[86px] left-0 w-full bg-primary flex flex-col items-center py-4 sm:hidden">
          <button className="px-4 py-2 my-1 transition-all duration-500 ease-in-out bg-white border rounded text-primary hover:bg-secondary">
            Create Account
          </button>
          <button className="px-4 my-1 transition-all duration-500 ease-in-out bg-white border rounded h-[38px] text-primary hover:bg-secondary">
            Login your account
          </button>
        </div>
      )}
    </div>
  );
}
