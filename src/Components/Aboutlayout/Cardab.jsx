import React from "react";
import Profilepic from "../../assets/c910b642-cc3f-43c1-804e-6753b1d7e660.webp"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ProfileCard = ({ firstName, lastName, job, position,img}) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when in view
        } else {
          setIsInView(false); // Optionally reset animation when out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-20 flex flex-col items-center justify-center">
      <motion.div
        ref={cardRef}
        className="w-80 shadow-2xl -mb-8 rounded-lg p-4 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }} // Trigger animation based on visibility
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-[150px] h-[150px] rounded-[50%] border-[5px] border-primary p-1"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }} // Trigger scale animation based on visibility
          transition={{ duration: 0.8 }}
        >
          {/* <img className="h-full w-full rounded-[50%]" src={Profilepic} alt="profile pic" />
           */}
            <motion.img
      className="h-full w-full rounded-[50%]"
      src={Profilepic}
      alt="profile pic"
      whileHover={{ scale: 1.05, rotate: 2 }}  // Hover effect
      transition={{ type: "spring", stiffness: 300 }}  // Smooth spring animation
    />
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-[15px] w-full">
          <motion.div
            className="text-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }} // Trigger opacity animation based on visibility
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="text-[25px] font-family text-secondary font-bold">{firstName}</h2>
            <h2 className="text-[25px] font-family text-secondary font-bold">{lastName}</h2>
          </motion.div>

          <p className="text-[20px] font-family text-black font-medium">{job}</p>
          <motion.h2
            className="text-[20px] font-family text-white font-medium bg-primary rounded-tl-[30px] rounded-br-[30px] py-[8px] px-[15px]"
            initial={{ x: -100 }}
            animate={{ x: isInView ? 0 : -100 }} // Trigger x-axis animation based on visibility
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {position}
          </motion.h2>

          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <motion.li
                className="flex items-center justify-center w-10 h-10 border border-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
  
<div className="flex">
   <ul className="flex items-center space-x-4">
      <motion.li
        className="flex items-center justify-center w-10 h-10 border border-white rounded-full"
        whileHover={{ scale: 1.3, rotate: 5 }}  // Hover effect
        transition={{ type: "spring", stiffness: 200 }}  // Smooth spring animation
      >
        <a href="javascript:void()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="w-full"
          >
            <linearGradient
              id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
              x1="9.993"
              x2="40.615"
              y1="9.993"
              y2="40.615"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#2aa4f4"></stop>
              <stop offset="1" stopColor="#007ad9"></stop>
            </linearGradient>
            <path
              fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
              d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
            ></path>
            <path
              fill="#fff"
              d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
            ></path>
          </svg>
        </a>
      </motion.li>

      <motion.li
        className="flex items-center justify-center w-10 h-10 border border-white rounded-full"
        whileHover={{ scale: 1.3, rotate: 5 }}  // Hover effect
        transition={{ type: "spring", stiffness: 200 }}  // Smooth spring animation
      >
        <a href="javascript:void()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="w-full"
          >
            <linearGradient
              id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1"
              x1="9.858"
              x2="38.142"
              y1="9.858"
              y2="38.142"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#33bef0"></stop>
              <stop offset="1" stopColor="#0a85d9"></stop>
            </linearGradient>
            <path
              fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)"
              d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
            ></path>
            <path
              d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223C8.794,25.983,8.34,24.272,10.119,23.466z"
              opacity=".05"
            ></path>
            <path
              d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078C9.095,25.618,9.075,24.378,10.836,23.591z"
              opacity=".07"
            ></path>
            <path
              fill="#fff"
              d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932C9.384,25.282,9.81,24.484,11.553,23.717z"
            ></path>
          </svg>
        </a>
      </motion.li>

      <motion.li
        className="flex items-center justify-center w-10 h-10 border border-white rounded-full"
        whileHover={{ scale: 1.3, rotate: 5 }}  // Hover effect
        transition={{ type: "spring", stiffness: 200 }}  // Smooth spring animation
      >
       <a href="javascript:void(0)">
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" class="w-15">
    <path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"></path>
    <path fill="#e4e4f9" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"></path>
    <path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"></path>
    <path fill="#8889b9" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"></path>
    <path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"></path>
    <path fill="#8889b9" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"></path>
    <path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z"></path>
    <g>
      <path fill="#a3a3cd" d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z"></path>
      <path fill="#472b29" d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z"></path>
    </g>
    <g>
      <path fill="#565fa1" d="M50 29.167A20.5 20.5 0 1 0 50 70.167A20.5 20.5 0 1 0 50 29.167Z"></path>
    </g>
    <g>
      <path fill="#472b29" d="M69.424,44.625c-0.214,0-0.412-0.139-0.478-0.354c-0.088-0.287-0.183-0.571-0.284-0.853 c-0.392-1.094-0.886-2.159-1.47-3.169c-0.139-0.238-0.057-0.545,0.182-0.683c0.239-0.141,0.545-0.057,0.683,0.183 c0.614,1.061,1.134,2.182,1.546,3.331c0.106,0.297,0.206,0.595,0.298,0.897c0.081,0.264-0.067,0.544-0.332,0.625 C69.521,44.618,69.472,44.625,69.424,44.625z"></path>
    </g>
    <g>
      <path fill="#472b29" d="M50,70.75c-11.511,0-20.875-9.337-20.875-20.813S38.489,29.125,50,29.125 c5.975,0,11.674,2.56,15.636,7.023c0.299,0.337,0.588,0.685,0.865,1.041c0.169,0.218,0.13,0.531-0.087,0.701 c-0.218,0.171-0.532,0.131-0.702-0.088c-0.264-0.339-0.54-0.669-0.824-0.99c-3.772-4.25-9.199-6.688-14.888-6.688 c-10.959,0-19.875,8.888-19.875,19.813S39.041,69.75,50,69.75s19.875-8.888,19.875-19.813c0-0.995-0.075-1.996-0.222-2.973 c-0.041-0.272,0.147-0.527,0.42-0.568c0.278-0.045,0.528,0.147,0.569,0.42c0.154,1.025,0.233,2.076,0.233,3.121 C70.875,61.413,61.511,70.75,50,70.75z"></path>
    </g>
    <g>
      <path fill="#fefdef" d="M61.496,42.088c0.365-1.671,0.206-3.743-0.486-5.818c-3.622,0-6.339,2.716-6.339,2.716 s0.016,0.018,0.02,0.023C54.627,39.008,54.565,39,54.5,39h-9c-0.043,0-0.085,0.006-0.128,0.006c0.003-0.004,0.017-0.02,0.017-0.02 s-2.717-2.716-6.339-2.716c-0.684,2.053-0.85,4.104-0.5,5.767C36.973,43.732,36,46,36,48.5c0,5.247,4.253,9.5,9.5,9.5h1.073 c-1.304,0.709-2.246,1.979-2.493,3.498c-1.72,0.232-3.979,0.18-5.028-1.394c-1.811-2.717-2.717-2.717-3.622-2.717 s-0.906,0.906,0,1.811c0.906,0.906,0.906,0.906,1.811,2.717c0.772,1.543,2.812,3.298,6.76,2.663v3.523 c0,0.447,0.079,0.871,0.191,1.282c2.425,0.577,6.502,1.061,11.665-0.151C55.943,68.868,56,68.493,56,68.102v-5.816 c0-1.858-1.047-3.456-2.573-4.286H54.5c5.247,0,9.5-4.253,9.5-9.5C64,46.025,63.046,43.779,61.496,42.088z"></path>
    </g>
    <g>
      <path fill="#472b29" d="M49.532,70.486c-2.23,0-4.075-0.287-5.457-0.616c-0.178-0.042-0.319-0.179-0.367-0.355 c-0.142-0.522-0.208-0.972-0.208-1.413V65.15c-4.563,0.514-6.279-2.154-6.707-3.011c-0.87-1.739-0.87-1.739-1.717-2.587 c-0.701-0.701-0.979-1.458-0.745-2.023c0.169-0.408,0.569-0.642,1.098-0.642c1.217,0,2.219,0.211,4.038,2.939 c0.839,1.258,2.676,1.379,4.193,1.218c0.23-0.978,0.724-1.63,1.711-1.83c0.434-0.127,0.844-0.057,1.123,0.133 c1.195,1.195,1.75,3.449,1.008,5.315c-0.408,1.018-1.324,1.838-2.282,2.441c-2.68,2.175-6.648,3.211-10.634,3.365 c-1.598,0.221-4.013,0.29-5.479-1.16c-1.413-1.219-1.691-2.956-0.605-3.979c2.614-1.876,6.189-4.133,9.734-4.694 c1.14-0.027,1.749,0.906,2.728,1.36c2.19,0.832,5.349,0.255,5.907-2.329c0.456-1.724-1.317-2.887-2.783-3.346 c-1.59-0.46-3.395,0.372-3.596,1.469c-0.567,1.875-0.771,3.574-1.803,5.417c0.07,0.113,0.06,0.248,0.123,0.355 c0.103,0.174,0.286,0.268,0.489,0.306c1.276,0.387,4.398-1.344,5.404-0.878c1.032,0.597,0.864,1.556,0.256,2.374 c-1.546,1.553-4.493,1.453-7.337,1.353z"></path>
    </g>
  </svg>
