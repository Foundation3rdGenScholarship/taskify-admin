import { Link } from "react-router";
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
import {
  getAceAccessToken,
  removeAccessToken,
} from "../lib/secureLocalStorage";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    removeAccessToken(); // Remove the access token
    window.location.reload(); // Reload the page to reflect the change
  };

  return (
    <>
      <nav
        className={
          "bg-white h-auto  top-0  dark:bg-gray-800 md:flex flex-col text-txt16 place-content-between w-1/5 bottom-0 gap-y-[330px] py-2 hidden"
        }
      >
        <div className="flex flex-row mt-6 md:flex-col dark:text-white">
          <Link
            to="/"
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
          >
            <MdOutlineLeaderboard className="w-5 h-5" />
            <div>Home Page</div>
          </Link>
          <Link
            to="/dashboard"
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
          >
            <MdOutlineLeaderboard className="w-5 h-5" />
            <div>Workspace</div>
          </Link>
          {/* <Link
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
            to="/member"
          >
            <IoPersonOutline className="w-5 h-5" />
            <div>Members</div>
          </Link> */}
          <Link
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
            to="/userpf"
          >
            <IoSettingsOutline className="w-5 h-5" />
            <div>User Profile</div>
          </Link>
          <Link
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
            to="/notification"
          >
            <IoMdNotificationsOutline className="w-5 h-5" />
            <div>Notifications</div>
          </Link>
          <Link
            className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-yellow-200 hover:text-gray-900"
            to="/aboutus"
          >
            <IoIosHelpCircleOutline className="w-5 h-5 transition-transform duration-500 hover:scale-110" />
            <div>About Taskify</div>
          </Link>

          {getAceAccessToken() && (
            <button
              className="flex justify-start py-4 pl-4 space-x-4 align-middle transition-all duration-500 hover:bg-primary hover:text-background"
              onClick={handleLogout}
            >
              <TiArrowLeftOutline className="w-5 h-5" />
              <div>Log Out</div>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
