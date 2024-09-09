import React, { useEffect } from "react"

export default function HeroSection() {

  return (
    <div className="flex flex-col justify-center items-center from-indigo-800 via-blue-500 to-blue-300 bg-gradient-to-b w-[100%] h-auto">
      <div className="hidden md:flex flex-row justify-between p-4 w-full h-screen">
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
          <div id = "img1" className="relative w-[300px] h-[90%] bg-purple-800 rounded-[16px] opacity-80 overflow-hidden">
            <img
              src="/images/beauty-digital-art-through-immersive-experiences (4).jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div id = "img2" className="relative w-[300px] h-[90%] bg-purple-800 rounded-[16px] opacity-80 overflow-hidden">
            <img
              src="/images/man-wearing-vr-glasses-gaming(1).jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div id = "img3" className="absolute inset-0 left-[calc(50%-150px)] top-0 w-[300px] h-[90%] bg-purple-800 rounded-[16px] overflow-hidden z-10">
            <img
              src="/images/beauty-digital-art-through-immersive-experiences(1).jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden flex-col justify-center items-center w-full h-screen relative">
        <div className="absolute inset-0 w-full h-full bg-purple-800 overflow-hidden">
          <img
            src="/images/beauty-digital-art-through-immersive-experiences.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-white text-4xl m-4 font-varela">
            Xertz Studios
          </h1>
          <h6 className="text-white text-lg mx-4 max-w-[80%] font-varela">
            Immersive AR/VR experiences redefining reality through innovative
            technology.
          </h6>
          <button className="flex justify-center items-center w-[160px] font-varela h-[50px] text-lg font-bold m-4 text-white bg-blue-900 rounded-xl p-2">
            See Our Products
          </button>
        </div>
      </div>
    </div>
  )
}