</a>

      </motion.li>
    </ul>
  
                    
</div>


              </motion.li>
            </ul>
          </div>
        </div>
      
      </motion.div>  <div  className="w-80 mt-2 h-8 rounded-b-xl border-r-amber-500 border-r-6 border-l-6 border-b-10 border-l-amber-500 border-b-amber-500"></div>
     
     </div>
  );
};

export default ProfileCard;



// import { motion } from "framer-motion";
// export default function Cardab({img,firstName,lastName,job,position,icon,nameClass}) {
//   return (
//     <>







 
//     </>


//   );
// }
   {/* <div className="mb-20 flex flex-col items-center justify-center">
    <div className=" w-80 shadow-2xl -mb-8 rounded-lg p-4 flex flex-col items-center justify-center">
      <div className="w-[150px] h-[150px]  rounded-[50%] border-[5px] border-primary p-1"> 
        <img className="h-full w-full rounded-[50%] " src={Profilepic} alt="profile pic" />{img}</div>
        <div className="flex flex-col items-center justify-center gap-[15px] w-full">
          <div className="text-center mt-2">
          <h2 className={"text-[25px]  font-family text-secondary font-bold "}>{firstName}</h2>
          <h2  className={"text-[25px]  font-family text-secondary  font-bold "}>{lastName}</h2>
         </div>
          <p className="text-[20px]  font-family text-black font-medium">{job}</p>
          <h2 className="text-[20px]   font-family text-white font-medium bg-primary rounded-tl-[30px] rounded-br-[30px] py-[8px] px-[15px]">{position}</h2>
             <div className="mt-6 sm:mt-0">
               <div className="mt-6 sm:mt-0">

               </div>
          <ul className="flex items-center space-x-4 ">
            <li className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
              <a href="javascript:void()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="w-full"
                >
                  <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#2aa4f4"></stop>
                    <stop offset="1" stop-color="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                  ></path>
                </svg>
              </a>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
              <a href="javascript:void()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="w-full"
                >
                  <linearGradient
                    id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1"
                    x1="9.858"
                    x2="38.142"
                    y1="9.858"
                    y2="38.142"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#33bef0"></stop>
                    <stop offset="1" stop-color="#0a85d9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)"
                    d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                  ></path>
                  <path
                    d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#fff"
                    d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"
                  ></path>
                </svg>
              </a>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
              <a href="javascript:void()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  className="w-full"
                >
                  <path
                    fill="#f1bc19"
                    d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"
                  ></path>
                  <path
                    fill="#e4e4f9"
                    d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"
                  ></path>
                  <path
                    fill="#f1bc19"
                    d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"
                  ></path>
                  <path
                    fill="#8889b9"
                    d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"
                  ></path>
                  <path
                    fill="#fbcd59"
                    d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"
                  ></path>
                  <path
                    fill="#8889b9"
                    d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z"
                  ></path>
                  <g>
                    <path
                      fill="#a3a3cd"
                      d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#565fa1"
                      d="M50 29.167A20.5 20.5 0 1 0 50 70.167A20.5 20.5 0 1 0 50 29.167Z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#472b29"
                      d="M69.424,44.625c-0.214,0-0.412-0.139-0.478-0.354c-0.088-0.287-0.183-0.571-0.284-0.853 c-0.392-1.094-0.886-2.159-1.47-3.169c-0.139-0.238-0.057-0.545,0.182-0.683c0.239-0.141,0.545-0.057,0.683,0.183 c0.614,1.061,1.134,2.182,1.546,3.331c0.106,0.297,0.206,0.595,0.298,0.897c0.081,0.264-0.067,0.544-0.332,0.625 C69.521,44.618,69.472,44.625,69.424,44.625z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#472b29"
                      d="M50,70.75c-11.511,0-20.875-9.337-20.875-20.813S38.489,29.125,50,29.125 c5.975,0,11.674,2.56,15.636,7.023c0.299,0.337,0.588,0.685,0.865,1.041c0.169,0.218,0.13,0.531-0.087,0.701 c-0.218,0.171-0.532,0.131-0.702-0.088c-0.264-0.339-0.54-0.669-0.824-0.99c-3.772-4.25-9.199-6.688-14.888-6.688 c-10.959,0-19.875,8.888-19.875,19.813S39.041,69.75,50,69.75s19.875-8.888,19.875-19.813c0-0.995-0.075-1.996-0.222-2.973 c-0.041-0.272,0.147-0.527,0.42-0.568c0.278-0.045,0.528,0.147,0.569,0.42c0.154,1.025,0.233,2.076,0.233,3.121 C70.875,61.413,61.511,70.75,50,70.75z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#fefdef"
                      d="M61.496,42.088c0.365-1.671,0.206-3.743-0.486-5.818c-3.622,0-6.339,2.716-6.339,2.716 s0.016,0.018,0.02,0.023C54.627,39.008,54.565,39,54.5,39h-9c-0.043,0-0.085,0.006-0.128,0.006c0.003-0.004,0.017-0.02,0.017-0.02 s-2.717-2.716-6.339-2.716c-0.684,2.053-0.85,4.104-0.5,5.767C36.973,43.732,36,46,36,48.5c0,5.247,4.253,9.5,9.5,9.5h1.073 c-1.304,0.709-2.246,1.979-2.493,3.498c-1.72,0.232-3.979,0.18-5.028-1.394c-1.811-2.717-2.717-2.717-3.622-2.717 s-0.906,0.906,0,1.811c0.906,0.906,0.906,0.906,1.811,2.717c0.772,1.543,2.812,3.298,6.76,2.663v3.523 c0,0.447,0.079,0.871,0.191,1.282c2.425,0.577,6.502,1.061,11.665-0.151C55.943,68.868,56,68.493,56,68.102v-5.816 c0-1.858-1.047-3.456-2.573-4.286H54.5c5.247,0,9.5-4.253,9.5-9.5C64,46.025,63.046,43.779,61.496,42.088z"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M49.532,70.486c-2.23,0-4.075-0.287-5.457-0.616c-0.178-0.042-0.319-0.179-0.367-0.355 c-0.142-0.522-0.208-0.972-0.208-1.413V65.15c-4.563,0.514-6.279-2.154-6.707-3.011c-0.87-1.739-0.87-1.739-1.717-2.587 c-0.701-0.701-0.979-1.458-0.745-2.023c0.169-0.408,0.569-0.642,1.098-0.642c1.217,0,2.219,0.211,4.038,2.939 c0.839,1.258,2.676,1.379,4.193,1.218c0.23-0.978,0.724-1.855,1.423-2.554C39.762,58.272,35.5,53.875,35.5,48.5 c0-2.442,0.891-4.78,2.513-6.613c-0.306-1.722-0.108-3.761,0.564-5.775c0.068-0.204,0.259-0.342,0.474-0.342 c3.357,0,5.931,2.16,6.552,2.73h8.854c0.621-0.57,3.195-2.73,6.552-2.73c0.215,0,0.406,0.138,0.474,0.342 c0.679,2.037,0.872,4.096,0.551,5.83c1.591,1.826,2.465,4.146,2.465,6.559c0,5.375-4.263,9.773-9.585,9.991 c1.001,0.997,1.585,2.354,1.585,3.794v5.816c0,0.392-0.052,0.8-0.158,1.246c-0.043,0.185-0.188,0.328-0.372,0.371 C53.582,70.28,51.419,70.486,49.532,70.486z M44.602,68.965c2.412,0.537,6.153,0.9,10.83-0.148 c0.045-0.253,0.068-0.489,0.068-0.715v-5.816c0-1.597-0.886-3.07-2.312-3.846c-0.201-0.109-0.302-0.341-0.246-0.563 c0.056-0.222,0.256-0.377,0.484-0.377H54.5c4.962,0,9-4.037,9-9c0-2.247-0.843-4.404-2.373-6.074 c-0.11-0.12-0.154-0.286-0.12-0.444c0.331-1.517,0.202-3.352-0.36-5.202c-2.87,0.153-5.098,2.074-5.542,2.484 c-0.091,0.151-0.245,0.246-0.429,0.246c-0.007,0-0.096-0.006-0.103-0.006L45.5,39.5c-0.152,0-0.332-0.067-0.442-0.181l-0.021,0.021 c-0.025-0.024-2.438-2.39-5.623-2.561c-0.557,1.831-0.69,3.649-0.373,5.154c0.034,0.159-0.013,0.325-0.124,0.444 C37.358,44.052,36.5,46.227,36.5,48.5c0,4.963,4.038,9,9,9h1.073c0.229,0,0.428,0.155,0.484,0.377 c0.057,0.222-0.044,0.453-0.246,0.563c-1.205,0.654-2.021,1.799-2.238,3.139c-0.036,0.218-0.208,0.386-0.427,0.415 c-2.664,0.358-4.568-0.198-5.511-1.611c-1.663-2.494-2.412-2.494-3.206-2.494c-0.137,0-0.18,0.032-0.181,0.032 c-0.025,0.064,0.043,0.435,0.534,0.926c0.963,0.963,0.998,1.033,1.905,2.847c0.369,0.736,1.911,3.093,6.233,2.392 c0.147-0.021,0.292,0.019,0.404,0.113c0.111,0.096,0.176,0.234,0.176,0.381v3.523C44.5,68.372,44.533,68.651,44.602,68.965z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#fefdef"
                      d="M60.437,51.362c-0.9,1.994-2.876,3.652-6.354,3.93"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M54.083,55.542c-0.129,0-0.238-0.1-0.249-0.23c-0.011-0.138,0.091-0.258,0.229-0.269 c3.805-0.305,5.442-2.227,6.146-3.784c0.058-0.127,0.205-0.183,0.331-0.125c0.125,0.057,0.182,0.204,0.125,0.33 c-1.073,2.377-3.403,3.824-6.562,4.077C54.097,55.542,54.09,55.542,54.083,55.542z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#fefdef"
                      d="M60.959,47.41c0.111,0.753,0.109,1.552-0.03,2.342"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M60.93,50.002c-0.015,0-0.029-0.001-0.044-0.004c-0.136-0.023-0.227-0.153-0.203-0.289 c0.129-0.734,0.139-1.517,0.029-2.263c-0.021-0.136,0.074-0.264,0.21-0.283c0.137-0.02,0.264,0.073,0.284,0.211 c0.12,0.809,0.109,1.624-0.031,2.421C61.155,49.917,61.049,50.002,60.93,50.002z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#fefdef"
                      d="M59.083,43.875c0.633,0.451,1.146,1.179,1.488,2.055"
                    ></path>
                    <path
                      fill="#472b29"
                      d="M60.571,46.181c-0.1,0-0.194-0.061-0.233-0.159c-0.334-0.856-0.818-1.528-1.4-1.942 c-0.112-0.08-0.139-0.236-0.059-0.349c0.081-0.113,0.236-0.138,0.349-0.06c0.662,0.472,1.207,1.222,1.576,2.169 c0.05,0.129-0.014,0.273-0.142,0.324C60.632,46.175,60.602,46.181,60.571,46.181z"
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>

 </div>

  </div>
  <div className="w-80  mt-2 h-8 rounded-b-xl border-r-amber-500 border-r-6 border-l-6 border-b-10 border-l-amber-500 border-b-amber-500"></div>

   </div> */}
    
    {/* <div className="relative rounded-sm w-full z-20">
  <div className="bg-amber-500 rounded-sm w-full h-3 absolute top-5 z-10"></div>

  <div className="bg-amber-500 rounded-sm w-[6px] h-full absolute top-2 -left-1 z-10"></div>
  <div className="bg-amber-500 rounded-sm w-[6px] h-full absolute top-2 -right-1 z-10"></div> b
</div> */}