import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import RotatingIcon from "./RotatingIcon";
import { Link } from "react-router-dom";

export default function Navbar01() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [innerActiveDropdown, setInnerActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const dropdownRefs = useRef({});
  const [rotatedStates, setRotatedStates] = useState({});

  const mainNavHeaders = [
    { text: "What is Xertz", href: "/" },
    { text: "What we Craft", href: "/arena" },
    { text: "Our Craftsmanship", href: "/" },
    { text: "Investors", href: "/" },
    { text: "Careers", href: "/" },
  ];

  const sanitizeDropdownName = (name) => {
    if (typeof name !== "string") {
      console.error("sanitizeDropdownName: Expected a string but got:", name);
      return ""; // Return an empty string or a default value as needed
    }
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const WhatIsXertz = [
    { text: "Who we Are ?", href: "/#who-we-are" },
    { text: "What we Do !", href: "/#what-we-do" },
    { text: "Our Mission", href: "/#mission" },
    { text: "Industrial Collaboration", href: "/#industrial-collaboration" },
  ];

  const WhatWeCraft = [
    { text: "3D Arena", href: "/arena#three-d-arena" },
    { text: "2D Arena", href: "/arena#two-d-arena" },
    { text: "AI Arena", href: "/arena#ai-arena" },
  ];

  const OurCraftsmanship = [
    {
      id: 1,
      title: "Organizational Craft",
      links: ["Xertz Nest", "Global Remote Virtual Office"],
    },
    {
      id: 2,
      title: "Educational Craft",
      links: [
        "3D Virtual Classrooms",
        "3D Mech-Lab-Simulation",
        "3D AI Powered Tutor for Grade 1st to 8th Math & Science",
      ],
    },
    {
      id: 3,
      title: "Healthy Craft",
      links: ["Xertz Fitness 3D Trainer"],
    },
    {
      id: 4,
      title: "Entertaining Craft",
      links: ["3D Piano Teacher & Simulator", "3D Drum Roll & Simulator"],
    },
    {
      id: 5,
      title: "Travellers's Craft",
      links: ["Kash_Quest Application"],
    },
    {
      id: 6,
      title: "Community Services",
      links: ["Nikah_e_Tamadun"],
    },
    {
      id: 7,
      title: "Gaming Craft",
      links: ["Rage Rider", "Death Battle", "Fly High", "Heist"],
    },
  ];

  const Investors = [
    {
      id: "JoinOrganization",
      title: "Join Our Organization",
      links: ["Sign Up"],
    },
    {
      id: "WelcomeInvestors",
      title: "Welcome Investors",
      links: ["Sign In"],
    },
    {
      id: "PartnerWithUs",
      title: "Partner With Us",
      links: ["Sign Up", "Sign In"],
    },
  ];

  const Careers = [
    {
      id: 1,
      title: "Join Our Organization",
      links: ["Sign Up Application"],
    },
    {
      id: 2,
      title: "Check Application Status",
      links: ["Log In"],
    },
    {
      id: 3,
      title: "Career Opportunities",
      links: ["Available Opportunities", "Apply For Future Opportunities"],
    },
  ];

  const toggleRotation = (id) => {
    setRotatedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the specific icon's rotation state
    }));
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const cancelDropdown = () => {
    setActiveDropdown(null);
    setRotatedStates({});
  };

  useEffect(() => {
    if (activeDropdown) {
      const element = dropdownRefs.current[activeDropdown];
      if (element) {
        const rect = element.getBoundingClientRect();
        const sanitizedClassName = sanitizeDropdownName(activeDropdown);
        const dropdown = document.querySelector(
          `.dropdown-${sanitizedClassName}`
        );

        if (dropdown) {
          const dropdownRect = dropdown.getBoundingClientRect();

          let top = rect.bottom + window.scrollY; // Adjust for page scroll
          let left = rect.left + window.scrollX; // Added window.scrollX for horizontal alignment

          // Adjust position if dropdown goes beyond the viewport on the right
          if (left + dropdownRect.width > window.innerWidth) {
            left = window.innerWidth - dropdownRect.width - 16; // 16px for padding
          }

          // Adjust position if dropdown goes beyond the viewport on the bottom
          if (top + dropdownRect.height > window.innerHeight + window.scrollY) {
            top = rect.top + window.scrollY - dropdownRect.height - 8; // 8px for padding
          }

          setDropdownPosition({ top, left });
        }
      }
    }
  }, [activeDropdown]); // Run only when `activeDropdown` changes

  return (
    <>
      <div className="relative hidden lg:flex flex-row justify-between items-center w-full h-[100px] bg-blue-900 backdrop-blur-md">
        <h2 className="flex mx-4 text-2xl text-white font-varela">
          Xertz Studios
        </h2>
        <div className="flex flex-row justify-center items-center">
          {mainNavHeaders.map((header, index) => (
            <div
              key={index}
              className="relative flex flex-row mx-2 items-center"
            >
              <Link
                to={header.href}
                ref={(el) => (dropdownRefs.current[header.text] = el)} // Use header.text instead of header
                className="text-white text-xl mx-2 font-varela"
              >
                {header.text}
              </Link>
              <button
                onClick={() => toggleDropdown(header.text)}
                className="flex justify-center items-center text-white text-xl"
              >
                <RotatingIcon
                  id={`icon${index}`} // Unique ID based on index or header
                  rotated={rotatedStates[`icon${index}`]} // Pass the state for the icon
                  toggleRotation={() => toggleRotation(`icon${index}`)} // Toggle state for the icon
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      {activeDropdown && (
        <div
          className={` z-[9999] fixed mt-2 bg-blue-900 text-white w-48 rounded shadow-lg dropdown-${sanitizeDropdownName(
            activeDropdown
          )}`}
          style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        >
          {activeDropdown === "What is Xertz" && (
            <>
              {WhatIsXertz.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block px-4 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                  onClick={cancelDropdown}
                >
                  {item.text}
                </Link>
              ))}
            </>
          )}
          {activeDropdown === "What we Craft" && (
            <>
              {WhatWeCraft.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center mt-2 cursor-pointer"
                >
                  <Link
                    to={item.href}
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={cancelDropdown}
                  >
                    {item.text}
                  </Link>
                </div>
              ))}
            </>
          )}
          {activeDropdown === "Our Craftsmanship" && (
            <>
              {OurCraftsmanship.map((item, index) => (
                <div key={index} className="mt-2">
                  <h3 className="px-2 py-1 text-lg font-bold">{item.title}</h3>
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      to="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                      onClick={cancelDropdown}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              ))}
            </>
          )}
          {activeDropdown === "Investors" && (
            <>
              {Investors.map((item, index) => (
                <div key={index} className="mt-2">
                  <h3 className="px-2 py-1 text-lg font-bold">{item.title}</h3>
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      to="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                      onClick={cancelDropdown}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              ))}
            </>
          )}
          {activeDropdown === "Careers" && (
            <>
              {Careers.map((item, index) => (
                <div key={index} className="mt-2">
                  <h3 className="px-2 py-1 text-lg font-bold">{item.title}</h3>
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      to="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                      onClick={cancelDropdown}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
}
