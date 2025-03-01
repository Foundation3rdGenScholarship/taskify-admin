import React from "react";
import Cardab from "../Components/Aboutlayout/Cardab";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import profilepic from "../assets/c910b642-cc3f-43c1-804e-6753b1d7e660.webp"
import { motion } from "framer-motion";
export function AboutPage() {
  const cardab = [
    {
      img :{profilepic} ,
      firstName : "CHAN ",
      lastName: "CHAYA",
      job : "Mentor",
      position : "FULL STACK"
    },
    {
      img:{profilepic},
      firstName: "EUNG ",
      lastName: "LYZHIA", 
      job:"Mentor",
      position : "FULL STACK"
    },
  ];
  const cardac = [
    {
      img :{profilepic} ,
      firstName: "SIM ",
      lastName: "PENG SEANG", 
      job : "Student",
      position : "FULL STACK"
    },
    {
      img:{profilepic},
        firstName: "LENG",
      lastName: "NARAK",   
      job:"Student",
      position : "FULL STACK"
    },
     {
      img:{profilepic},
        firstName: "SAM",
      lastName: "SOKUNSREYPICH",  
      job:"Student",
      position : "FULL STACK"
    },
    
     {
      img:{profilepic},
      firstName: "SIM",
      lastName: "SEANGLY",
      job:"Student",
      position : "FULL STACK"
    }, 
    {
      img:{profilepic},
        firstName: "SRUN",
      lastName: "OUDOMSAMBATH",  
      name: "SIM SEANGLY",
      job:"Student",
      position : "FULL STACK"
    },
     {
      img:{profilepic},
      firstName: "TANG",
      lastName: "MENG HUY",
      job:"Student",
      position : "FULL STACK"
    },
  ];
   
  return (
    <>
    <hr className="bg-transparent mb-10 w-2/3 mt-10 border-[2px] border-dashed border-secondary relative ml-[calc(1/3*100%)]" />
      

 
   
    <section className="flex flex-col font-family gap-20 min-w-200">



<section className="w-4/5 m-auto flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[70vh] gap-10">
  <motion.div 
    className="flex flex-col w-full lg:w-1/2 text-center lg:text-left"
    initial={{ opacity: 0, x: -50 }} 
    whileInView={{ opacity: 1, x: 0 }}  // Animation triggers when in view
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false }}  // Keeps triggering when scrolled back into view
  >
    <div className="lg:w-[40vw]">
      <motion.p 
        className="text-primary text-xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}  // Animation triggers when in view
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: false }}
      >
        WANNA LEARN WHO WE ARE?
      </motion.p>
      <motion.h1 
        className="text-primary text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}  // Animation triggers when in view
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: false }}
      >
        Get a Chance to know About Us and Relive Our Journey
      </motion.h1>
      <motion.p 
        className="mb-10 text-2xl text-secondary"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}  // Animation triggers when in view
        transition={{ delay: 0.7, duration: 1 }}
        viewport={{ once: false }}
      >
        Meet our dynamic team and discover the roadmap to success as we will let you know how it works.
      </motion.p>
    </div>
  </motion.div>

  <motion.div 
    className="w-full lg:w-1/2 flex justify-center"
    initial={{ opacity: 0, x: 50 }} 
    whileInView={{ opacity: 1, x: 0 }}  // Animation triggers when in view
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false }}  // Keeps triggering when scrolled back into view
  >
    <motion.img 
      src="https://images.ctfassets.net/rz1oowkt5gyp/2eQ2q8S2ekzMgbFZvg4oU0/5f2c889b0e0ff8f5ecb3984ad209c9d6/All_Views_Illo.svg" 
      alt="" 
      className="rounded-lg "
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 200 }}
    />
  </motion.div>
</section>





      <hr className="bg-transparent w-2/3 mt-3 border-[2px] border-dashed border-gray-700 relative ml-[0px]" />
 

<section className="flex flex-col-reverse lg:flex-row w-4/5 m-auto justify-between items-center h-auto lg:h-[70vh] gap-10">
  
  <motion.div
    className="w-full lg:w-1/2 flex justify-center"
    initial={{ opacity: 0, x: -100 }} // Starting state for animation
    whileInView={{ opacity: 1, x: 0 }} // Trigger animation when section is in view
    transition={{ duration: 1 }}
    viewport={{ once: false }} // Make animation trigger every time the section is in view
  >
    <DotLottieReact
      src="https://lottie.host/e82c7d02-c12c-4783-a2f2-d56f18531a45/tFcYLif3Lc.lottie"
      loop
      autoplay
      className="w-full h-full"
    />
  </motion.div>

  <motion.div
    className="flex flex-col w-full lg:w-1/2"
    initial={{ opacity: 0, y: 100 }} // Starting state for animation
    whileInView={{ opacity: 1, y: 0 }} // Trigger animation when section is in view
    transition={{ duration: 1, delay: 0.5 }} // Delay to stagger the animations
    viewport={{ once: false }} // Make animation trigger every time the section is in view
  >
    <div className="bg-primary p-5 rounded-tl-[30px] rounded-br-[30px] text-center">
      <h1 className="text-secondary text-4xl mb-5">About Taskify</h1>
      <p className="mb-10 text-2xl text-white">
        Taskify is a productivity platform that allows users to organize tasks, 
        collaborate with teams, track progress, set deadlines, and streamline 
        workflow efficiently, enhancing project management and overall productivity.
      </p>
    </div>
  </motion.div>
