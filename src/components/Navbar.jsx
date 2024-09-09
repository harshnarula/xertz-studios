import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import RotatingIcon from "./RotatingIcon";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [innerActiveDropdown, setInnerActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const dropdownRefs = useRef({});
  const [rotatedStates, setRotatedStates] = useState({});

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
    setRotatedStates({})
  };

  useEffect(() => {
    if (activeDropdown) {
      const element = dropdownRefs.current[activeDropdown];
      if (element) {
        const rect = element.getBoundingClientRect();
        const dropdown = document.querySelector(`.dropdown-${activeDropdown}`);

        if (dropdown) {
          const dropdownRect = dropdown.getBoundingClientRect();

          let top = rect.bottom + window.scrollY;
          let left = rect.left;

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
        <h2 className="flex mx-4 text-2xl text-white font-varela">Xertz Studios</h2>
        <div className="flex flex-row justify-center items-center">
          {/* Menu 1 */}
          <div className="relative flex flex-row mx-2 items-center">
            <Link
              to="/"
              ref={(el) => (dropdownRefs.current["xertz"] = el)}
              className="text-white text-xl mx-2 font-varela"
            >
              What is Xertz
            </Link>
            <button
              onClick={() => toggleDropdown("xertz")}
              className="flex justify-center items-center text-white text-xl"
            >
              <RotatingIcon
                id="icon1"
                rotated={rotatedStates['icon1']} // Pass the state for icon1
                toggleRotation={() => toggleRotation('icon1')} // Toggle state for icon1
                setRotatedStates={setRotatedStates}
              />
            </button>
          </div>

          {/* Menu 2 */}
          <div className="relative flex flex-row mx-2 items-center">
            <Link
              to="/arena"
              ref={(el) => (dropdownRefs.current["craft"] = el)}
              className="text-white text-xl mx-2 font-varela"
            >
              What we Craft
            </Link>
            <button
              onClick={() => toggleDropdown("craft")}
              className="flex justify-center items-center text-white text-xl"
            >
              <RotatingIcon
                id="icon2"
                rotated={rotatedStates['icon2']} // Pass the state for icon1
                toggleRotation={() => toggleRotation('icon2')} // Toggle state for icon1
                setRotatedStates={setRotatedStates}
              />
            </button>
          </div>

          {/* Menu 3 */}
          <div className="relative flex flex-row mx-2 items-center">
            <a
              ref={(el) => (dropdownRefs.current["craftsmanship"] = el)}
              className="text-white text-xl mx-2 font-varela"
            >
              Our Craftsmanship
            </a>
            <button
              onClick={() => toggleDropdown("craftsmanship")}
              className="flex justify-center items-center text-white text-xl"
            >
              <RotatingIcon
                id="icon3"
                rotated={rotatedStates['icon3']} // Pass the state for icon1
                toggleRotation={() => toggleRotation('icon3')} // Toggle state for icon1
                setRotatedStates={setRotatedStates}
                
              />
            </button>
          </div>

          {/* Menu 4 */}
          <div className="relative flex flex-row mx-2 items-center">
            <a
              ref={(el) => (dropdownRefs.current["investors"] = el)}
              className="text-white text-xl mx-2 font-varela"
            >
              Investors
            </a>
            <button
              onClick={() => toggleDropdown("investors")}
              className="flex justify-center items-center text-white text-xl"
            >
              <RotatingIcon
                id="icon4"
                rotated={rotatedStates['icon4']} // Pass the state for icon1
                toggleRotation={() => toggleRotation('icon4')} // Toggle state for icon1
                setRotatedStates={setRotatedStates}
              />
            </button>
          </div>

          {/* Menu 5 */}
          <div className="relative flex flex-row mx-2 items-center">
            <a
              ref={(el) => (dropdownRefs.current["careers"] = el)}
              className="text-white text-xl mx-2 font-varela"
            >
              Careers
            </a>
            <button
              onClick={() => toggleDropdown("careers")}
              className="flex justify-center items-center text-white text-xl"
            >
              <RotatingIcon
                id="icon5"
                rotated={rotatedStates['icon5']} // Pass the state for icon1
                toggleRotation={() => toggleRotation('icon5')} // Toggle state for icon1
                setRotatedStates={setRotatedStates}
              />
            </button>
          </div>
        </div>
      </div>
      {activeDropdown && (
        <div
          className={` z-[9999] fixed mt-2 bg-blue-900 text-white w-48 rounded shadow-lg dropdown-${activeDropdown}`}
          style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        >
          {activeDropdown === "xertz" && (
            <>
              <Link
                to="/#who-we-are"
                className="block px-4 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                onClick={cancelDropdown}
              >
                Who we Are ?
              </Link>
              <Link
                to="/#what-we-do"
                className="block px-4 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                onClick={cancelDropdown}
              >
                What we Do !
              </Link>
              <Link
                to="/#mission"
                className="block px-4 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                onClick={cancelDropdown}
              >
                Our Mission
              </Link>
              <Link
                to="/#industrial-collaboration"
                className="block px-4 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                onClick={cancelDropdown}
              >
                Industrial Collaborations
              </Link>
            </>
          )}
          {activeDropdown === "craft" && (
            <>
              {/* Main container for "3D Arena" with nested dropdown */}
              <div className="flex flex-col justify-center items-center w-auto h-auto">
                <Link
                  to="/arena#three-d-arena"
                  className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela font-varela"
                  onClick={cancelDropdown}
                >
                  3D Arena
                </Link>
              </div>

              {/* Separate items for "2D Arena" and "Ai Arena" */}

              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <Link
                  to="/arena#two-d-arena"
                  className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela font-varela"
                  onClick={cancelDropdown}
                >
                  2D Arena
                </Link>
              </div>

              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <Link
                  to="/arena#ai-arena"
                  className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela font-varela"
                  onClick={cancelDropdown}
                >
                  AI Arena
                </Link>
              </div>
            </>
          )}

          {activeDropdown === "craftsmanship" && (
            <>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "OrganizationalCraft"
                          ? null
                          : "OrganizationalCraft"
                      )
                    }
                  >
                    Organizational Craft
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "OrganizationalCraft"
                          ? null
                          : "OrganizationalCraft"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "OrganizationalCraft" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Xertz Nest
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Global Remote Virtual Office
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "EducationalCraft"
                          ? null
                          : "EducationalCraft"
                      )
                    }
                  >
                    Educational Craft
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "EducationalCraft"
                          ? null
                          : "EducationalCraft"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "EducationalCraft" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      3d virtual Classrooms
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      3d Mech-Lab-Simulation
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      3d AI Powered Tutor for Grade 1st to 8th Math & Science
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "HealthyCraft"
                          ? null
                          : "HealthyCraft"
                      )
                    }
                  >
                    Healthy Craft
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "HealthyCraft"
                          ? null
                          : "HealthyCraft"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "HealthyCraft" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Xertz Fitness 3D Trainer
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "EntertainingCraft"
                          ? null
                          : "EntertainingCraft"
                      )
                    }
                  >
                    Entertaining Craft
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "EntertainingCraft"
                          ? null
                          : "EntertainingCraft"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "EntertainingCraft" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      3D Piano Teacher & Simulator
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      3D Drum Roll & Simulator
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "TravellersCraft"
                          ? null
                          : "TravellersCraft"
                      )
                    }
                  >
                    Travellers's Craft
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "TravellersCraft"
                          ? null
                          : "TravellersCraft"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "TravellersCraft" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Kash_Quest Application
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "CommunityServices"
                          ? null
                          : "CommunityServices"
                      )
                    }
                  >
                    Community Services
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "CommunityServices"
                          ? null
                          : "CommunityServices"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "CommunityServices" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Nikah_e_Tamadun
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "GamingCraft"
                          ? null
                          : "GamingCraft"
                      )
                    }
                  >
                    Gaming Craft
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "GamingCraft"
                          ? null
                          : "GamingCraft"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "GamingCraft" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Rage Rider
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Death Battle
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Fly High
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Hiest
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
          {activeDropdown === "investors" && (
            <>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "JoinOrganization"
                          ? null
                          : "JoinOrganization"
                      )
                    }
                  >
                    Join Our Organization
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "JoinOrganization"
                          ? null
                          : "JoinOrganization"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "JoinOrganization" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Sign Up
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "WelcomeInvestors"
                          ? null
                          : "WelcomeInvestors"
                      )
                    }
                  >
                    Welcome Investors
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "WelcomeInvestors"
                          ? null
                          : "WelcomeInvestors"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "WelcomeInvestors" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Sign In
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "PartnerWithUs"
                          ? null
                          : "PartnerWithUs"
                      )
                    }
                  >
                    Partner With Us
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "PartnerWithUs"
                          ? null
                          : "PartnerWithUs"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "PartnerWithUs" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Sign Up
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Sign In
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
          {activeDropdown === "careers" && (
            <>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "JoinOurOrganization"
                          ? null
                          : "JoinOurOrganization"
                      )
                    }
                  >
                    Join Our Organization
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "JoinOurOrganization"
                          ? null
                          : "JoinOurOrganization"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "JoinOurOrganization" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Sign Up Application
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "ApplicationStatus"
                          ? null
                          : "ApplicationStatus"
                      )
                    }
                  >
                    Check Application Status
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "ApplicationStatus"
                          ? null
                          : "ApplicationStatus"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "ApplicationStatus" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Log In
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center mt-2 cursor-pointer">
                <div className="flex flex-row justify-center items-center">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "CareerOpportunities"
                          ? null
                          : "CareerOpportunities"
                      )
                    }
                  >
                    Career Opportunities
                  </a>
                  <IoMdArrowDropdown
                    className="text-xl"
                    onClick={() =>
                      setInnerActiveDropdown(
                        innerActiveDropdown === "CareerOpportunities"
                          ? null
                          : "CareerOpportunities"
                      )
                    }
                  />
                </div>

                {/* Dropdown content */}
                {innerActiveDropdown === "CareerOpportunities" && (
                  <div className="flex flex-col pl-4 mt-2 bg-blue-900 rounded shadow-lg">
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Available Opportunities
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 hover:border-b-2 rounded-xl hover:border-white duration-75 font-varela"
                    >
                      Apply For Future Opportunities
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
