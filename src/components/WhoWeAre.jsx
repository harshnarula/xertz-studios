import React from "react"

export default function WhoWeAre() {
  return (
    <div className="flex flex-col justify-center items-center from-blue-300 via-blue-500 to-indigo-800 bg-gradient-to-b w-[100%] h-auto">
      <h6 className="text-white w-full p-3 text-4xl md:text-6xl font-varela">
        Who We Are ?
      </h6>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-[90%] md:w-[80%] h-full rounded-xl opacity-70 bg-white m-6 shadow-zinc-950 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="flex w-full md:w-[50%] h-full">
          <img
            src="/images/a.jpg"
            alt=""
            className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl"
          />
        </div>
        <div className="flex flex-col w-full md:w-[50%] p-4">
          <p className="text-blue-900 text-lg md:text-2xl font-varela">
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
          <button className="flex justify-center items-center w-full md:w-[150px] text-nowrap font-varela h-[50px] md:h-[30px] text-lg font-bold m-[10px] text-blue-900 bg-white border-b-2 hover:border-2 duration-150 border-blue-900 rounded-xl p-2 md:p-4">
            Our Services
          </button>
        </div>
        
      </div>
    </div>
  )
}
