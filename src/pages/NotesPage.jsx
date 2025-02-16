import React from "react";
import { motion } from "framer-motion";

const notesData = [
  {
    title: "CSE Syllabus",
    image:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/diplomacs.png",
    pdfLink:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/1_to_6th_sem_syllabus%5B1%5D.pdf",
  },
  {
    title: "Python Notes",
    image:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/python.png",
    pdfLink:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/pythonnotes.pdf",
  },
  {
    title: "C Notes",
    image:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/c.png",
    pdfLink:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/C-ProgrammingNotes.pdf",
  },
  {
    title: "DBMS",
    image:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/dbms.png",
    pdfLink:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/dbmsnotes.pdf",
  },
  {
    title: "Data Structure",
    image:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/datastructure.png",
    pdfLink:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/datastructure.pdf",
  },
  {
    title: "DLD Notes",
    image:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/dld.png",
    pdfLink: "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/dld.pdf",
  },
  {
    title: "Software Engineering",
    image:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/softwareeng.png",
    pdfLink:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/Softwareengineeringnotes_compressed.pdf",
  },
  {
    title: "CSS Notes",
    image:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/css.png",
    pdfLink:
      "https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/cssnotes.pdf",
  },
  {
    title: "Other Coming Soon...",
    image: "/",
    pdfLink: "/",
  },
];

const NotesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-bold text-center mb-12 text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📚 Download Notes 🚀
        <br />
        <span className="text-2xl text-gray-400">by Samir Khan</span>
      </motion.h1>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {notesData.map((note, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-6">
              {/* Image */}
              <div className="relative h-40 flex items-center justify-center bg-gray-700 rounded-lg">
                {note.image !== "/" ? (
                  <img
                    src={note.image}
                    alt={note.title}
                    className="h-32 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-6xl">📚</div>
                    <span className="text-gray-400">Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-center mt-4">
                {note.title}
              </h3>

              {note.pdfLink !== "/" ? (
                <a
                  href={note.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 mx-auto w-full max-w-[180px] px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                >
                  Download
                </a>
              ) : (
                <button
                  className="block mt-4 mx-auto w-full max-w-[180px] px-5 py-2 bg-gray-600 text-gray-300 font-semibold rounded-lg text-center cursor-not-allowed"
                  disabled
                >
                  Available Soon
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
