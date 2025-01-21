import React, { useState, useEffect } from "react";
import dropDownSvg from "../../public/assets/other/arrow-drop-up-line.svg"; // 
import "../styles/header.css";
import { NavLink } from 'react-router-dom';


const Header = () => {
  const [navList, setNavList] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const toggleNavList = () => {
    setNavList(!navList);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.explore-sec')) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="brand">Apna MANUU &hearts;</div>

        {/* Toggle button for mobile menu */}
        <div onClick={toggleNavList} className="menu-toggle" id="mobile-menu">
          &#9776;
        </div>

        {/* Navigation list */}
        <ul
          className={`nav-list ${navList ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
        >
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          
          <li className="explore-sec">
            <div className="dropDown" onClick={toggleDropDown}>
              <NavLink to="/test" activeClassName="active">Explore</NavLink>
              <img className="dropDownImg" src={dropDownSvg} alt="dropDown" />
            </div>

            {/* Dropdown menu */}
            {dropDown && (
              <ul className="course">
                <li><NavLink to="/dsaSheet" activeClassName="active">DSA Sheet</NavLink></li>
                <li><NavLink to="/test" activeClassName="active">Core Subject</NavLink></li>
                <li>Development</li>
                <li>Resource</li>
              </ul>
            )}
          </li>

          <li><NavLink to="/notes" activeClassName="active">Notes</NavLink></li>
          <li>
            <a
              href="https://manuu.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notification
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;









