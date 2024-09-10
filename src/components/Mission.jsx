import React from "react";
import { FaRocket, FaCog, FaGlobe, FaStar, FaLeaf } from "react-icons/fa";

export default function Mission() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-300 via-blue-500 to-indigo-800 w-[100%] h-auto py-16 px-6">
      <h6 className="text-white w-[100%] p-3 text-6xl font-varela">
          Mission
        </h6>
      <div className="w-full max-w-5xl bg-white bg-opacity-20 p-4 md:p-12 rounded-2xl shadow-2xl backdrop-blur-lg">
        <p className="text-white text-lg  md:text-xl font-medium leading-relaxed font-varela mb-12">
          At Xert Studios, our mission is to revolutionize technology by transforming the ordinary into the extraordinary. We are dedicated to pushing the limits of innovation, creating solutions that combine creativity and precision to tackle complex challenges. Our aim is to lead change in the tech industry, offering groundbreaking applications and systems that surpass client expectations. By leveraging emerging technologies like AR, VR, AI, and Blockchain, we aim to redefine user engagement and operational efficiency, setting the pace with visionary ideas and unmatched expertise.
        </p>

        <h6 className="text-white text-4xl font-extrabold mb-8 text-center border-b-4 border-white pb-4 font-varela">Milestones</h6>

        <div className="flex flex-col space-y-20">
          {/* Milestone 1 */}
          <div className="flex items-start space-x-6 bg-white bg-opacity-15 rounded-2xl p-8 shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-20 hover:shadow-xl">
            <div className="md:flex hidden w-8 md:w-16 h-8 md:h-16 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-full items-center justify-center text-white text-4xl font-bold shadow-md">
              <FaRocket  />
            </div>
            <div className="flex-1">
              <h6 className="text-lg md:text-2xl text-white font-bold mb-4 font-varela">Innovative Product Launches</h6>
              <p className="text-white text-md md:text-lg  mb-2 font-varela">
                <strong>Q1 2025:</strong> Launch our application on various platforms to engage users with our innovations.
              </p>
              <p className="text-white text-md md:text-lg font-varela">
                <strong>Q3 2025:</strong> Release a next-gen AI-powered predictive analytics tool designed to optimize business operations and enhance decision-making.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="flex items-start space-x-6 bg-white bg-opacity-15 rounded-2xl p-8 shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-20 hover:shadow-xl">
            <div className="md:flex hidden w-8 md:w-16 h-8 md:h-16 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-full items-center justify-center text-white text-4xl font-bold shadow-md">
              <FaCog />
            </div>
            <div className="flex-1">
              <h6 className="text-lg md:text-2xl text-white font-bold mb-4 font-varela">Technological Expansion</h6>
              <p className="text-white text-md md:text-lg font-varela">
                <strong>Q4 2025:</strong> Implement IoT solutions in diverse industries, showcasing our ability to interconnect devices and systems for smarter operations.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="flex items-start space-x-6 bg-white bg-opacity-15 rounded-2xl p-8 shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-20 hover:shadow-xl">
            <div className="md:flex hidden w-8 md:w-16 h-8 md:h-16 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-full items-center justify-center text-white text-4xl font-bold shadow-md">
              <FaGlobe />
            </div>
            <div className="flex-1">
              <h6 className="text-lg md:text-2xl text-white font-bold mb-4 font-varela">Global Reach and Collaboration</h6>
              <p className="text-white text-md md:text-lg  mb-2 font-varela">
                <strong>2024:</strong> Establish strategic partnerships with leading technology providers and research institutions to stay at the forefront of innovation.
              </p>
              <p className="text-white text-md md:text-lg font-varela">
                <strong>2025:</strong> Expand our services to new international markets, building a global network of clients and collaborators.
              </p>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className="flex items-start space-x-6 bg-white bg-opacity-15 rounded-2xl p-8 shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-20 hover:shadow-xl">
            <div className="md:flex hidden w-8 md:w-16 h-8 md:h-16 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-full items-center justify-center text-white text-4xl font-bold shadow-md">
              <FaStar />
            </div>
            <div className="flex-1">
              <h6 className="text-lg md:text-2xl text-white font-bold mb-4 font-varela">Excellence in Client Satisfaction</h6>
              <p className="text-white text-md md:text-lg  mb-2 font-varela">
                <strong>2024:</strong> Achieve a 95% client satisfaction rate through exceptional service delivery and personalized solutions.
              </p>
              <p className="text-white text-md md:text-lg font-varela">
                <strong>2025:</strong> Implement a comprehensive feedback loop to continuously improve our offerings and adapt to evolving client needs.
              </p>
            </div>
          </div>

          {/* Milestone 5 */}
          <div className="flex items-start space-x-6 bg-white bg-opacity-15 rounded-2xl p-8 shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-20 hover:shadow-xl">
            <div className="md:flex hidden w-8 md:w-16 h-8 md:h-16 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-full items-center justify-center text-white text-4xl font-bold shadow-md">
              <FaLeaf />
            </div>
            <div className="flex-1">
              <h6 className="text-lg md:text-2xl text-white font-bold mb-4 font-varela">Sustainability and Social Impact</h6>
              <p className="text-white text-md md:text-lg  mb-2 font-varela">
                <strong>2024:</strong> Launch initiatives to reduce our carbon footprint, incorporating sustainable practices in our operations and project executions.
              </p>
              <p className="text-white text-md md:text-lg font-varela">
                <strong>2025:</strong> Engage in community outreach programs, using our technology to support educational and social development initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
