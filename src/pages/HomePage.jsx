import React from "react";
import Cardesc from "../Components/Cardesc";
import CardDesc1 from "../Components/CardDesc1";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Typed from "typed.js";
import { useEffect } from "react";
import { Link } from "react-router";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import qimage from "../assets/question.jpg";
import seconstimage from "../assets/todo.png";
import HeroSection from "../Components/HeroSection";
import Foote1 from "../Components/Footer1";
import CardDiscription2 from "../Components/CardDiscription2";
export default function HomePage() {
  const card = [
    {
      title: "Project Management",
      description:
        "Keep tasks in order, deadlines on track, and team members aligned with Trackify.",
      color: "",
    },
    {
      title: "Assign Meeting",
      description:
        "Empower your team meeting to be more productive, empowering and dare we day-fun. ",
      color: "",
    },
    {
      title: "Onboarding",
      description:
        "On boarding to a new company or project is a snap with Trackify’s visual layout of to-do’s, resources, and process tracking.",
      color: "",
    },
    {
      title: "Task Management Card",
      description:
        "Use Trackify to track, manage, complete, and bring tasks together like pieces of a puzzle, and make your team’s project a cohesive success every time.",
      color: "",
    },
    {
      title: "Brainstorming",
      description:
        "Unleash your team’s creativity and keep ideas visible, collaborative, and actionable.",
      color: "",
    },
    {
      title: "Resource Hub",
      description:
        "Save time with a well-designed hub that help teams find information easily and quickly.",
      color: "",
    },
  ];
  const card1 = [
    {
      title: "Simple",
      description:
        "Trackify created with the most simple look, but with modern UI. That’s very easy to interact with and we provide for our users with many efficiency features to complete your work on time.  ",
      color: "white",
      linecolor: "bg-secondary",
    },
    {
      title: "Flexible",
      description:
        "Trackify created with the most simple look, but with modern UI. That’s very easy to interact with and we provide for our users with many efficiency features to complete your work on time.  ",
      color: "white",
      linecolor: "bg-accent",
    },
    {
      title: "Powerful",
      description:
        "Trackify created with the most simple look, but with modern UI. That’s very easy to interact with and we provide for our users with many efficiency features to complete your work on time.  ",
      color: "white",
      linecolor: "bg-secondary",
    },
    {
      title: "Friendly User ",
      description:
        "Trackify created with the most simple look, but with modern UI. That’s very easy to interact with and we provide for our users with many efficiency features to complete your work on time.  ",
      color: "white",
      linecolor: "bg-secondary",
    },
  ];

  const card3 = [
    {
      title: "Project Management",
      description:
        "Trackify boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”",
      colorline: "bg-[#DE16B6]",
      color: "border-l-[#DE16B6]",
    },
    {
      title: "Lists",
      description:
        "The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trackify.",
      colorline: "bg-[#12297A]",
      color: "border-l-[#12297A]",
    },
    {
      title: "Cards",
      description:
        "Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.",
      colorline: "bg-[#FF9500]",
      color: "border-l-[#FF9500]",
    },
  ];
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Taskify makes it easy to navigate with everyone, everything is in your hand.",
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
    <section className="flex flex-col gap-20 min-w-80">
      {/* Go to known tasks */}
      <hr className="bg-transparent w-2/3 mt-10 border-[2px] border-dashed border-gray-700 relative ml-[calc(1/3*100%)]" />
      <section className="flex flex-col font-family ">
        <section className="flex w-4/5 m-auto justify-between items-center h-[70vh] sm:flex-col flex-col md:flex-col lg:flex-row">
          <div className="flex flex-col w-full sm:w-full md:w-full lg:w-1/2 ">
            <div className="lg:w-[40vw] w-full h-[162px] lg: sm:w-full text-heading text-primary ">
              <h1 ref={el} className="sm:text-subheading text-[25px]"></h1>
            </div>
            <p className="mb-10 text-txt18 font-family ">
              Now explore your life, your career, and your potential with us.
            </p>
            <div className="h-[48px] flex justify-center md:justify-normal">
              <input
                type="text"
                placeholder="Email"
                className="text-gray-500 p-2  border border-primary rounded  h-full lg:w-[372px] w-32"
              />
              <button className="w-32 h-full p-2 mx-5 text-white rounded bg-primary">
                Let's sigh up!
              </button>
            </div>
          </div>
          <div className="w-1/2 min-w-80">
            <DotLottieReact
              src="https://lottie.host/e82c7d02-c12c-4783-a2f2-d56f18531a45/tFcYLif3Lc.lottie"
              loop
              autoplay
            />
          </div>
        </section>
      </section>

      <hr className="bg-transparent w-2/3 mt-10 border-[2px] border-dashed border-gray-700 relative ml-[0px]" />

      {/* GET start */}
      <section className="flex flex-col pt-10 pb-20 m-auto gap-3.5 bg-primary">
        <div className="w-4/5 m-auto text-center">
          <p className="font-bold text-white text-subheading font-family">
            Get to know us!
          </p>
          <p className="font-bold text-white text-subheading font-family">
            Taskify is an easy, modern UI, and powerful Dashboard Management{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 w-4/5 m-auto gap-[60px] md:grid-cols-2">
          {card1.map((card, index) => (
            <CardDesc1
              key={card.index}
              color={card.color}
              title={card.title}
              description={card.description}
              linecolor={card.linecolor}
            />
          ))}
        </div>
      </section>

      {/* flow */}
      <section className="flex flex-col w-4/5 gap-10 m-auto">
        <h1 className="font-family text-subheading">
          Workflows for any projects, don’t care how big it is. Tackify can help
          you with that
        </h1>
        <section className="grid grid-cols-1 gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {card.map((card, index) => (
            <Cardesc
              key={index}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          ))}
        </section>

        <div className="flex flex-col justify-between md:items-center md:flex-row">
          <p className="w-full md:w-2/3 font-family text-txt20">
            No need to start from scratch. Jump-start your workflow with a
            proven playbook designed for different teams. Customize it to make
            it yours.
          </p>
          <Link className="p-3 md:m-5 m-0 mt-5  text-white no-underline rounded bg-primary decoration-0 min-w-[177px] max-w-[177px] ">
            Explore Our Solutions
          </Link>
        </div>
      </section>

      {/* choose Taskfy */}

      <section className="flex flex-col items-center justify-between w-4/5 gap-10 m-auto md:flex-row">
        <div className="relative bg-white rounded-lg w-fit bg-opacity-20 backdrop-blur-lg ">
          <img src={qimage} className="w-[600px] rounded-lg" />
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="font-family text-subheading">
            Why should you choose Trackify?
          </h2>
          <ul className="flex flex-col space-y-4 list-none">
            {[
              "We are free to use",
              "Many useful features for users",
              "Available for all devices",
              "Stay supporting with you",
              "Modern UI is provided to users",
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-center space-x-3.5 text-txt20"
              >
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faArrowAltCircleRight}
                />
                <p className="text-txt20 font-family">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* todo */}

      <section className="flex flex-col items-center justify-between w-4/5 gap-10 m-auto lg:flex-row">
        {/* Left Side: Cards */}
        <div className="flex flex-col w-full lg:w-3/5 gap-3.5">
          {card3.map((card, index) => (
            <CardDiscription2
              key={index}
              title={card.title}
              description={card.description}
              color={card.color}
              colorline={card.colorline}
            />
          ))}
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center w-full lg:w-2/5">
          <img
            src={seconstimage}
            alt="Image"
            className="w-full max-w-[500px] object-cover rounded-lg"
          />
        </div>
      </section>
    </section>
  );
}
