// SubjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';


const SubjectCard = ({ title, link }) => {
  return (
    <div className="subject-card">
      <h2>{title}</h2>
      <Link to={link}>
        <button className="subject-button ">Start Test</button>
      </Link>
    </div>
  );
};

export default SubjectCard;
