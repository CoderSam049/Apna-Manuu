import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import dropDownSvg from "../../public/assets/other/arrow-drop-up-line.svg";
import "../styles/header.css";
import { NavLink } from "react-router-dom";
import logo from "../../public/assets/home-img/logoapnamanuu.png";

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
    if (!event.target.closest(".explore-sec")) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <img src={logo} alt="MANUU Logo" className="h-12 w-12 object-contain" />
          <span className="text-xl font-semibold ">
            Apna MANUU <span className="text-red-500">♥</span>
          </span>
        </NavLink>

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

            {/* Animated Dropdown Menu */}
            <AnimatePresence>
              {dropDown && (
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="course"
                >
                  <li><NavLink to="/dsaSheet" activeClassName="active">DSA Sheet</NavLink></li>
                  <li><NavLink to="/test" activeClassName="active">Core Subject</NavLink></li>
                  <li><NavLink to="/development" activeClassName="active">Development </NavLink></li>
                  <li><NavLink to="/resources" activeClassName="active"> Resources </NavLink></li>
            
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li><NavLink to="/notes" activeClassName="active">Notes</NavLink></li>
          <li>
            <a href="https://manuu.edu.in/" target="_blank" rel="noopener noreferrer">
              Notification
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
