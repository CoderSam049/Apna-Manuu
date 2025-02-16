import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const resources = [
    {
      title: "Full Stack Web Development with AI & ML Integration",
      description: "Python aur Django ka use karte hue Full Stack Web Development, Machine Learning aur Artificial Intelligence ka integration seekhein.",
      youtubeLink: "https://www.udemy.com/course/full-stack-web-developer-django-python-machine-learning-hindi-urdu/"
    },
    {
      title: "Data Science Interview Questions",
      description: "Data Science ke interview questions aur unke solutions ko samjhein.",
      youtubeLink: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPkl7oRvzyNnyj1HS4wt2K-"
    },
    {
      title: "Python 3.4 Programming Tutorials",
      description: "Python 3.4 programming ke tutorials jo aapko programming ke basics se advanced topics tak le jayenge.",
      youtubeLink: "https://www.youtube.com/playlist?list=PL6gx4Cwl9DGAcbMi1sH6oAMk4JHw91mC_"
    },
    {
      title: "AWS for Beginners in Hindi",
      description: "AWS ke various cloud services ko samjhein is Hindi course ke madhyam se.",
      youtubeLink: "https://www.mygreatlearning.com/academy/learn-for-free/courses/aws-for-beginners-in-hindi"
    },
    {
      title: "All-in-One: Machine Learning, Deep Learning, NLP, AWS Deployment [Hindi][Python]",
      description: "Complete hands-on Machine Learning course jo Data Science, NLP, Deep Learning aur Artificial Intelligence cover karta hai.",
      youtubeLink: "https://www.udemy.com/course/fundamentals-of-machine-learning-hindi/"
    },
    {
      title: "Learn DevOps in Hindi",
      description: "DevOps ke concepts aur practices ko Hindi me samjha gaya hai is playlist me.",
      youtubeLink: "https://www.youtube.com/playlist?list=PLEiEAq2VkUUKI8E3wUXRwkw5ZfWo2EjjC"
    },
    {
      title: "Cloud and DevOps (Hindi)",
      description: "Cloud computing aur DevOps ke topics ko Hindi me cover kiya gaya hai is playlist me.",
      youtubeLink: "https://www.youtube.com/playlist?list=PLU-1fkvbalvs_S9OE0js6OylYbJGx1Kla"
    },
    {
      title: "AWS Learning Hindi Video Series",
      description: "AWS ke various topics ko Hindi me samjhaya gaya hai is video series me.",
      youtubeLink: "https://www.youtube.com/playlist?list=PL7hViGzcNpEthjG5m3ymNfMbRgx_JV1Ms"
    }
  ];
  

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technology Resources 📚
      </motion.h1>

      {/* Sections for Each Resource */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-3">{resource.title}</h2>
            <p className="text-gray-300">{resource.description}</p>

            {/* YouTube Playlist */}
            <div className="mt-4">
              <NavLink
                to={resource.youtubeLink}
                target="_blank"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                🎥 Watch YouTube Playlist
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
