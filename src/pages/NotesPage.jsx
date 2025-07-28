import { motion } from "framer-motion";
import notesData from "./notesData";

const NotesPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

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
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {notesData.map((note, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden group backdrop-blur-sm bg-opacity-80"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 30px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-6">
              {/* Image with enhanced hover effect */}
              <motion.div
                className="relative h-40 flex items-center justify-center bg-gray-700 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {note.image !== "/" ? (
                  <img
                    src={note.image}
                    alt={note.title}
                    className="h-32 rounded-xl object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <motion.div
                    className="text-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-6xl">📚</div>
                    <span className="text-gray-400">Coming Soon</span>
                  </motion.div>
                )}
              </motion.div>

              {/* Content with enhanced effects */}
              <motion.h3
                className="text-xl font-semibold text-center mt-4 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                {note.title}
              </motion.h3>

              {note.pdfLink !== "/" ? (
                <motion.a
                  href={note.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 mx-auto w-full max-w-[180px] px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg text-center transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(234, 179, 8, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download
                </motion.a>
              ) : (
                <motion.button
                  className="block mt-4 mx-auto w-full max-w-[180px] px-5 py-2 bg-gray-600 text-gray-300 font-semibold rounded-lg text-center cursor-not-allowed"
                  disabled
                  whileHover={{ opacity: 0.8 }}
                >
                  Available Soon
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NotesPage;
