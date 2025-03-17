import React from "react";
import Profilepic from "../assets/Chaya.webp";
import { LuUserRoundCog } from "react-icons/lu";
import { FaRegWindowRestore } from "react-icons/fa";
import EditProfilePage from "./EditProfilePage";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useGetMeQuery } from "../features/auth/authApiSlice";

export default function Userpf() {
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

  console.log("narMe :>> ", narMe);

  return (
    <div className="w-full mx-auto shadow-md p-8 min-h-screen bg-gray-100  dark:bg-[#121321]">
      {/* Profile Info */}
      <div className="flex flex-col justify-between gap-5 mb-10 md:flex-row">
        <div className="flex items-center">
          <h1 className="flex items-center justify-center w-16 h-16 font-bold border-2 rounded-full text-primary border-primary text-heading">
            {name}
          </h1>
        
          <div className="ml-5">
            <h1 className="text-2xl font-semibold dark:text-white">
              {narMe.family_name +" "+ narMe.given_name}
            </h1>
            <p className="text-sm text-gray-500 dark:gray-100">
              {narMe.email}
            </p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <h2 className="mb-4 text-2xl font-semibold dark:text-white">
        Personal Information
      </h2>
      <div className="space-y-5">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">
              First Name
            </div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              {narMe.family_name}
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">
              Last Name
            </div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              {narMe.given_name}
            </div>
          </div>
        </div>

        {/* Username, Email & Password */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">
              Username
            </div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              {narMe.username}
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">
              Email
            </div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              {narMe.email}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">
              user_id
            </div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              {narMe.id}
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">
              roles
            </div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              {narMe.role}
            </div>
          </div>
        </div>

        {/* Gender */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">
              Gender
            </div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              {narMe.gender}
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-600 dark:text-gray-100">
              Password
            </div>
            <div className="p-3 font-semibold border rounded-md text-primary bg-gray-50">
              ........
            </div>
          </div>
        </div>
        <div className="flex items-end space-x-2 md:space-x-4">
          <button className="flex items-center px-3 py-2 text-white transition-all duration-500 rounded-md bg-primary hover:bg-blue-600 ">
            <span className="mr-2">
              <FaRegWindowRestore />{" "}
            </span>
            View Archive
          </button>
          <Link to="/editprofilepage">
            <button className="flex items-center px-3 py-2 text-white transition-all duration-500 rounded-md bg-primary hover:bg-blue-600 ">
              <span className="mr-2">
                <LuUserRoundCog />
              </span>
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
