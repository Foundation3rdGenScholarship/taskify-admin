import React, { useState, useEffect } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import TaskifyLogo from "../assets/TaskifyLogo1.png";
import pengseang from "../assets/pengseang.png";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { getAceAccessToken } from "../lib/secureLocalStorage";

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

  //get me
  const [narMe, setNavMe] = useState({});
  const [name, setName] = useState("");
  const { data } = useGetMeQuery();

  useEffect(() => {
    if (data) {
      setNavMe(data);
    }
  }, [data]);

  useEffect(() => {
    if (narMe?.family_name && narMe?.given_name) {
      const firstLetter1 = narMe.family_name.charAt(0).toUpperCase();
      const firstLetter2 = narMe.given_name.charAt(0).toUpperCase();
      setName(`${firstLetter1}${firstLetter2}`);
    }
  }, [narMe]);

  console.log(name);

  return (
    <div className="flex items-center h-[86px] bg-primary text-white px-4 min-w-80 sticky top-0 z-10">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        {/* Logo */}
        <div>
          <img src={TaskifyLogo} className="w-[175px] z-9" alt="Logo" />
        </div>

        {/* Desktop Buttons */}
        <div className={`hidden gap-4 sm:flex flex-col sm:flex-row`}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative flex items-center justify-center px-1.5 overflow-hidden bg-white border border-white rounded-full"
          >
            <motion.div
              key={darkMode ? "moon" : "sun"} // Ensure smooth transition when toggling
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {darkMode ? (
                <BsMoonStarsFill size={30} color="gray" />
              ) : (
                <IoIosSunny size={30} color="gold" />
              )}
            </motion.div>
          </button>
          <Link to="/register">
            <button className="px-4 py-2 font-medium transition-all duration-500 bg-white border rounded-full text-primary hover:bg-secondary text-txt16">
              Create Account
            </button>
          </Link>
          <div className="flex items-center justify-center">
            {getAceAccessToken() && name && (
              <div className="flex items-center bg-white rounded-full w-[43.6px] h-[41.6px] justify-center">
                <Link to="/userpf" className="flex items-center justify-center">
                  <h1 className="flex font-bold align-middle text-primary text-txt20">
                    {name}
                  </h1>
                </Link>
              </div>
            )}
            {!getAceAccessToken() && !name && (
              <Link
                to="login"
                className="px-4 py-2 font-medium transition-all duration-500 bg-white border rounded-full text-primary hover:bg-secondary text-txt16"
                
              >
                Login your account
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex gap-10 sm:hidden">
          <button className="text-2xl text-white" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"} {/* Changes icon when open/closed */}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-[86px] left-0 w-full bg-primary flex flex-col items-center py-4 sm:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative flex items-center justify-center p-1.5 overflow-hidden bg-white border border-white rounded-full"
          >
            <motion.div
              key={darkMode ? "moon" : "sun"} // Ensure smooth transition when toggling
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {darkMode ? (
                <BsMoonStarsFill size={30} color="gray" />
              ) : (
                <IoIosSunny size={30} color="gold" />
              )}
            </motion.div>
          </button>
          <Link to="/register">
            <button className="px-4 py-2 my-1 transition-all duration-500 ease-in-out bg-white border rounded text-primary hover:bg-secondary">
              Create Account
            </button>
          </Link>

          {name && (
            <div>
              <Link
                to="/userpf"
                className="relative flex items-center justify-center px-1.5 overflow-hidden bg-white border border-white rounded-full"
              >
                <h1 className="text-primary">{name}</h1>
              </Link>
            </div>
          )}
          {!name && (
            <Link
              to="login"
              className="px-4 my-1 transition-all duration-500 ease-in-out bg-white border rounded h-[38px] text-primary hover:bg-secondary"
            >
              Login your account
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
