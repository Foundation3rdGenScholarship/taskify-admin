
import Cardab from "../Components/Layouts/Cardab";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import Cardvs from "../Components/Layouts/Cardvs";
import groupwork from "../assets/teamwork.jpg";
import rocket from "../assets/rocket_icon.png";
import box from "../assets/box_icon.png";
import card from "../assets/card_icon.png";
import message from "../assets/message_icon.png";
import logo from "../assets/ISTAD_Logo.png";
import student from "../assets/student.png";
import ly from "../assets/ly.png";
import huy1 from "../assets/huy1.png";
import pich1 from "../assets/pich1.png";
import lyzhia1 from "../assets/lyzhia1.png";
import roith from "../assets/roith.png";
import pengseang from "../assets/pengseang.png";
import teachers from "../assets/teachers.png";
import narak from "../assets/narak.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import React, { useEffect } from 'react'; 
import Typed from "typed.js";

export function AboutUs() {

  const cardab = [
    {
      img: teachers ,
      firstName: "CHAN ",
      lastName: "CHAYA",
      job: "Mentor",
      position: "FULL STACK",
    },
    {
      img: lyzhia1,
      firstName: "EUNG ",
      lastName: "LYZHIA",
      job: "Mentor",
      position: "FRONT-END",
    },
  ];
  const cardac = [
    {
      img:pengseang,
      firstName: "SIM ",
      lastName: "PENG SEANG",
      job: "Student",
      position: "FRONT-END",
    },
    {
      img: narak,
      firstName: "LENG",
      lastName: "NARAK",
      job: "Student",
      position: "FRONT-END",
    },
    {
      img: pich1,
      firstName: "SAM",
      lastName: "SOKUNSREYPICH",
      job: "Student",
      position: "FRONT-END",
    },

    {
      img: ly,
      firstName: "SIM",
      lastName: "SEANGLY",
      job: "Student",
      position: "FRONT-END",
    },
    {
      img:roith,
      firstName: "SRUN",
      lastName: "OUDOMSAMBATH",
      name: "SIM SEANGLY",
      job: "Student",
      position: "FRONT-END",
    },
    {
      img:huy1,
      firstName: "TANG",
      lastName: "MENG HUY",
      job: "Student",
      position: "FRONT-END",
    },
  ];
  const cardvs = [
    {
      icon: rocket,
      title: "Efficient Task Organization",
      description:
        "Easily create, prioritize, and categorize tasks to streamline your workflow and improve efficiency.",
    },
    {
      icon: card,
      title: "Seamless Team Collaboration",
      description:
        "Assign tasks, leave comments, and collaborate effortlessly to keep everyone on the same page.",
    },
    {
      icon: message,
      title: "Customizable Workflows",
      description:
        "Customize task stages, automate processes, optimize productivity with a system that works for you.",
    },
    {
      icon: box,
      title: "Real-Time Progress Tracking",
      description:
        "Monitor task completion, track milestones, and visualize progress with detailed insights.",
    },
  ];
  const bl = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(bl.current, {
      strings: [
        " Get a Chance to know About Us and Relive Our Journey.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      backDelay: 1000,
      showCursor: false,
      cursorChar: "🔥",
    });

    return () => {
      typed.destroy(); // Cleanup to avoid memory leaks
    };
  }, []);
  return (
    <>
      <section className="flex flex-col w-full gap-20 font-family min-w-80">
        <section className="min-w-80">
          {/* <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[700px] flex items-center justify-center ">
            <img
              className="absolute inset-0 object-cover w-full h-full opacity-60"
              src={groupwork}
              alt="Background Image"
            />

            <div className="relative z-0 px-6 text-center text-white sm:px-12">
              <p className="text-lg sm:text-xl text-primary">
                WANNA LEARN WHO WE ARE?
              </p>
              <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold max-w-[90%] sm:max-w-[500px] mx-auto">
                Get a Chance to know About Us and Relive Our Journey
              </h1>
              <p className="mt-4 text-lg sm:text-2xl text-secondary font-semibold max-w-[90%] sm:max-w-[500px] mx-auto">
                Meet our dynamic team and discover the roadmap to success as we
                will let you know how it works.
              </p>
            </div>

            <div className="absolute inset-0 "></div>
          </div> */}
           <motion.div
      className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[700px] flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: false }} // Trigger every time it comes into view
    >
      {/* Background Image */}
      <img
        className="absolute inset-0 object-cover w-full h-full opacity-60"
        src={groupwork}
        alt="Background Image"

    />
    

      <div className="relative z-0 flex flex-col gap-4 px-6 text-center text-white sm:px-12">
        {/* First Paragraph */}
        {/* <motion.p
          className="text-4xl sm:text-xl dark:text-white text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          WANNA LEARN WHO WE ARE?
        </motion.p> */}

        {/* Heading */}
        <motion.h1 ref={bl}
          className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold max-w-[90%] sm:max-w-[500px] mx-auto dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
        </motion.h1>

        {/* Second Paragraph */}
        <motion.p
          className="mt-4 text-lg sm:text-2xl text-secondary font-semibold max-w-[90%] sm:max-w-[500px] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: false }}
        >
          Meet our dynamic team and discover the roadmap to success as we
          will let you know how it works.
        </motion.p>
      </div>
    </motion.div>
