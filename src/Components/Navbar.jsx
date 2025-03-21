import React, { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TaskifyLogo from "../assets/TaskifyLogo1.png";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import {
  getAceAccessToken,
  removeAccessToken,
} from "../lib/secureLocalStorage";
import { TiArrowLeftOutline } from "react-icons/ti";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { data } = useGetMeQuery();
  const [name, setName] = useState("");

  useEffect(() => {
    if (data?.family_name && data?.given_name) {
      setName(
        `${data.family_name.charAt(0).toUpperCase()}${data.given_name
          .charAt(0)
          .toUpperCase()}`
      );
    }
  }, [data]);
  const handleLogout = () => {
    removeAccessToken(); // Remove the access token
    window.location.reload(); // Reload the page to reflect the change
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white px-4 h-[86px] flex items-center w-full shadow-md">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        {/* Logo */}
        <img src={TaskifyLogo} className="w-[175px] z-10" alt="Taskify Logo" />

        {/* Desktop Buttons */}
        <div className="items-center hidden gap-4 sm:flex">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-white border border-white rounded-full"
            aria-label="Toggle dark mode"
          >
            <motion.div
              key={darkMode ? "moon" : "sun"}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {darkMode ? (
                <BsMoonStarsFill size={26} color="gray" />
              ) : (
                <IoIosSunny size={26} color="gold" />
              )}
            </motion.div>
          </button>

          {getAceAccessToken() ? (
            <div className="flex items-center gap-2">
              <Link to="/dashboard">
                <button className="px-4 py-2 font-medium transition bg-white rounded-full text-primary hover:bg-secondary">
                  Dashboard
                </button>
              </Link>
              <Link to="/userpf">
                <div className="w-[43px] h-[41px] bg-white text-primary font-bold flex items-center justify-center rounded-full">
                  {name}
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/register">
                <button className="px-4 py-2 font-medium transition bg-white rounded-full text-primary hover:bg-secondary">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-4 py-2 font-medium transition bg-white rounded-full text-primary hover:bg-secondary">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle mobile menu"
          className="fixed z-20 text-2xl sm:hidden top-4 right-4" // fixed positioning
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"} {/* Toggle button text based on the state */}
        </button>

        {/* Mobile Menu (Dropdown) */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-primary flex flex-col items-center pt-24 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:hidden`}
        >
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-white border border-white rounded-full"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <BsMoonStarsFill size={26} color="gray" />
            ) : (
              <IoIosSunny size={26} color="gold" />
            )}
          </button>

          {/* Links and Buttons */}
          <div className="flex flex-col items-center gap-4 mt-6">
            {!getAceAccessToken() ? (
              <>
                <Link to="/register">
                  <button className="px-4 py-2 font-medium transition bg-white rounded text-primary hover:bg-secondary">
                    Sign Up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="px-4 py-2 font-medium transition bg-white rounded text-primary hover:bg-secondary">
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard">
                  <button className="px-4 py-2 font-medium transition bg-white rounded text-primary hover:bg-secondary">
                    Dashboard
                  </button>
                </Link>
                <Link to="/userpf">
                  <div className="w-[43px] h-[41px] bg-white text-primary font-bold flex items-center justify-center rounded-full">
                    {name}
                  </div>
                </Link>
                <button
                  className="flex items-center gap-2 px-4 py-2 font-medium transition bg-white rounded text-primary hover:bg-secondary"
                  onClick={() => {
                    removeAccessToken();
                    window.location.reload();
                  }}
                >
                  <TiArrowLeftOutline />
                  Log Out
                </button>
                <div className="flex flex-col mt-10">
                  <Link
                    to="/"
                    className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                  >
                    <MdOutlineLeaderboard className="w-5 h-5" />
                    <div>Home Page</div>
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                  >
                    <MdOutlineLeaderboard className="w-5 h-5" />
                    <div>Workspace</div>
                  </Link>
                  {/* <Link
                    className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                    to="/member"
                  >
                    <IoPersonOutline className="w-5 h-5" />
                    <div>Members</div>
                  </Link> */}
                  <Link
                    className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                    to="/userpf"
                  >
                    <IoSettingsOutline className="w-5 h-5" />
                    <div>User Profile</div>
                  </Link>
                  <Link
                    className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                    to="/notification"
                  >
                    <IoMdNotificationsOutline className="w-5 h-5" />
                    <div>Notifications</div>
                  </Link>
                  <Link
                    className="flex justify-start py-4 pl-4 space-x-4 transition-all duration-500 hover:bg-primary hover:text-background"
                    to="/aboutus"
                  >
                    <IoIosHelpCircleOutline className="w-5 h-5" />
                    <div>About Taskify</div>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
