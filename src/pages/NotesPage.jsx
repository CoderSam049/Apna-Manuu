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
    <div style={styles.container}>
      <h1 style={{  marginBottom: '1rem',}}>Download Notes <br />
        by Samir</h1>
      <div style={styles.grid}>
        {notesData.map((note, index) => (
          <div key={index} style={styles.card}>
            <img src={note.image} alt={note.title} style={styles.image} />
            <h3>{note.title}</h3>
            <p>Download Notes Here</p>
            <a href={note.pdfLink} target="_blank" style={styles.button}>PDF Notes</a>

          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',

    maxWidth:'1200px',
    marginInline:'auto'

  
  },
  grid: {
  
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '10px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '40px 30px',
    width: '290px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },

  image: {
    width: '150px',
    height: '150px',
    marginBottom: '15px',
    borderRadius:'18%'
  },
  button: {
    display: 'inline-block',
    padding: '10px 15px',
    margin: '10px 0',
    backgroundColor: '#6C63FF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default NotesPage;
