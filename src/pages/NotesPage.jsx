import React from 'react';

const notesData = [
  {
    title: 'CSE Syllabus',
    image: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/diplomacs.png',
    pdfLink: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/1_to_6th_sem_syllabus%5B1%5D.pdf',

  },
  {
    title: 'Python Notes',
    image: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/python.png',
    pdfLink: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/pythonnotes.pdf',

  },
  {
    title: 'C Notes',
    image: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/c.png',
    pdfLink: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/C-ProgrammingNotes.pdf',
  
  },
  {
    title: 'Chemistry notes',
    image: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/chemistry.png',
    pdfLink: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/chemistry.pdf',
   
  },
  {
    title: 'DBMS',
    image: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/dbms.png',
    pdfLink: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/dbmsnotes.pdf',
  
  },
  {
    title: 'DLD Notes',
    image: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/dld.png',
    pdfLink: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/dld.pdf',

  },
  {
    title: 'Software Eng.. Notes',
    image: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/softwareeng.png',
    pdfLink: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/Softwareengineeringnotes_compressed.pdf',
  
  },
  {
    title: 'Datastructure notes',
    image: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/datastructure.png',
    pdfLink: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/datastructure.pdf',
   
  },

  {
    title: 'CSS',
    image: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/css.png',
    pdfLink: 'https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/cssnotes.pdf',
  
  },
  {
    title: ' Other CommingSoon..',
    image: '/',
    pdfLink: '/',
  
  },
];


const NotesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Download Notes
          <br />
          <span className="text-3xl">by Samir Khan</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {notesData.map((note, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="p-6 space-y-5">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
                  {note.image !== '/' ? (
                    <img 
                    src={note.image} 
                    alt={note.title}
                    className="h-40 w-40 object-contain transition-transform duration-500 group-hover:scale-110 rounded-3xl shadow-sm"
                  />
                  ) : (
                    <div className="text-center space-y-2">
                      <div className="text-6xl">📚</div>
                      <span className="text-gray-500 font-medium">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 text-center truncate">
                    {note.title}
                  </h3>
                  
                  {note.pdfLink !== '/' ? (
                    <a
                      href={note.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mx-auto w-full max-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Download</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                    </a>
                  ) : (
                    <button 
                      className="w-full px-6 py-3 bg-gray-100 text-gray-400 cursor-not-allowed font-medium rounded-lg transition-all"
                      disabled
                    >
                      Available Soon
                    </button>
                  )}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;