;
  
          <div className="custom-shape-divider-bottom-1741223493 fill-white rotate-180 h-[80px] -mt-[90px]  md:-mt-[80px] lg:-mt-[140px] xl:-mt-[68px]">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill dark:fill-[#121321]"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill dark:fill-[#121321]"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill dark:fill-[#121321]"
              ></path>
            </svg>
          </div>
        </section>

       <motion.hr
  className="bg-transparent w-full border-[2px] border-dashed border-primary relative ml-0"
  initial={{ width: 0 }} // Initial state (width is 0)
  whileInView={{ width: "100%" }} // When in view, width becomes 100%
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false }} // Keeps triggering when scrolled back into view
/> 
 <motion.section
      className="items-center justify-center w-4/5 h-auto m-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <motion.div
        className="bg-primary p-10 rounded-tl-[100px] rounded-br-[100px] text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false }}
      >
        {/* Heading */}
        <motion.h1
          className="mb-5 text-4xl text-secondary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          About Taskify
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mb-10 text-2xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          Taskify is a productivity platform that allows users to organize
          tasks, collaborate with teams, track progress, set deadlines, and
          streamline workflow efficiently, enhancing project management and
          overall productivity.
        </motion.p>
      </motion.div>
    </motion.section>
        
      <div className="relative flex items-center justify-center mb-10 text-center">
  <motion.hr
    className="absolute w-full border-[2px] border-dashed border-primary z-0 mt-5"
    initial={{ width: 0 }}  // Initial state
    whileInView={{ width: "100%", opacity: 1 }}  // Animation when in view
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false }}  // Keeps triggering when scrolled back into view
  />
  <motion.h1
    className="absolute text-white text-4xl bg-secondary py-5 px-6 rounded-tl-[30px] rounded-br-[30px] w-[380px] h-[80px] z-0"
    initial={{ y: -100, opacity: 0 }} // Initial state
    whileInView={{ y: 0, opacity: 1 }} // Animation when in view
    transition={{ duration: 1, type: "spring", stiffness: 100 }}
    viewport={{ once: false }} // Keeps triggering when scrolled back into view
  >
    OUR VISION
  </motion.h1>
</div>

<section>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-[80%] sm:w-3/5 md:w-4/5 lg:w-4/5 m-auto my-5">
    {cardvs.map((cardvs, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }} >
        <Cardvs
          icon={cardvs.icon}
          title={cardvs.title}
          description={cardvs.description}
        />
      </motion.div>
    ))}
  </div>
