import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dropDownImg from "../../public/assets/other/dropdown.png";
import dropDownSvg from "../../public/assets/other/arrow-drop-up-line.svg";
import "../styles/header.css";



export default function Header() {
  const [navList, setNavList] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  // Toggle the nav list
  const toggleNavList = (e) => {
    e.stopPropagation();
    setNavList((prev) => !prev);
  };

  // Toggle the dropdown menu
  const toggleDropDown = (e) => {
    e.stopPropagation();
    setDropDown((prev) => !prev);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const closeMenus = () => {
      setNavList(false);
      setDropDown(false);
    };

    document.addEventListener("click", closeMenus);
    return () => document.removeEventListener("click", closeMenus);
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
          <li className="explore-sec">
            <div className="dropDown" onClick={toggleDropDown}>
              <Link to="/test">Explore</Link>
             <img className="dropDownImg" src={dropDownSvg} alt="dropDown" />
            </div>

            {/* Dropdown menu */}
            {dropDown && (
              <ul className="course">
                <li><Link to="/dsaSheet">DSA Sheet</Link></li>
                <li><Link to="/test">Core Subject</Link></li>
                <li>Development</li>
                <li>Resource</li>
              </ul>
            )}
          </li>

          <li><Link to="/notes">Notes</Link></li>
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
}
