import React from "react";
import { useState } from "react";
import {
  FaVrCardboard,
  FaBuilding,
  FaGraduationCap,
  FaGamepad,
  FaLeaf,
  FaHeartbeat,
  FaHotel,
  FaFlask,
  FaCarSide,
  FaHome,
} from "react-icons/fa";
import CallToAction from "../components/CallToAction";

export default function LandingPage() {
  const [readMoreStates, setReadMoreStates] = useState({
    para1: false,
    para2: false,
    para3: false,
    para4: false,
  });

  const collaborationData = [
    {
      icon: FaVrCardboard,
      title: "Pioneers in VR, AR, and MR",
      description:
        "Collaborating with leaders like Oculus, Magic Leap, and Microsoft HoloLens to create immersive experiences in entertainment, training, and interactive storytelling.",
    },
    {
      icon: FaBuilding,
      title: "Construction and 3D Modeling",
      description:
        "Specializing in advanced 3D modeling and simulation technologies that enhance architectural visualization and project management.",
    },
    {
      icon: FaGraduationCap,
      title: "Educational Sector and AI Integration",
      description:
        "Partnering with educational institutions to develop AI-driven tutors and virtual classrooms for personalized learning experiences.",
    },
    {
      icon: FaGamepad,
      title: "Games and Interactive Learning",
      description:
        "Collaborating with game developers to create educational games and simulations that make learning fun and impactful.",
    },
    {
      icon: FaLeaf,
      title: "Agriculture and Biochemical Studies",
      description:
        "Applying precision farming solutions and smart technology to optimize agricultural practices and drive biotech research.",
    },
    {
      icon: FaHeartbeat,
      title: "Healthcare and Emergency Simulation",
      description:
        "Developing simulation tools for medical training that enhance procedures and emergency response capabilities.",
    },
    {
      icon: FaHotel,
      title: "Hospitality and Tourism",
      description:
        "Creating virtual travel experiences and interactive guest services that revolutionize the hospitality industry.",
    },
    {
      icon: FaFlask,
      title: "Scientific and Mechanical Studies",
      description:
        "Providing advanced tools for scientific research and mechanical engineering to drive innovation and insights.",
    },
    {
      icon: FaCarSide,
      title: "Automobile and Aviation Industries",
      description:
        "Enhancing vehicle design and safety features with flight simulation technologies and predictive maintenance solutions.",
    },
    {
      icon: FaHome,
      title: "Real Estate and Defence",
      description:
        "Offering 3D property visualization and virtual tours for real estate and developing simulation systems for defence.",
    },
  ];

  // Toggle the readMore state for a specific paragraph
  const toggleReadMore = (key) => {
    setReadMoreStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-center items-center from-indigo-800 via-blue-500 to-blue-300  bg-gradient-to-b w-[100%] h-screen">
        <div className="flex flex-row justify-between p-4 w-[100%] h-screen">
          <div className="flex flex-col justify-center items-start m-6">
            <h1 className="text-white text-6xl m-[10px] font-varela">
              Xertz Studios
            </h1>
            <h6 className="text-white text-2xl mx-[10px] max-w-[300px] font-varela">
              Immersive AR/VR experiences redefining reality through innovative
              technology.
            </h6>
            <button className="flex justify-center items-center w-[200px] font-varela h-[60px] text-lg font-bold m-[10px] text-white bg-blue-900 rounded-xl p-2">
              See Our Products
            </button>
          </div>
          <div className="relative flex flex-row justify-center items-center space-x-4 w-[50%] h-full">
            <div className="relative w-[300px] h-[90%] bg-purple-800 rounded-[16px] opacity-80 overflow-hidden">
              <img
                src="/images/beauty-digital-art-through-immersive-experiences (1).jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[300px] h-[90%] bg-purple-800 rounded-[16px] opacity-80 overflow-hidden">
              <img
                src="/images/man-wearing-vr-glasses-gaming.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 left-[calc(50%-150px)] top-0 w-[300px] h-[90%] bg-purple-800 rounded-[16px]  overflow-hidden z-10">
              <img
                src="/images/beauty-digital-art-through-immersive-experiences.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/*Who We Are?*/}
      <div className="flex flex-col justify-center items-center from-blue-300 via-blue-500 to-indigo-800 bg-gradient-to-b w-[100%] h-screen">
        <h6 className="text-white w-[100%] p-3 text-6xl font-varela">
          Who We Are ?
        </h6>
        <div className="flex flex-row justify-center items-center space-x-4 w-[90%] h-full rounded-xl opacity-70 bg-white m-6 shadow-zinc-950 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="flex w-[50%] h-full">
            <img
              src="/images/a.jpg"
              alt=""
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <p className="flex text-blue-900 text-2xl  p-6">
              Welcome to Xert Studios, where innovation meets excellence in
              technology. We are not just an IT company but your dedicated
              partner in navigating modern tech complexities. Our ethos
              emphasizes quality over quantity, with a team of skilled
              professionals committed to creating user-centric solutions. We
              tailor our approach to your unique needs, using cutting-edge
              technologies to deliver groundbreaking solutions. Join us to
              experience unparalleled expertise and a dedication to crafting the
              future of technology.
            </p>
            <button className="flex justify-center items-center w-[150px]  text-nowrap  font-varela h-[30px] text-lg font-bold m-[10px] text-blue-900 bg-white border-b-2 hover:border-2  duration-150 border-blue-900 rounded-xl p-6">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/*What We Do?*/}
      <div className="flex flex-col justify-center items-center from-indigo-800 via-blue-500 to-blue-300  bg-gradient-to-b w-[100%] h-auto">
        <h6 className="text-white w-[100%] p-3 text-6xl font-varela">
          What We Do ?
        </h6>
        <div className="relative w-[100%] h-[100%]">
          <div className="relative flex flex-col justify-center items-center w-full h-full p-6 z-10">
            <div className="flex flex-col w-full h-full m-6 space-y-6">
              <div className="flex flex-row justify-evenly items-center space-x-6">
                <p className="text-white duration-300 w-[400px] h-auto text-xl font-medium leading-relaxed bg-gray-900 opacity-50 p-4 rounded-lg shadow-lg font-varela">
                  We are pioneers in Augmented Reality (AR), Virtual Reality
                  (VR), and Mixed Reality (MR), employing powerful platforms
                  such as
                  {readMoreStates.para1 && (
                    <span>
                      Unity, Unreal Engine, and Vuforia to deliver immersive
                      experiences. Our AR and VR solutions incorporate
                      sophisticated motion tracking, spatial computing, and
                      high-fidelity graphics to engage users in ways previously
                      unimagined.
                    </span>
                  )}
                  <button
                    onClick={() => toggleReadMore("para1")}
                    className="text-blue-500 underline ml-2"
                  >
                    {readMoreStates.para1 ? "Read Less" : "Read More"}
                  </button>
                </p>
              </div>
              <div className="flex flex-row justify-evenly items-center space-x-6">
                <p className="text-white duration-300 w-[400px] h-auto text-xl font-medium leading-relaxed bg-gray-900 opacity-50 p-4 rounded-lg shadow-lg font-varela">
                  We are pioneers in Augmented Reality (AR), Virtual Reality
                  (VR), and Mixed Reality (MR), employing powerful platforms
                  such as
                  {readMoreStates.para1 && (
                    <span>
                      Unity, Unreal Engine, and Vuforia to deliver immersive
                      experiences. Our AR and VR solutions incorporate
                      sophisticated motion tracking, spatial computing, and
                      high-fidelity graphics to engage users in ways previously
                      unimagined.
                    </span>
                  )}
                  <button
                    onClick={() => toggleReadMore("para1")}
                    className="text-blue-500 underline ml-2"
                  >
                    {readMoreStates.para1 ? "Read Less" : "Read More"}
                  </button>
                </p>
                <img
                  src="/images/2002.i039.010_chatbot_messenger_ai_isometric_set-03.jpg"
                  alt=""
                  className="w-[300px] h-[300px] rounded-full animate-pulseScale"
                />
                <p className="text-white duration-300 w-[400px] h-auto text-xl font-medium leading-relaxed bg-gray-900 opacity-50 p-4 rounded-lg shadow-lg font-varela">
                  We are pioneers in Augmented Reality (AR), Virtual Reality
                  (VR), and Mixed Reality (MR), employing powerful platforms
                  such as
                  {readMoreStates.para1 && (
                    <span>
                      Unity, Unreal Engine, and Vuforia to deliver immersive
                      experiences. Our AR and VR solutions incorporate
                      sophisticated motion tracking, spatial computing, and
                      high-fidelity graphics to engage users in ways previously
                      unimagined.
                    </span>
                  )}
                  <button
                    onClick={() => toggleReadMore("para1")}
                    className="text-blue-500 underline ml-2"
                  >
                    {readMoreStates.para1 ? "Read Less" : "Read More"}
                  </button>
                </p>
              </div>
              <div className="flex flex-row justify-evenly items-center ">
                <p className="text-white duration-300 w-[400px] h-auto text-xl font-medium leading-relaxed bg-gray-900 opacity-50 p-4 rounded-lg shadow-lg font-varela">
                  We are pioneers in Augmented Reality (AR), Virtual Reality
                  (VR), and Mixed Reality (MR), employing powerful platforms
                  such as
                  {readMoreStates.para1 && (
                    <span>
                      Unity, Unreal Engine, and Vuforia to deliver immersive
                      experiences. Our AR and VR solutions incorporate
                      sophisticated motion tracking, spatial computing, and
                      high-fidelity graphics to engage users in ways previously
                      unimagined.
                    </span>
                  )}
                  <button
                    onClick={() => toggleReadMore("para1")}
                    className="text-blue-500 underline ml-2"
                  >
                    {readMoreStates.para1 ? "Read Less" : "Read More"}
                  </button>
                </p>
                <p className="text-white duration-300 w-[400px] h-auto text-xl font-medium leading-relaxed bg-gray-900 opacity-50 p-4 rounded-lg shadow-lg font-varela">
                  We are pioneers in Augmented Reality (AR), Virtual Reality
                  (VR), and Mixed Reality (MR), employing powerful platforms
                  such as
                  {readMoreStates.para1 && (
                    <span>
                      Unity, Unreal Engine, and Vuforia to deliver immersive
                      experiences. Our AR and VR solutions incorporate
                      sophisticated motion tracking, spatial computing, and
                      high-fidelity graphics to engage users in ways previously
                      unimagined.
                    </span>
                  )}
                  <button
                    onClick={() => toggleReadMore("para1")}
                    className="text-blue-500 underline ml-2"
                  >
                    {readMoreStates.para1 ? "Read Less" : "Read More"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Mission */}
      <div className="flex flex-col justify-center items-start from-blue-300 via-blue-500 to-indigo-800  bg-gradient-to-b w-[100%] h-screen">
        <h6 className="text-white w-[100%] p-3 text-6xl font-varela">
          Mission
        </h6>
        <div className="flex w-[80%] m-3">
          <p className="text-white  h-auto text-2xl p-4 font-varela">
            At Xert Studios, our mission is to revolutionize technology by
            transforming the ordinary into the extraordinary. We are dedicated
            to pushing the limits of innovation, creating solutions that combine
            creativity and precision to tackle complex challenges. Our aim is to
            lead change in the tech industry, offering groundbreaking
            applications and systems that surpass client expectations. By
            leveraging emerging technologies like AR, VR, AI, and Blockchain, we
            aim to redefine user engagement and operational efficiency, setting
            the pace with visionary ideas and unmatched expertise.
          </p>
        </div>
      </div>
      {/*Industrial Collaboration*/}
      <div className="flex flex-col justify-center items-center from-indigo-800 via-blue-500 to-blue-300  bg-gradient-to-b w-[100%] h-auto">
        <div className="max-w-7xl w-full">
          <h1 className="text-5xl font-extrabold font-varela mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-white pb-4">
            Industrial Collaboration
          </h1>
          <p className="text-lg text-white font-varela mb-12 text-center max-w-3xl mx-auto">
            At Xertz Studios, we bring together industry leaders across various
            fields to create innovative solutions that push the boundaries of
            technology and creativity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {collaborationData.map((item, index) => (
              <div
                key={index}
                className="group relative bg-green-400 bg-opacity-40 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl"></div>
                <div className="relative flex items-center mb-6 z-10">
                  <item.icon className="text-6xl text-indigo-200 font-varela  mr-6 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl text-white font-bold font-varela">{item.title}</h2>
                </div>
                <p className="relative text-sm text-white font-varela leading-relaxed z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-semibold text-white text-lg max-w-2xl mx-auto">
              Together, we are shaping the future where technology and
              creativity converge to unlock new possibilities and drive
              meaningful change.
            </p>
          </div>
        </div>
      </div>
      {/*Call To Action*/}
      <CallToAction />
    </>
  );
}
