// TestPage.js
import React from 'react';
import SubjectCard from './SubjectCard'; // Adjust the path as necessary
import "../styles/testpage.css";

const TestPage = () => {
  const subjects = [
    { title: 'Software Engineering', link: '/test/softwareEng' },
    { title: 'Microprocessor & Interface', link: '/test/microprocessor' },
    { title: 'Data Structures', link: '/test/dsa' },
    { title: 'React Js', link: '/test/react' },
    { title: 'CommingSonn....', link: '/test/chn' },
    { title: 'CommingSonn....', link: '/test/chn' },
    { title: 'CommingSonn....', link: '/test/chn' },
  ];

  return (
    <>
    <h1 className='heading'><marquee behavior="scroll" scrollamount="15" direction="left">
          Welcome to Test Page
        </marquee></h1>
        
    <div className="testpage">
     
    

      <div className="subject-info">
        {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            title={subject.title}
            link={subject.link}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default TestPage;
