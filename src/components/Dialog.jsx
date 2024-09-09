import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";

export default function Dialog({ arena, onClose }) {
  return (
    <div className="flex fixed inset-0 w-screen h-auto md:h-screen justify-center items-center z-40 backdrop-blur-sm">
      <div className="flex w-[70%] h-[95%] m-2 rounded-3xl bg-red-500 relative overflow-hidden">
        <div className="hidden md:flex flex-col items-center w-1/3 p-4 rounded-l-3xl bg-gradient-to-b from-blue-900 to-blue-600 relative">
          <div className="absolute top-4 left-4 z-20">
            <IoArrowBackSharp
              className="text-white text-3xl hover:text-gray-400 duration-300 cursor-pointer"
              onClick={onClose} // Call the onClose function when clicked
            />
          </div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[250px] h-auto z-10">
            <img
              src={arena.img}
              alt={arena.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <p className="text-white font-varela text-[70px] font-bold opacity-30 -rotate-90">
              {arena.title}
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[100%] md:w-2/3 p-6 rounded-r-3xl bg-gradient-to-br from-purple-950 via-purple-700 bg-purple-500 relative">
            <div className="absolute flex md:hidden top-4 right-4 z-20">
                <IoArrowBackSharp
                className="text-white text-3xl hover:text-gray-400 duration-300 cursor-pointer"
                onClick={onClose} // Call the onClose function when clicked
                />
            </div>
          <h1 className="text-white font-varela text-[40px] font-bold mb-4">
            {arena.title}
          </h1>
          <p className="text-white font-varela text-[20px] mb-4">{arena.desc}</p>
          {arena.example && (
            <div className="flex flex-col w-full h-auto">
              <h2 className="text-white font-varela text-[30px] font-bold mb-2">
                Example
              </h2>
              <div className="flex flex-col p-3">
                {arena.example.map((ex) => (
                  <div key={ex.id} className="mb-4">
                    <h3 className="text-white font-varela text-[20px] font-bold">
                      {ex.title}
                    </h3>
                    <p className="text-white font-varela text-[15px] mt-1">
                      {ex.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
