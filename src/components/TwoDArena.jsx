import React, { useState } from "react";

export default function TwoDArena() {
  const _2DArena = [
    {
      id: 1,
      title: "Android Applications",
      Technologies: [
        {
          id: 1,
          title: "Programming Languages:",
          desc: "Kotlin, Java",
        },
        {
          id: 2,
          title: "Frameworks & Libraries:",
          desc: "Android SDK, Jetpack Compose, Retrofit, Dagger/Hilt",
        },
        {
          id: 3,
          title: "Development Tools:",
          desc: "Android Studio, Firebase, Google Cloud Platform",
        },
        {
          id: 4,
          title: "Design:",
          desc: "Material Design Guidelines, XML for UI layout",
        },
      ],
      helpBusinesses: [
        {
          id: 1,
          title: "Wider Reach",
          desc: "Android applications allow businesses to tap into a vast and diverse user base, given Android’s dominant market share in the mobile space.",
        },
        {
          id: 2,
          title: "Customizable Solutions",
          desc: "Tailored Android apps can meet specific business needs, from customer engagement to internal management.",
        },
        {
          id: 3,
          title: "Enhanced User Experience",
          desc: "By leveraging modern Android features and design principles, businesses can offer intuitive and high-performing apps that drive user satisfaction and retention.",
        },
        {
          id: 4,
          title: "Integration Capabilities",
          desc: "Android apps can integrate seamlessly with other Google services and APIs, enhancing functionality and connectivity.",
        },
      ],
    },
    {
      id: 2,
      title: "iOS Applications",
      Technologies: [
        {
          id: 1,
          title: "Programming Languages:",
          desc: "Swift, Objective-C",
        },
        {
          id: 2,
          title: "Frameworks & Libraries:",
          desc: "UIKit, SwiftUI, Core Data, Combine",
        },
        {
          id: 3,
          title: "Development Tools:",
          desc: "Xcode, TestFlight, Apple Developer Program",
        },
        {
          id: 4,
          title: "Design:",
          desc: "Human Interface Guidelines (HIG), Storyboards, Auto Layout",
        },
      ],
      helpBusinesses: [
        {
          id: 1,
          title: "Premium User Experience",
          desc: "iOS applications deliver a polished and consistent experience across Apple devices, which can enhance brand reputation and user loyalty.",
        },
        {
          id: 2,
          title: "Security and Privacy",
          desc: "iOS apps benefit from Apple's stringent security measures and privacy policies, ensuring data protection and user trust.",
        },
        {
          id: 3,
          title: "High Revenue Potential",
          desc: "The iOS App Store is known for higher consumer spending, providing businesses with lucrative revenue opportunities.",
        },
        {
          id: 4,
          title: "Innovative Features",
          desc: "Leveraging iOS-specific features such as Face ID, ARKit, and Apple Pay can create unique and engaging user experiences.",
        },
      ],
    },
    {
      id: 3,
      title: "Web Applications",
      Technologies: [
        {
          id: 1,
          title: "Frontend Technologies:",
          desc: "HTML5, CSS3, JavaScript (React, Angular, Vue.js)",
        },
        {
          id: 2,
          title: "Backend Technologies:",
          desc: "Node.js, Ruby on Rails, Django, ASP.NET",
        },
        {
          id: 3,
          title: "Databases:",
          desc: "MySQL, PostgreSQL, MongoDB",
        },
        {
          id: 4,
          title: "Development Tools:",
          desc: "Visual Studio Code, Webpack, Docker",
        },
        {
          id: 5,
          title: "Design",
          desc: "Responsive Design, UX/UI Best Practices",
        },
      ],
      helpBusinesses: [
        {
          id: 1,
          title: "Accessibility",
          desc: "Web applications are accessible from any device with an internet connection, providing flexibility and convenience for users.",
        },
        {
          id: 2,
          title: "Scalability",
          desc: "Web apps can be easily scaled to handle increased traffic and feature expansions, accommodating business growth.",
        },
        {
          id: 3,
          title: "Cost-Effective",
          desc: "Development and maintenance of web applications can be more cost-effective compared to native apps, with the ability to serve both desktop and mobile users from a single codebase.",
        },
        {
          id: 4,
          title: "Real-Time Updates",
          desc: "Web applications enable instant updates and changes, ensuring that users always have access to the latest features and content.",
        },
      ],
    },
    {
      id: 4,
      title: "Computer Applications",
      Technologies: [
        {
          id: 1,
          title: "Programming Languages:",
          desc: "C++, C#, Java, Python",
        },
        {
          id: 2,
          title: "Frameworks & Libraries:",
          desc: ".NET Framework, Qt, Electron, JavaFX",
        },
        {
          id: 3,
          title: "Development Tools:",
          desc: "Visual Studio, IntelliJ IDEA, Eclipse",
        },
        {
          id: 4,
          title: "Databases:",
          desc: "SQL Server, SQLite, Oracle",
        },
      ],
      helpBusinesses: [
        {
          id: 1,
          title: "Enhanced Productivity",
          desc: "Custom computer applications streamline workflows, automate repetitive tasks, and improve overall efficiency in business operations.",
        },
        {
          id: 2,
          title: "Advanced Functionality",
          desc: "Desktop applications can offer robust features and complex functionalities that are essential for specialized tasks and high-performance computing.",
        },
        {
          id: 3,
          title: "Integration with Other Systems",
          desc: "Computer applications can integrate with other enterprise systems, databases, and tools to provide comprehensive solutions for managing business processes.",
        },
        {
          id: 4,
          title: "Data Management",
          desc: "Securely handle large volumes of data and perform sophisticated data analysis to support decision-making and strategic planning.",
        },
      ],
    },
  ];

  const [selectedSection, setSelectedSection] = useState(_2DArena[0]);

  const handleClick = (sectionId) => {
    setSelectedSection(_2DArena.find((section) => section.id === sectionId));
  };

  return (
    <section className="flex flex-col w-full p-6 bg-gradient-to-b from-blue-300 via-blue-500 to-indigo-800">
      <h6 className="text-white w-full p-3 text-2xl lg:text-6xl font-varela">
        2D Arena
      </h6>
      <div className="flex w-full h-auto p-6">
        <p className="text-lg md:text-2xl font-varela text-white">
          At Xertz Studios, we offer a comprehensive range of 2D solutions
          designed to enhance business operations, improve user engagement, and
          drive digital transformation. Our expertise spans Android and iOS
          applications, web applications, and computer applications, each
          tailored to meet the unique needs of our clients.
        </p>
      </div>
      <div className="hidden lg:flex flex-row w-full justify-evenly items-center h-auto p-6">
        {_2DArena.map((section) => (
          <div
            key={section.id}
            className="group flex flex-col items-center p-2"
          >
            <div className="flex items-center">
              <p
                className="text-white text-2xl font-varela group-hover:text-gray-300 duration-300 cursor-pointer"
                onClick={() => handleClick(section.id)}
              >
                {section.title}
              </p>
            </div>
            <div className="bg-white h-1 rounded-full mt-2 transition-all duration-300 group-hover:animate-scaleWidth" />
          </div>
        ))}
      </div>
      <div className="lg:hidden flex flex-col w-full justify-evenly items-center h-auto p-6">
        {_2DArena.map((section) => (
          <div key={section.id} className="flex p-2">
            <p
              className="text-white text-md font-varela hover:text-gray-300 duration-300 hover:cursor-pointer"
              onClick={() => handleClick(section.id)}
            >
              {section.title}
            </p>
            <div className="bg-white w-auto h-[10px] rounded-3xl"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-full h-auto rounded-3xl">
        <div className="flex flex-col justify-center lg:justify-start p-4 w-11/12 m-4 h-auto rounded-3xl ">
          {selectedSection && (
            <div className="bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 p-4  lg:p-10 rounded-2xl shadow-2xl  hover:shadow-lg">
              <div className="mb-12">
                <h6 className="text-white text-2xl lg:text-4xl font-varela font-bold tracking-wide mb-6">
                  Technologies & Tools
                </h6>
                <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-8">
                  {selectedSection.Technologies.map((tech) => (
                    <div
                      key={tech.id}
                      className="bg-white p-6 rounded-lg shadow-md my-4 transform transition-transform hover:scale-105 duration-300"
                    >
                      <p className="text-indigo-600 font-varela font-extrabold text-xl lg:text-2xl mb-2">
                        {tech.title}
                      </p>
                      <p className="text-gray-700 font-varela text-lg">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h6 className="text-white text-2xl lg:text-4xl font-varela font-bold tracking-wide mb-6">
                  How {selectedSection.title} Helps Businesses
                </h6>
                <div className="grid grid-cols-1 gap-8">
                  {selectedSection.helpBusinesses.map((help) => (
                    <div
                      key={help.id}
                      className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 duration-300"
                    >
                      <p className="text-indigo-600 font-varela font-extrabold  text-xl lg:text-2xl mb-2">
                        {help.title}
                      </p>
                      <p className="text-gray-700 font-varela text-lg">{help.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full h-auto p-6">
        <p className="text-lg md:text-2xl font-varela text-white">
          At Xertz Studios, we are committed to delivering high-quality 2D
          solutions that address the specific needs of your business. Our
          expertise in Android and iOS app development, web applications, and
          computer applications ensures that we can provide innovative,
          reliable, and impactful solutions to help your business succeed in the
          digital age. Reach out to us at Info@xertzstudios.com to explore how
          our 2D solutions can drive your business forward.
        </p>
      </div>
    </section>
  );
}
