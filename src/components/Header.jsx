import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom"; // useLocation import kiya
import dropDownSvg from "../../public/assets/other/arrow-drop-up-line.svg";
import "../styles/header.css";
import logo from "../../public/assets/home-img/logoapnamanuu.png";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation(); // Current location track karne ke liye

  // Navigation change hone par menu aur dropdown close + page scroll to top
  useEffect(() => {
    setNavList(false);
    setDropDown(false);
    window.scrollTo(0, 0);
  }, [location.pathname]); // Jab bhi route change ho

  const toggleNavList = () => setNavList(!navList);
  const toggleDropDown = () => setDropDown(!dropDown);

  return (
    <header>
      <nav>
        <NavLink to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="MANUU Logo" className="h-12 w-12 object-contain" />
          <span className="text-xl font-semibold">Apna MANUU <span className="text-red-500">♥</span></span>
        </NavLink>

        {/* Toggle button for mobile menu */}
        <div onClick={toggleNavList} className="menu-toggle" id="mobile-menu">
          &#9776;
        </div>

        {/* Navigation list */}
        <ul className={`nav-list ${navList ? "show" : ""}`}>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>

          <li className="explore-sec">
            <div className="dropDown" onClick={toggleDropDown}>
              <NavLink to="/test">Explore</NavLink>
              <img className="dropDownImg" src={dropDownSvg} alt="dropDown" />
            </div>

            {/* Animated Dropdown Menu */}
            <AnimatePresence>
              {dropDown && (
                <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.2, ease: "easeOut" }} className="course">
                  <li><NavLink to="/dsaSheet">DSA Sheet</NavLink></li>
                  <li><NavLink to="/test">Core Subject</NavLink></li>
                  <li><NavLink to="/development">Development</NavLink></li>
                  <li><NavLink to="/resources">Resources</NavLink></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li><NavLink to="/notes">Notes</NavLink></li>
          <li><a href="https://manuu.edu.in/" target="_blank" rel="noopener noreferrer">Notification</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
