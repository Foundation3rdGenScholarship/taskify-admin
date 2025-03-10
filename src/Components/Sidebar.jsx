import { NavLink } from "react-router";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import {
  IoIosHelpCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { TiArrowLeftOutline } from "react-icons/ti";
import { useState } from "react";

import { flushSync } from "react-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        className={
          " bg-slate-400 md:flex flex-col h-[100%] text-txt16  place-content-between w-1/5 sticky top-20 bottom-0 gap-y-[330px] py-2 hidden"
        }
      >
        <div className="flex flex-row mt-6 md:flex-col">
          <NavLink
            className={
              "flex justify-start space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background"
            }
            to="/"
          >
            <MdOutlineLeaderboard
              className={"w-5 h-5"}
              width={"10"}
              height={"10"}
            />
            <div>Workspace</div>
          </NavLink>
          <NavLink
            className={
              "flex justify-start space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background"
            }
            to="/"
          >
            <IoPersonOutline className={"w-5 h-5"} width={"10"} height={"10"} />
            <div>Members</div>
          </NavLink>
          <NavLink
            className={
              "flex justify-start space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background"
            }
            to="/"
          >
            <IoSettingsOutline
              className={"w-5 h-5"}
              width={"10"}
              height={"10"}
            />
            <div>Setting</div>
          </NavLink>
          <NavLink
            className={
              "flex justify-start space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background"
            }
            to="/"
          >
            <IoMdNotificationsOutline
              className={"w-5 h-5"}
              width={"10"}
              height={"10"}
            />
            <div>Notifications</div>
          </NavLink>
          <NavLink
            className={
              "flex justify-start space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background"
            }
            to="/"
          >
            <IoIosHelpCircleOutline
              className={"w-5 h-5"}
              width={"10"}
              height={"10"}
            />
            <div>About Taskify</div>
          </NavLink>
        </div>
        <NavLink className={" hover:bg-primary"}>
          <div
            className={
              "flex justify-start items-center space-x-4 pl-4 align-middle py-4 hover:bg-primary hover:text-background "
            }
          >
            <TiArrowLeftOutline />
            <div>Log Out</div>
          </div>
        </NavLink>
      </nav>

      <button
        className="flex gap-10 p-5 text-2xl rounded-full text-primary sm:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? "" : <TiThMenu/> } {/* Changes icon when open/closed */}
      </button>
      {isOpen && (
        <div className="relative">
          <nav className="fixed bottom-0 flex flex-col w-1/3 h-full py-2 transition-transform bg-purple-300 text-txt16 place-content-between top-20 gap-y-10 md:hidden min-w-56">
            {/* Close Button */}
            <button
              className="absolute top-0 right-0 flex gap-10 p-5 text-2xl rounded-full text-primary"
              onClick={() =>{toggleMenu(), console.log(isOpen)}}
            >
              <AiOutlineClose/> 
            </button>
            {/* Navigation Links */}
            <div className="absolute flex flex-col mt-6">
              <NavLink className="flex justify-start py-4 pl-4 space-x-4 hover:bg-primary hover:text-background" to="/">
                <MdOutlineLeaderboard className="w-5 h-5" />
                <div>Workspace</div>
              </NavLink>
              <NavLink className="flex justify-start py-4 pl-4 space-x-4 hover:bg-primary hover:text-background" to="/">
                <IoPersonOutline className="w-5 h-5" />
                <div>Members</div>
              </NavLink>
              <NavLink className="flex justify-start py-4 pl-4 space-x-4 hover:bg-primary hover:text-background" to="/">
                <IoSettingsOutline className="w-5 h-5" />
                <div>Settings</div>
              </NavLink>
              <NavLink className="flex justify-start py-4 pl-4 space-x-4 hover:bg-primary hover:text-background" to="/">
                <IoMdNotificationsOutline className="w-5 h-5" />
                <div>Notifications</div>
              </NavLink>
              <NavLink className="flex justify-start py-4 pl-4 space-x-4 hover:bg-primary hover:text-background" to="/">
                <IoIosHelpCircleOutline className="w-5 h-5" />
                <div>About Taskify</div>
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
