import React, { useState, useEffect, useRef } from "react";
import Dialog from "./Dialog";

export default function ThreeDArena() {
  const [selectedArena, setSelectedArena] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0); // State to track previous index
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const arenaRef = useRef(null); // Reference for the arena items container

  const _3DArena = [
    {
      id: 1,
      title: "Applications",
      img: "/images/chatbot-application-isometric-icon-with-smartphone-character-wearing-virtual-reality-glasses.png",
      desc: "In this category, we specialize in crafting, developing, managing, and rebuilding AR, MR, and VR applications tailored to the specific needs and requirements of various organizations and industries. Whether it&#39;s enhancing operational efficiency, creating engaging customer experiences, or developing specialized tools, we deliver solutions that align with your niche and objectives. Our strategic planning ensures that each application is optimized for performance and impact, addressing unique industry needs and driving innovation.",
    },
    {
      id: 2,
      title: "Education Centre",
      img: "/images/10903864.png",
      desc: "We create virtual classrooms and educational environments where teaching and learning transcend physical boundaries. Our virtual education centres allow teachers and students to interact within a 3D space, using tools like virtual whiteboards and interactive 3D models. Imagine a science class where students explore a dynamic solar system or an automotive course where they manipulate a virtual engine. Our meticulously crafted virtual learning environments enhance educational experiences, offering immersive and interactive lessons that significantly improve teaching and learning capabilities.",
    },
    {
      id: 3,
      title: "Games",
      img: "/images/view-3d-video-game-controller-removebg-preview(1).png",
      desc: "Our game development category is dedicated to crafting experiences that defy imagination. From high-octane racing games where you feel the thrill of driving a 3D car as if it were real, to aerial combat simulations where you pilot jets or helicopters, our games offer unparalleled realism and excitement. We use advanced technologies to track hand movements, gestures, and head motions without the need for sensors, ensuring an immersive experience. Features like real-time voice chat, multiplayer interactions, and responsive environments create gaming experiences that are truly out of this world. At Xert Studios, our commitment is to push the boundaries of what’s possible with 3D technologies. We are here to help you harness the power of AR, VR, and MR to create transformative experiences, drive innovation, and redefine how technology impacts your world.",
    },
    {
      id: 4,
      title: "Product Design",
      img: "/images/robot-with-clipboard-boxes(1).png",
      desc: "Our product designing applications enable you to simulate and visualize your product designs in a fully immersive 3D environment. Whether you’re developing a complex automobile engine, intricate wiring systems, or detailed architectural models for a restaurant or bar, our simulations bring your ideas to life. Examples include:",
      example: [
        {
          id: 1,
          title: "Automobile Design",
          desc: "Visualize and test engine components, exhaust systems, and wiring meshes in a virtual space, allowing for detailed analysis and refinement before physical production.",
        },
        {
          id: 2,
          title: "Architectural Design",
          desc: "Create and explore detailed 3D models of restaurants, bars, or other spaces, adjusting layouts, materials, and designs in a virtual setting to streamline the design process and client presentations.",
        },
      ],
    },
    {
      id: 5,
      title: "Simulators",
      img: "/images/vr-glasses-gaming-removebg-preview.png",
      desc: "We craft advanced simulators that provide realistic training and operational experiences across various industries. Our simulators offer highly detailed and interactive environments for:",
      example: [
        {
          id: 1,
          title: "Aviation",
          desc: "Simulate flying jets, planes, and airbuses, replicating real-world controls and flight dynamics for pilot training and operational practice.",
        },
        {
          id: 2,
          title: "Automotive",
          desc: "Train drivers using 3D virtual car simulators, enhancing driving skills and safety in a controlled virtual environment.",
        },
        {
          id: 3,
          title: "Green Energy",
          desc: "Explore and implement green energy technologies through simulations that model energy consumption, efficiency, and sustainability strategies.",
        },
      ],
    },
    {
      id: 6,
      title: "Remote Offices",
      img: "/images/29119-removebg-preview.png",
      desc: "Our virtual global offices cater to the growing work-from-home culture, providing a fully immersive 3D workspace that exceeds the capabilities of traditional office environments. Features include:",
      example: [
        {
          id: 1,
          title: "Virtual Workspaces",
          desc: "Set up complete virtual offices with meeting rooms, whiteboards, and power boards, allowing employees to interact with their real-face avatars.",
        },
        {
          id: 2,
          title: "Management Tools",
          desc: "Incorporate surveillance, employee management systems, attendance tracking, and payroll functionalities.",
        },
        {
          id: 3,
          title: "AI Assistants",
          desc: "Utilize AI-powered office assistants to schedule meetings, broadcast messages, and handle announcements, enhancing productivity and communication.",
        },
      ],
    },
    {
      id: 7,
      title: "Showrooms & Stores",
      img: "/images/view-building-with-cartoon-style-architecture-removebg-preview.png",
      desc: "We transform e-commerce by creating 3D virtual showrooms and stores where customers can experience products in a lifelike virtual environment. Examples include:",
      example: [
        {
          id: 1,
          title: "Automobile Showrooms",
          desc: "Explore detailed virtual models of cars, including exact dimensions, engine sounds, and interiors. Test drive vehicles in a virtual setting to get a true sense of their features and performance.",
        },
        {
          id: 2,
          title: "Retail Stores",
          desc: "Browse and interact with virtual products, experiencing them as if they were physically present, which enhances customer engagement and decision-making.",
        },
      ],
    },
    {
      id: 8,
      title: "Tourism",
      img: "/images/view-3d-video-game-controller-removebg-preview(1).png",
      desc: "Our tourism applications offer immersive previews of hotels, restaurants, and exotic destinations, allowing users to explore and experience these locations before their visit. Features include:",
      example: [
        {
          id: 1,
          title: "Virtual Hotel Tours",
          desc: "Walk through virtual representations of hotel rooms, lobbies, and amenities, experiencing the ambiance and details as if you were actually there.",
        },
        {
          id: 2,
          title: "Destination Previews",
          desc: "Visit nearby sights and attractions in 3D space, giving you a sense of what to expect and helping you plan your travel itinerary with confidence.",
        },
      ],
    },
  ];

  function getItemsPerPage() {
    return window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
  }

  useEffect(() => {
    function handleResize() {
      setItemsPerPage(getItemsPerPage());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Update prevIndex whenever currentIndex changes
    setPrevIndex(currentIndex);
  }, [currentIndex]);

  const handleArenaClick = (arena) => {
    setSelectedArena(arena);
  };

  const handleCloseDialog = () => {
    setSelectedArena(null);
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, _3DArena.length - itemsPerPage)
        : prevIndex - itemsPerPage
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= _3DArena.length ? 0 : prevIndex + itemsPerPage
    );
  };

  useEffect(() => {
    if (arenaRef.current) {
      arenaRef.current.classList.add(
        currentIndex > prevIndex ? "animate-slideIn" : "animate-slideOut"
      );
      setTimeout(() => {
        arenaRef.current.classList.remove(
          "animate-slideIn",
          "animate-slideOut"
        );
      }, 500); // match animation duration
    }
  }, [currentIndex, prevIndex]);

  return (
    <section className="flex flex-col w-full p-6 bg-gradient-to-b from-indigo-800 via-blue-500 to-blue-300">
      <h6 className="text-white w-full p-3  text-2xl lg:text-6xl font-varela">
        3D Arena
      </h6>
      <div className="flex w-full h-auto p-6">
        <p className="text-lg md:text-2xl font-varela text-white">
          At Xertz Studios, we lead the way in developing cutting-edge AR, MR,
          and VR solutions designed to cater to the diverse needs of various
          industries. From virtual education centers and immersive games to
          advanced simulators and product design applications, we create 3D
          experiences that elevate user engagement, improve processes, and fuel
          innovation. Our expertise includes building virtual showrooms, remote
          offices, and tourism applications that provide highly interactive and
          realistic environments. With a commitment to pushing the limits of AR,
          VR, and MR technology, we help businesses bring their ideas to life,
          transforming how industries operate and interact with technology,
          while delivering impactful and engaging experiences.
        </p>
      </div>
      <div className="flex flex-col w-full h-auto">
        <h2 className="text-white w-full p-3 text-2xl font-varela">
          Our Products
        </h2>
        <div className="relative flex justify-center items-center w-full overflow-hidden">
          <button
            onClick={showPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            {"<"}
          </button>
          <div
            ref={arenaRef} // Assign the ref to the arena items container
            className="flex flex-row w-[100%] h-auto justify-evenly items-center p-8 mx-8 overflow-x-auto"
          >
            {_3DArena
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((arena) => (
                <div
                  key={arena.id}
                  className="group flex flex-col justify-center p-4 items-start bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 min-w-[200px] min-h-[200px] mx-2 transition-transform duration-300 rounded-3xl relative cursor-pointer"
                  onClick={() => handleArenaClick(arena)}
                >
                  <div className="absolute inset-0 flex items-center justify-end pr-2 text-white font-bold text-[80px] group-hover:translate-x-[-10%] transition-transform duration-300 opacity-20 z-0">
                    {arena.id}
                  </div>
                  <div className="absolute top-4 right-4 transform translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={arena.img}
                      alt={arena.title}
                      className="w-[140px] h-auto"
                    />
                  </div>
                  <p className="text-white font-bold font-varela my-2 text-center z-10">
                    {arena.title}
                  </p>
                  <p className="text-white text-center z-10 font-varela">
                    AR/ MR/ VR
                  </p>
                </div>
              ))}
          </div>
          <button
            onClick={showNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            {">"}
          </button>
        </div>
      </div>
      {selectedArena && (
        <Dialog arena={selectedArena} onClose={handleCloseDialog} />
      )}
      <div className="flex w-full h-auto p-6">
        <p className="text-lg md:text-2xl font-varela text-white">
          At Xertz Studios, we are dedicated to pushing the boundaries of
          what&#39;s possible with AR, VR, and MR technologies. Our solutions
          are designed to enhance user experiences, streamline processes, and
          drive innovation across various sectors. Discover how we can help you
          transform your ideas into immersive realities—reach out to us at 
           <strong>Info@xertzstudios.com</strong> to explore our services and start your journey
          into the future of technology.
        </p>
      </div>
    </section>
  );
}
