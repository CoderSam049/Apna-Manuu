import React from "react";
import pythonImg from "../../public/assets/home-img/python.png";
import machinelearning from "../../public/assets/home-img/machine.png";
import ai from "../../public/assets/home-img/a1.png";
import appDev from "../../public/assets/home-img/appdev.png";

import developer from "../../public/gif/developer.png";
import mobileDev from "../../public/gif/mobileDev.gif";
import development from "../../public/gif/webdevlopment.gif";
import wave from "../../public/assets/other/wave.svg";

export default function Home() {
  return (
    <>
      <div className="hero">
        {/* Hero Content */}
        <div className="hero-content">
          {/* Hero Text */}
          <div className="hero-text">
            <h1 className="desc">Unlock Your Learning Potential</h1>
            <p>
              We bring your ideas to life with cutting-edge technology and
              design. Let's build something amazing together.
            </p>
            <div className="hero-buttons">
              <a href="#learn-more" className="btn primary">
                Learn More
              </a>
              <a href="#get-start" className="btn secondary">
                Get Started
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image">
            <img
              src="https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/student%20with%20study.jpg"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      <img className="svg-wave" src={wave} alt="wave" />
      <div className="h-line"></div>
      <main>
        <div className="secondpart">
          <section id="get-start" className="part-2">
            <div className="two">
              <div className="ourteam left">
                <h1>Learn, Teach, Grow, Collaborate 👏</h1>
                <p>
                  {" "}
                  Apna MANUU: Learn, teach, grow. A vibrant tech community for
                  enthusiasts, developers, and entrepreneurs. Explore trends,
                  collaborate on projects, and connect with like-minded
                  individuals. Unleash your geekiness and make a difference in
                  technology. Join us to innovate, learn, and grow together.
                </p>
              </div>
              <div className="right">
                <img src={developer} alt="developer" />
              </div>
            </div>
          </section>

          <section id="section-4">
            <h1>WHO ARE WE?</h1>
            <div className="container">
              <div className="card">
                <div className="icon">&#128187;</div>
                <h2>Mission</h2>
                <p>
                  Enhancing coding culture via regular classes, contests, and
                  geeky sessions on campus.
                </p>
              </div>
              <div className="card">
                <div className="icon">&#128100;</div>
                <h2>Vision</h2>
                <p>
                  Growing as a strong coding community, impacting various
                  fields, upholding integrity worldwide.
                </p>
              </div>
              <div className="card">
                <div className="icon">&#128161;</div>
                <h2>Value</h2>
                <p>
                  Believing in helping each other, taking care, and seeking the
                  best from everyone consistently.
                </p>
              </div>
              <div className="card">
                <div className="icon">&#128267;</div>
                <h2>Tech Awareness</h2>
                <p>
                  Help us reach tier-two and tier-three cities, enlightening
                  people on how tech education transforms lives.
                </p>
              </div>
              <div className="card">
                <div className="icon">&#128293;</div>
                <h2>Enthusiastic Mentor</h2>
                <p>
                  Finding like-minded, enthusiastic individuals crucial for your
                  goal through our network.
                </p>
              </div>
              <div className="card">
                <div className="icon">&#127752;</div>
                <h2>Diversity</h2>
                <p>
                  Understand diversity's vital role in generating ideas, team
                  building, and achieving maximum output.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="provide">
          <h1>Objective-</h1>
          <p>
            Our educational website offers a comprehensive range of features
            designed to enhance learning experiences. Users can access a vast
            library of educational resources, including articles, videos,
            quizzes, and interactive lessons. Personalized learning pathways
            cater to individual learning styles and preferences. Collaborative
            tools enable students to engage in discussions, group projects, and
            peer-to-peer learning. Additionally, our website provides progress
            tracking and assessment tools to monitor learning outcomes and
            measure academic growth.
          </p>
        </div>
        <div className="lining-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffa300"
              fill-opacity="1"
              d="M0,160L0,256L68.6,256L68.6,64L137.1,64L137.1,192L205.7,192L205.7,192L274.3,192L274.3,192L342.9,192L342.9,96L411.4,96L411.4,0L480,0L480,160L548.6,160L548.6,192L617.1,192L617.1,288L685.7,288L685.7,96L754.3,96L754.3,288L822.9,288L822.9,288L891.4,288L891.4,160L960,160L960,224L1028.6,224L1028.6,224L1097.1,224L1097.1,256L1165.7,256L1165.7,128L1234.3,128L1234.3,0L1302.9,0L1302.9,288L1371.4,288L1371.4,224L1440,224L1440,320L1371.4,320L1371.4,320L1302.9,320L1302.9,320L1234.3,320L1234.3,320L1165.7,320L1165.7,320L1097.1,320L1097.1,320L1028.6,320L1028.6,320L960,320L960,320L891.4,320L891.4,320L822.9,320L822.9,320L754.3,320L754.3,320L685.7,320L685.7,320L617.1,320L617.1,320L548.6,320L548.6,320L480,320L480,320L411.4,320L411.4,320L342.9,320L342.9,320L274.3,320L274.3,320L205.7,320L205.7,320L137.1,320L137.1,320L68.6,320L68.6,320L0,320L0,320Z"
            ></path>
          </svg>
        </div>
        <br />
        <br />

        <section
          id="learn-more"
          className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Web Development Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Web Development
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Join us to embark on your web development journey and become
                  part of a network committed to your growth and success. Web
                  development involves...
                </p>
                <a className="mt-2" href="https://roadmap.sh/full-stack">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Learning
                </button></a>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={development}
                  alt="Web Development"
                  className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>

            {/* Android Development Section */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                  Android Development
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  GeekHub welcomes you to the vibrant world of Android
                  Development, where innovation meets opportunity...
                </p>
                <a href="https://roadmap.sh/android">
                <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                  Explore Now
                </button></a>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={mobileDev}
                  alt="Android Development"
                  className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="feature" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* AI Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <span className="text-blue-600 font-semibold text-lg">
                  E-Learning
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Features of AI
                </h2>
                <p className="text-gray-600 leading-relaxed">
                AI empowers smart technologies with **machine learning, natural language processing, and computer vision**. It enhances **automation and decision-making**, making repetitive tasks faster and more accurate. **Predictive analytics and speech recognition** improve human interaction and data insights. AI also provides **personalization**, like Netflix and YouTube recommendations. In the future, AI will become even more intelligent and efficient.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={ai} alt="AI" className="w-full h-64 object-cover" />
              </div>
            </div>

            {/* Python Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6 order-last lg:order-first">
                <span className="text-yellow-600 font-semibold text-lg">
                  E-Learning
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Features of Python
                </h2>
                <p className="text-gray-600 leading-relaxed">
                Python is a **high-level, easy-to-learn** programming language with **simple syntax**. It is **dynamically typed** and **interpreted**, making debugging easier. Python supports **machine learning, AI, web development, and automation** through its vast libraries. It is **cross-platform**, running on Windows, macOS, and Linux. Due to its versatility, Python is widely used in **data science, software development, and scripting**.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={pythonImg}
                  alt="Python"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Machine Learning Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <span className="text-purple-600 font-semibold text-lg">
                  E-Learning
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Features of Machine Learning
                </h2>
                <p className="text-gray-600 leading-relaxed">
                Machine Learning (ML) is a part of AI that helps computers **learn from data** without explicit programming. It includes **supervised, unsupervised, and reinforcement learning** for different tasks. ML enables **predictive analytics**, improving decision-making in various industries. It finds patterns in data and enhances **automation and personalization**. ML is widely used in **healthcare, finance, and e-commerce** for smarter solutions.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={machinelearning}
                  alt="Machine Learning"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* App Development Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6 order-last lg:order-first">
                <span className="text-red-600 font-semibold text-lg">
                  E-Learning
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Features of App Development
                </h2>
                <p className="text-gray-600 leading-relaxed">
                App development involves creating **mobile and web applications** for different platforms. It includes **native apps** (Android/iOS) and **cross-platform apps** (Flutter, React Native). A strong **backend** (Node.js, Firebase) manages data and authentication. **UI/UX design** ensures a smooth user experience. App development is widely used in **business, gaming, and e-commerce**.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={appDev}
                  alt="App Development"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Technology 2050 Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <span className="text-green-600 font-semibold text-lg">
                  E-Learning
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Future Technology 2050
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  AI and Automation Dominate – AI will be deeply integrated into
                  daily tasks, from personal assistants to automated workflows.
                  Quantum Computing Advances – More breakthroughs in quantum
                  computing will revolutionize data processing and encryption.
                  Metaverse Growth – Virtual reality (VR) and augmented reality
                  (AR) will become more mainstream for work and social
                  interactions. 5G and Beyond – Faster internet speeds and lower
                  latency will boost IoT, smart cities, and seamless
                  connectivity.
                </p>
              </div>
              <div className="aspect-w-16 h-64 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/6_q_LHq85Cs"
                  className="w-full h-full"
                  title="Future Technology"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
