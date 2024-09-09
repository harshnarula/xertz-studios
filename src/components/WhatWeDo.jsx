import React from "react";
import { useState } from "react";

export default function WhatWeDo() {
  const [readMoreStates, setReadMoreStates] = useState({
    para1: false,
    para2: false,
    para3: false,
    para4: false,
    para5: false,
  });

  // Toggle the readMore state for a specific paragraph
  const toggleReadMore = (key) => {
    setReadMoreStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center from-indigo-800 via-blue-500 to-blue-300 bg-gradient-to-b w-[100%] h-auto">
      <h6 className="text-white w-full p-3 text-4xl md:text-6xl font-varela">
        What We Do !
      </h6>
      <div className="relative w-full h-auto">
        <div className="relative flex flex-col justify-center items-center w-full h-full p-6 z-10">
          <div className="flex flex-col w-full h-full m-6 space-y-6">
            <div className="flex flex-col md:flex-row justify-evenly items-start space-y-6 md:space-y-0 md:space-x-6">
              <p className="text-white duration-300 w-full md:w-[400px] h-auto text-xl font-medium leading-relaxed bg-gray-900 opacity-50 p-4 rounded-lg shadow-lg font-varela ">
                We are pioneers in Augmented Reality (AR), Virtual Reality (VR),
                and Mixed Reality (MR), employing powerful platforms such as
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
            <div className="flex flex-col md:flex-row justify-evenly items-center space-y-6 md:space-y-0 md:space-x-6">
              <p className="text-white duration-300 w-full md:w-[400px] h-auto text-xl font-medium leading-relaxed bg-gray-900 opacity-50 p-4 rounded-lg shadow-lg font-varela ">
                In the realm of web applications, we harness the power of React, Angular, and Vue.js,
                complemented by server-side technologies like 
                {readMoreStates.para2 && (
                  <span>
                    Node.js, Express, and Django. These
                    frameworks and languages enable us to build scalable, responsive, and high-performance
                    applications tailored to your needs.
                  </span>
                )}
                <button
                  onClick={() => toggleReadMore("para2")}
                  className="text-blue-500 underline ml-2"
                >
                  {readMoreStates.para2 ? "Read Less" : "Read More"}
                </button>
              </p>
              <img
                src="/images/2002.i039.010_chatbot_messenger_ai_isometric_set-03.jpg"
                alt=""
                className="w-0 h-0 md:w-[300px] md:h-[300px] rounded-full animate-pulseScale md:block hidden"
              />
              <p className="text-white duration-300 w-full md:w-[400px] h-auto text-xl font-medium leading-relaxed bg-gray-900 opacity-50 p-4 rounded-lg shadow-lg font-varela ">
                For mobile-based applications, we leverage Swift and Kotlin for native development,
                alongside Flutter and React Native for cross-platform solutions. 
                {readMoreStates.para3 && (
                  <span>
                    This ensures a seamless and
                    intuitive user experience across both iOS and Android devices.
                  </span>
                )}
                <button
                  onClick={() => toggleReadMore("para3")}
                  className="text-blue-500 underline ml-2"
                >
                  {readMoreStates.para3 ? "Read Less" : "Read More"}
                </button>
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-start space-y-6 md:space-y-0 md:space-x-6">
              <p className="text-white duration-300 w-full md:w-[400px] h-auto text-xl font-medium leading-relaxed bg-gray-900 opacity-50 p-4 rounded-lg shadow-lg font-varela ">
                Our dedication to Artificial Intelligence (AI) is underscored by our use of advanced tools and
                frameworks such as TensorFlow, PyTorch, Keras, and Scikit-Learn. 
                {readMoreStates.para4 && (
                  <span>
                    We specialize in
                    Machine Learning (ML), Natural Language Processing (NLP), and Deep Learning, creating
                    intelligent systems that adapt and evolve to provide actionable insights and automation.
                  </span>
                )}
                <button
                  onClick={() => toggleReadMore("para4")}
                  className="text-blue-500 underline ml-2"
                >
                  {readMoreStates.para4 ? "Read Less" : "Read More"}
                </button>
              </p>
              <p className="text-white duration-300 w-full md:w-[400px] h-auto text-xl font-medium leading-relaxed bg-gray-900 opacity-50 p-4 rounded-lg shadow-lg font-varela ">
                We also integrate cutting-edge technologies such as Blockchain for secure and transparent
                transactions, IoT (Internet of Things) for interconnected devices
                {readMoreStates.para5 && (
                  <span>
                    , and Cloud Computing with
                    platforms like AWS, Azure, and Google Cloud to ensure scalability and reliability.
                  </span>
                )}
                <button
                  onClick={() => toggleReadMore("para5")}
                  className="text-blue-500 underline ml-2"
                >
                  {readMoreStates.para5 ? "Read Less" : "Read More"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
