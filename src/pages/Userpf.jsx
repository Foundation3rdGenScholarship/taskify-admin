
import React from "react";
import { LuUserRoundCog } from "react-icons/lu";
import { FaRegWindowRestore } from "react-icons/fa";
import EditProfilePage from "./EditProfilePage";
import teachers from "../assets/teachers.png"
import { Link } from "react-router";

export default function Userpf() {
  return (
    <div className="w-full mx-auto shadow-md p-8 min-h-screen bg-background  dark:bg-[#121321]">
      {/* Profile Info */}
      <div className="flex flex-col justify-between gap-5 mb-10 md:flex-row">
        <div className="flex items-center">
          <img className="w-16 h-16 border-2 rounded-full border-primary" src={teachers} alt="Profile" />
          <div className="ml-5">
            <h1 className="text-2xl font-semibold dark:text-white">Chan Chhaya</h1>
            <p className="text-sm text-gray-500 dark:gray-100">Chhaya@gmail.com</p>
          
          </div>
        </div>
            

      </div>

      {/* Personal Information */}
      <h2 className="mb-4 text-2xl font-semibold dark:text-white">Personal Information</h2>
      <div className="space-y-5">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">First Name</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              Chan
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">Last Name</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              Chhaya
            </div>
          </div>
        </div>

        {/* Username, Email & Password */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">Username</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              Chan Chhaya
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">Email</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              Chhaya@example.com
            </div>
          </div>
         
        </div>

        {/* Gender */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">Gender</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              Male
            </div>
          </div>
            <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">Password</div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              ••••••••
            </div>
          </div>
            
        </div>
       <div className="flex items-end space-x-2 md:space-x-4">
            <button className="flex items-center px-3 py-2 text-white transition-all duration-500 rounded-md bg-primary hover:bg-blue-600 ">
          <span className="mr-2"><FaRegWindowRestore /> </span>View Archive
        </button>
        <Link to ="/editprofilepage">
          <button className="flex items-center px-3 py-2 text-white transition-all duration-500 rounded-md bg-primary hover:bg-blue-600 "
          >
            <span className="mr-2"><LuUserRoundCog/>

</span>
          Edit Profile
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