</section>

 
  {/* <section className="flex flex-col-reverse lg:flex-row w-4/5 m-auto justify-between items-center h-auto lg:h-[70vh] gap-10">
 
    <div className="w-full lg:w-1/2 flex justify-center">
      <DotLottieReact
        src="https://lottie.host/e82c7d02-c12c-4783-a2f2-d56f18531a45/tFcYLif3Lc.lottie"
        loop
        autoplay  />
    </div>

    <div className="flex flex-col w-full lg:w-1/2">
      <div className="bg-primary p-5 rounded-tl-[30px] rounded-br-[30px] text-center">
        <h1 className="text-secondary text-4xl mb-5">About Taskify</h1>
        <p className="mb-10 text-2xl text-white">
          Taskify is a productivity platform that allows users to organize tasks, 
          collaborate with teams, track progress, set deadlines, and streamline 
          workflow efficiently, enhancing project management and overall productivity.
        </p>
      </div>
    </div>
</section> */}

      <hr className="bg-transparent w-2/3 mt-10 border-[2px] border-dashed border-secondary relative ml-[calc(1/3*100%)]" />
       <section className="flex flex-col lg:flex-row w-4/5 m-auto justify-between items-center h-auto lg:h-[70vh] gap-10">
      <div className="flex flex-col w-full lg:w-1/2">
        <motion.div
          className="lg:w-[40vw] p-5"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-secondary text-4xl mb-5 w-[380px] h-[80px] py-5 px-6 rounded-tl-[30px] rounded-br-[30px]">
            OUR VISION
          </h1>
          <motion.img
            className="w-50 -mt-8"
            src="//images.ctfassets.net/rz1oowkt5gyp/5Ub9YCKx371qMXE7jomyBJ/3d701450a4b9a98379c67b1ca3b19b2d/gradient_bar.svg"
            alt="gradient bar"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          />
          <p className="mb-10 mt-5 text-2xl text-primary">
            Taskify offers efficient task organization, seamless team collaboration, real-time progress tracking, 
            and customizable workflows. Its user-friendly interface boosts productivity, 
            simplifies project management, and keeps teams aligned and motivated.
          </p>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.img
          className="rounded-2xl w-full max-w-[400px]"
          src="https://images.ctfassets.net/rz1oowkt5gyp/5VdMUyyLbdnF4kqGM5aORJ/646505ec4e9d9f91b9dc2b88198d5866/butler-header.svg"
          alt="Taskify Butler"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>
    </section>
    
    {/* <section className="flex flex-col lg:flex-row w-4/5 m-auto justify-between items-center h-auto lg:h-[70vh] gap-10">
  <div className="flex flex-col w-full lg:w-1/2">
    <div className="lg:w-[40vw] p-5">
      <h1 className="text-secondary text-4xl mb-5 w-[380px] h-[80px] py-5 px-6 rounded-tl-[30px] rounded-br-[30px] bg-gray-200">
        OUR VISION
      </h1>
      <img className="w-50 -mt-8" src="//images.ctfassets.net/rz1oowkt5gyp/5Ub9YCKx371qMXE7jomyBJ/3d701450a4b9a98379c67b1ca3b19b2d/gradient_bar.svg" alt="gradient bar"/>
      <p className="mb-10 mt-5 text-2xl text-primary">
        Taskify offers efficient task organization, seamless team collaboration, real-time progress tracking, 
        and customizable workflows. Its user-friendly interface boosts productivity, 
        simplifies project management, and keeps teams aligned and motivated.
      </p>
    </div>
  </div>
  <div className="w-full lg:w-1/2 flex justify-center">
    <img className="rounded-2xl w-full max-w-[400px]" 
      src="https://images.ctfassets.net/rz1oowkt5gyp/5VdMUyyLbdnF4kqGM5aORJ/646505ec4e9d9f91b9dc2b88198d5866/butler-header.svg"
      alt="Taskify Butler"
    />
  </div>
</section> */}



      <div className="text-center mb-10 flex items-center justify-center ">
     <hr className=" bg-transparent w-3/3 mt-5 border-[2px] border-dashed border-secondary relative" />
          <h1 className="absolute text-white text-4xl w-[380px] h-[80px] bg-primary py-5 px-6 rounded-tl-[30px] rounded-br-[30px]">OUR MENTOR</h1>
        
     </div>
</section>







  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 w-[90%] sm:w-3/5 md:w-3/5 lg:w-3/5 m-auto my-10">

          {cardab.map((Card, index) => (
            <Cardab
              key={index}
              
              img = {cardab.img}
              firstName = {Card.firstName}
              lastName={Card.lastName}
              job = {Card.job}
              position={Card.position}
         
            />
          ))}
        </div>
         <section className="">
      <div className="text-center mb-10 flex items-center justify-center">
         <hr className=" bg-transparent w-3/3 mt-5 border-[2px] border-dashed border-secondary relative" />
         <h1 className="absolute text-white text-4xl w-[380px] h-[80px] bg-primary py-5 px-6 rounded-tl-[30px] rounded-br-[30px]">OUR MEMBER</h1>
       
     </div>
    </section>
 <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-20 w-[90%] sm:4/5 md:w-3/5 lg:w-4/5 m-auto my-10">

          {cardac.map((Card1, index) => (
            <Cardab
              img = {cardac.img}
              firstName={Card1.firstName}
              lastName={Card1.lastName}
              job = {Card1.job}
              position={Card1.position}
         
            />
          ))}
        </div>

    </>
  );
}
export default AboutPage;
