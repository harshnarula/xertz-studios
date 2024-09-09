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
  import React from "react";
  
  export default function IndustrialCollaboration() {
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
  
    return (
      <div className="flex flex-col justify-center items-center from-indigo-800 via-blue-500 to-blue-300 bg-gradient-to-b w-[100%] h-auto">
        <div className="max-w-7xl w-full">
          <h1 className="text-5xl font-extrabold  font-varela mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-white pb-4">
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
                className="group relative bg-green-400 bg-opacity-40 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 mx-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-full"
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl"></div>
                <div className="relative flex items-center mb-4 md:mb-6 z-10">
                  <item.icon className="text-4xl md:text-6xl text-indigo-200 font-varela mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-xl md:text-2xl text-white font-bold font-varela">
                    {item.title}
                  </h2>
                </div>
                <p className="relative text-sm md:text-base text-white font-varela leading-relaxed z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center">
            <p className="font-semibold text-white text-lg max-w-2xl mx-auto">
              Together, we are shaping the future where technology and creativity
              converge to unlock new possibilities and drive meaningful change.
            </p>
          </div>
        </div>
      </div>
    );
  }
  