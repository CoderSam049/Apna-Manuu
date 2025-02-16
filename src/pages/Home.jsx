import React from "react";
import { motion } from "framer-motion";
import pythonImg from "../../public/assets/home-img/python.png";
import machinelearning from "../../public/assets/home-img/machine.png";
import ai from "../../public/assets/home-img/a1.png";
import appDev from "../../public/assets/home-img/appdev.png";
import developer from "../../public/gif/developer.png";
import mobileDev from "../../public/gif/mobileDev.gif";
import development from "../../public/gif/webdevlopment.gif";
import wave from "../../public/assets/other/wave.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-5 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome to Our Coding Universe 🚀
            </h1>
            <p className="text-lg text-gray-300">
              Code, Learn, and Build your dream projects with us. 
              We provide the best resources to enhance your skills.
            </p>
            <div className="flex space-x-4">
              <a href="#learn-more" className="btn-primary">Learn More</a>
              <a href="#get-start" className="btn-secondary">Get Started</a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/student%20with%20study.jpg"
              alt="Hero Image"
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      
      </section>
    
      <hr/>
      <section id="get-start" className="py-20 px-5 md:px-20 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
    
    {/* Left Content */}
    <motion.div 
      className="md:w-1/2 space-y-6"
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-yellow-400">
        Learn, Teach, Grow, Collaborate 👏
      </h1>
      <p className="text-lg text-gray-300">
        Apna MANUU: Learn, teach, grow. A vibrant tech community for 
        enthusiasts, developers, and entrepreneurs. Explore trends, 
        collaborate on projects, and connect with like-minded individuals. 
        Unleash your geekiness and make a difference in technology. 
        Join us to innovate, learn, and grow together.
      </p>
      <Link to="/contact" className="btn-primary">Join Us Now </Link>
    </motion.div>

    {/* Right Image */}
    <motion.div
      className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={developer}
        alt="developer"
        className="rounded-lg shadow-lg w-full md:w-[70%]"
      />
    </motion.div>

  </div>
</section>

      <hr/>
      <div className="lining-svg bg-gray-900 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffa300"
              fill-opacity="1"
              d="M0,160L0,256L68.6,256L68.6,64L137.1,64L137.1,192L205.7,192L205.7,192L274.3,192L274.3,192L342.9,192L342.9,96L411.4,96L411.4,0L480,0L480,160L548.6,160L548.6,192L617.1,192L617.1,288L685.7,288L685.7,96L754.3,96L754.3,288L822.9,288L822.9,288L891.4,288L891.4,160L960,160L960,224L1028.6,224L1028.6,224L1097.1,224L1097.1,256L1165.7,256L1165.7,128L1234.3,128L1234.3,0L1302.9,0L1302.9,288L1371.4,288L1371.4,224L1440,224L1440,320L1371.4,320L1371.4,320L1302.9,320L1302.9,320L1234.3,320L1234.3,320L1165.7,320L1165.7,320L1097.1,320L1097.1,320L1028.6,320L1028.6,320L960,320L960,320L891.4,320L891.4,320L822.9,320L822.9,320L754.3,320L754.3,320L685.7,320L685.7,320L617.1,320L617.1,320L548.6,320L548.6,320L480,320L480,320L411.4,320L411.4,320L342.9,320L342.9,320L274.3,320L274.3,320L205.7,320L205.7,320L137.1,320L137.1,320L68.6,320L68.6,320L0,320L0,320Z"
            ></path>
          </svg>
        </div>

      {/* WHO ARE WE? Section */}
      <section className="py-20 px-5 md:px-20 bg-gray-800 text-white">
        <motion.h1 
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WHO ARE WE?
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <motion.div 
            className="space-y-4 bg-gray-700 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold text-yellow-400">Our Mission</h2>
            <p className="text-gray-300">
              Enhancing coding culture via regular classes, contests, and geeky sessions on campus.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4 bg-gray-700 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold text-yellow-400">Our Vision</h2>
            <p className="text-gray-300">
              Growing as a strong coding community, impacting various fields, upholding integrity worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-5 md:px-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.h1 
            className="text-4xl font-bold text-center text-yellow-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Features We Offer
          </motion.h1>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  
  {/* Python Feature */}
  <motion.div 
    className="feature-card"
    whileHover={{ scale: 1.05 }}
  >
    <img src={pythonImg} alt="Python" className="feature-img" />
    <h2>Python</h2>
    <p>Python is a high-level, easy-to-learn programming language with simple syntax...</p>
  </motion.div>

  {/* Machine Learning Feature */}
  <motion.div 
    className="feature-card"
    whileHover={{ scale: 1.05 }}
  >
    <img src={machinelearning} alt="Machine Learning" className="feature-img" />
    <h2>Machine Learning</h2>
    <p>Machine Learning enables AI systems to improve performance automatically...</p>
  </motion.div>

  {/* AI Feature */}
  <motion.div 
    className="feature-card"
    whileHover={{ scale: 1.05 }}
  >
    <img src={ai} alt="AI" className="feature-img" />
    <h2>Artificial Intelligence</h2>
    <p>AI enhances automation, personalization, and predictive analytics...</p>
  </motion.div>

</div>

        </div>
      </section>
    </>
  );
}