</section>

        <div className="relative w-full h-auto">
          {/* SVG Shape Divider - Stays on Top */}
          <div className="w-full">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-[60px] sm:h-[80px] md:h-[80px] lg:h-[110px] fill-blue-300 -mb-1"
            >
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
          </div>

          {/* Content Section */}
           <div className="relative w-full py-20 bg-blue-300">
      <section className="flex flex-col items-center justify-between w-4/5 gap-10 m-auto md:flex-row">
        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="font-bold text-subheading text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            Let’s try a new Experience with us
          </motion.h2>

          <motion.p
            className="text-[20px] text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
          >
            Taskify streamlines task management, collaboration, progress
            tracking, and workflows, keeping teams productive and aligned with
            an intuitive interface.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative p-5 rounded-lg w-full max-w-[400px] md:max-w-[500px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <img
            src="https://cdn.prod.website-files.com/619cef5c40cb8925cd33ece3/621e3d842f5305af9170e4eb_619cef5c40cb8963c133f5fc_6076f40a7bc433d96f4663f4_template-vignette-TO-DO-LIST-1200x900.png"
            className="w-full rounded-lg"
            alt="Taskify App"
          />
        </motion.div>
      </section>
    </div>
        </div>

     <div className="relative flex items-center justify-center mb-10 text-center">
          <motion.hr
  className="absolute w-full border-[2px] border-dashed border-secondary z-0 mt-5"
  initial={{ width: 0 }}  // Initial state
  whileInView={{ width: "100%", opacity: 1 }}  // Animation when the element is in view
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false }}  // Keep triggering when it comes back into view
/>

       <motion.h1
  className="absolute text-white text-4xl bg-primary py-5 px-6 rounded-tl-[30px] rounded-br-[30px] w-[380px] h-[80px] z-0"
  initial={{ y: -100, opacity: 0 }} // Initial state
  whileInView={{ y: 0, opacity: 1 }} // Animation when in view
  transition={{ duration: 1, type: "spring", stiffness: 100 }}
  viewport={{ once: false }} // Keeps triggering when scrolled back into view
>
  OUR MENTOR
</motion.h1>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-10 w-[90%] sm:w-3/5 md:w-4/5 lg:w-3/5 m-auto my-10">
          {cardab.map((Card, index) => (
            <Cardab
              key={index}
              img={Card.img}
              firstName={Card.firstName}
              lastName={Card.lastName}
              job={Card.job}
              position={Card.position}
            />
          ))}
        </div>
        <section className="">
         <div className="relative flex items-center justify-center mb-10 text-center">
  <motion.hr
    className="absolute w-full border-[2px] border-dashed border-primary z-0 mt-5"
    initial={{ width: 0 }}  // Initial state
    whileInView={{ width: "100%", opacity: 1 }}  // Animation when in view
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false }}  // Keep triggering when scrolled back into view
  />
  <motion.h1
    className="absolute text-white text-4xl bg-secondary py-5 px-6 rounded-tl-[30px] rounded-br-[30px] w-[380px] h-[80px] z-0"
    initial={{ y: -100, opacity: 0 }} // Initial state
    whileInView={{ y: 0, opacity: 1 }} // Animation when in view
    transition={{ duration: 1, type: "spring", stiffness: 100 }}
    viewport={{ once: false }} // Keeps triggering when scrolled back into view
  >
    OUR MEMBER
  </motion.h1>
</div>

        </section>
        <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-20 w-[90%] sm:4/5 md:w-4/5 lg:w-4/5 m-auto my-10">
          {cardac.map((Card1, index) => (
            <Cardab
              img={Card1.img}
              firstName={Card1.firstName}
              lastName={Card1.lastName}
              job={Card1.job}
              position={Card1.position}
            />
          ))}
        </div>
        <div>
      {/* Sponsored Section */}
      <motion.div
        className="bg-primary h-full w-full -mt-[80px] px-10 py-10 border-t-[10px] border-b-[10px] border-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-center font-bold text-white text-[32px] mb-[100px] w-fit mx-auto relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[8px] after:bg-[linear-gradient(to_right,_theme('colors.blue.600')_33%,_theme('colors.secondary')_33%_66%,_theme('colors.red.500')_66%)]"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: 'easeOut',
            delay: 0.2,
          }}
        >
          Sponsored and organized by
        </motion.h1>

        {/* Logo Section */}
        <motion.div
          className="flex items-center justify-center -mt-20"
        >
          <motion.img
            src={logo}
            alt="Logo"
          />
        </motion.div>
      </motion.div>
    </div>
   
        <div className="relative w-full h-auto mb-20 -mt-20">
          <motion.img
          className="w-full"
          src={student}
          alt="Teacher"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        />
          <div className="absolute left-0 w-full -bottom-1 ">
            <svg
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
  className="w-full h-auto rotate-180 fill-white dark:fill-[#121321]"
>
  <path
    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    className="shape-fill"
  ></path>
</svg>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUs;
