import React, { useState } from "react";

export default function AiArena() {
  const AiArena = [
    {
      id: 1,
      title: "Custom AI Development",
      Technologies: [
        {
          id: 1,
          title: "Programming Languages:",
          desc: "Python, R, Java, C++",
        },
        {
          id: 2,
          title: "Frameworks & Libraries:",
          desc: "TensorFlow, PyTorch, Keras, Scikit-Learn",
        },
        {
          id: 3,
          title: "Tools & Platforms:",
          desc: "Google Cloud AI, Microsoft Azure AI, IBM Watson",
        },
        {
          id: 4,
          title: "Algorithms:",
          desc: "Neural Networks, Decision Trees, Natural Language Processing (NLP), Computer Vision",
        },
      ],
      helpBusinesses: [
        {
          id: 1,
          title: "Enhanced Decision-Making",
          desc: "Custom AI solutions analyze complex data sets, providing actionable insights that improve decision-making and strategic planning.",
        },
        {
          id: 2,
          title: "Automation",
          desc: "AI automates repetitive tasks, reducing human error and increasing operational efficiency.",
        },
        {
          id: 3,
          title: "Personalization",
          desc: "AI-driven algorithms tailor customer experiences, from personalized recommendations to targeted marketing strategies, enhancing engagement and satisfaction.",
        },
        {
          id: 4,
          title: "Predictive Analytics",
          desc: "Businesses can leverage AI to forecast trends, optimize resources, and anticipate market changes.",
        },
      ],
    },
    {
      id: 2,
      title: "Data Services for AI",
      Technologies: [
        {
          id: 1,
          title: "Data Storage:",
          desc: "AWS S3, Google Big Query, Azure Blob Storage",
        },
        {
          id: 2,
          title: "Data Processing:",
          desc: "Apache Hadoop, Apache Spark, ETL Tools",
        },
        {
          id: 3,
          title: "Data Management:",
          desc: "SQL, NoSQL Databases, Data Lakes",
        },
        {
          id: 4,
          title: "Data Annotation & Labeling:",
          desc: "Custom tools for supervised learning, annotation platforms",
        },
      ],
      helpBusinesses: [
        {
          id: 1,
          title: "Data Quality",
          desc: "AI enhances data cleaning, integration, and validation processes, ensuring high-quality data for accurate model training and analysis.",
        },
        {
          id: 2,
          title: "Efficiency",
          desc: "Automated data processing speeds up data handling and reduces manual labor, allowing for real-time analytics and faster insights.",
        },
        {
          id: 3,
          title: "Scalability",
          desc: "AI technologies manage and analyze large volumes of data efficiently, supporting scalable data solutions for growing businesses.",
        },
        {
          id: 4,
          title: "Enhanced Accuracy",
          desc: "AI-driven algorithms improve the precision of data analysis and prediction models, leading to more reliable outcomes and business strategies.",
        },
      ],
    },
    {
      id: 3,
      title: "AI Integration &amp; Development",
      Technologies: [
        {
          id: 1,
          title: "Integration Platforms:",
          desc: "Apache Kafka, MuleSoft, Zapier",
        },
        {
          id: 2,
          title: "Development Tools:",
          desc: "Docker, Kubernetes, CI/CD Pipelines",
        },
        {
          id: 3,
          title: "APIs &amp; Services:",
          desc: "RESTful APIs, GraphQL, OpenAI, IBM Watson",
        },
        {
          id: 4,
          title: "Machine Learning Models:",
          desc: "Pre-trained models, Custom model development",
        },
      ],
      helpBusinesses: [
        {
          id: 1,
          title: "Streamlined Operations",
          desc: "AI integration connects disparate systems, automating workflows and enhancing operational efficiency.",
        },
        {
          id: 2,
          title: "Enhanced User Experiences",
          desc: "Integrating AI into applications provides features like chatbots, virtual assistants, and recommendation engines that improve user interactions.",
        },
        {
          id: 3,
          title: "Innovation",
          desc: "AI development fosters innovation by creating new products and services that solve complex problems and address emerging needs.",
        },
        {
          id: 4,
          title: "Competitive Advantage",
          desc: "Businesses leveraging AI gain a competitive edge through advanced analytics, automation, and personalized customer experiences.",
        },
      ],
    },
    {
      id: 4,
      title: "AI Education",
      Technologies: [
        {
          id: 1,
          title: "AI Frameworks:",
          desc: "TensorFlow, PyTorch",
        },
        {
          id: 2,
          title: "Natural Language Processing (NLP):",
          desc: "BERT, GPT-3",
        },
        {
          id: 3,
          title: "Interactive Platforms:",
          desc: "Custom-built AI tutors, Adaptive learning technologies",
        },
        {
          id: 4,
          title: "Data Analytics:",
          desc: "Real-time performance tracking, Learning analytics tools",
        },
      ],
      helpBusinesses: [
        {
          id: 1,
          title: "Personalized Learning",
          desc: "AI tutors provide tailored educational experiences, adapting to individual learning styles and needs.",
        },
        {
          id: 2,
          title: "24/7 Support",
          desc: "AI tutors are available around the clock, offering assistance and answering questions without fatigue or irritation.",
        },
        {
          id: 3,
          title: "Enhanced Engagement",
          desc: "Interactive and adaptive learning tools keep students engaged and motivated by providing relevant and challenging content.",
        },
        {
          id: 4,
          title: "Instant Feedback",
          desc: "AI-driven platforms offer immediate feedback on assignments and quizzes, helping students understand and improve their performance in real-time.",
        },
      ],
    },
    {
      id: 5,
      title: "AI Product Development",
      Technologies: [
        {
          id: 1,
          title: "Development Platforms:",
          desc: "TensorFlow Extended (TFX), Apache MXNet",
        },
        {
          id: 2,
          title: "Product Management Tools:",
          desc: "Jira, Confluence, Asana",
        },
        {
          id: 3,
          title: "AI Models:",
          desc: "Custom neural networks, Reinforcement learning, Generative models",
        },
        {
          id: 4,
          title: "Deployment Solutions:",
          desc: "Cloud-based services, Edge computing",
        },
      ],
      helpBusinesses: [
        {
          id: 1,
          title: "Innovation",
          desc: "AI product development drives the creation of groundbreaking products that push the boundaries of technology and meet emerging needs.",
        },
        {
          id: 2,
          title: "Efficiency",
          desc: "AI-enhanced products automate and optimize various processes, increasing productivity and reducing operational costs.",
        },
        {
          id: 3,
          title: "Scalability",
          desc: "AI-powered products can be scaled to accommodate growing user bases and evolving market demands, supporting business expansion and adaptation.",
        },
        {
          id: 4,
          title: "Competitive Edge",
          desc: "Companies that invest in AI product development gain a technological advantage, positioning themselves as leaders in their respective industries.",
        },
      ],
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleAiDiv = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section  className="flex flex-col w-full p-4 md:p-6 bg-gradient-to-b from-indigo-800 via-blue-500 to-blue-300">
      <h6 className="text-white w-full p-3 text-2xl lg:text-6xl font-varela">
        AI Arena
      </h6>

      <div className="flex w-full h-auto p-6">
        <p className="text-lg md:text-2xl font-varela text-white">
          At Xertz Studios, we harness the power of Artificial Intelligence (AI)
          to create innovative solutions that drive business success and enhance
          everyday experiences. Our AI solutions cover a range of applications,
          from custom development to education, providing comprehensive support
          to meet diverse needs.
        </p>
      </div>

      <div className="flex flex-col items-center w-full p-4 md:p-6">
        <section className="flex flex-col justify-center items-center w-full md:w-[80%] rounded-3xl p-4 md:p-6 shadow-lg">
          <div className="space-y-6 w-full">
            {AiArena.map((ai) => (
              <div
                key={ai.id}
                className="relative bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-700 w-full p-4 md:p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <div
                  className="flex justify-between items-center cursor-pointer text-white"
                  onClick={() => toggleAiDiv(ai.id)}
                >
                  <p className="text-lg md:text-xl font-semibold font-varela tracking-wide hover:text-yellow-300 transition-colors duration-300">
                    {ai.title}
                  </p>
                  <p className="text-2xl hover:text-yellow-300 transition-colors duration-300">
                    {expanded === ai.id ? "-" : "+"}
                  </p>
                </div>

                {/* Expanded Content */}
                {expanded === ai.id && (
                  <div className="mt-4 bg-gradient-to-br from-indigo-900 via-blue-800 to-teal-600 p-4 md:p-6 rounded-lg border-l-4 border-orange-400 shadow-lg">
                    <div className="mb-6">
                      <h3 className="text-lg md:text-xl font-bold font-varela text-white mb-3">
                        Technologies
                      </h3>
                      <ul className="list-disc pl-5 text-gray-300">
                        {ai.Technologies.map((tech) => (
                          <li
                            key={tech.id}
                            className="text-sm font-varela md:text-base mb-2"
                          >
                            <strong className="text-orange-400">
                              {tech.title}
                            </strong>
                            : {tech.desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-varela font-bold text-white mb-3">
                        How it Helps Businesses
                      </h3>
                      <ul className="list-disc pl-5 text-gray-300">
                        {ai.helpBusinesses.map((help) => (
                          <li
                            key={help.id}
                            className="text-sm font-varela md:text-base mb-2"
                          >
                            <strong className="text-orange-400">
                              {help.title}
                            </strong>
                            : {help.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex w-full h-auto p-6">
        <p className="text-lg md:text-2xl font-varela text-white">
          At Xertz Studios, we are committed to delivering advanced AI solutions
          that drive innovation, efficiency, and growth. Whether you need custom
          AI development, data services, integration, educational tools, or
          product development, we provide the expertise and technology to
          support your business objectives. Reach out to us at
          Info@xertzstudios.com to explore how our AI solutions can transform
          your business and shape the future of technology.
        </p>
      </div>
    </section>
  );
}
