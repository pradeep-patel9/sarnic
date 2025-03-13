import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const [activeSubmenuPath, setActiveSubmenuPath] = useState(null);
    const navigate = useNavigate();
  
    const toggleMenu = (index) => {
      setOpenMenuIndex(openMenuIndex === index ? null : index);
    };
  
    const handlesubmenuclick = (menuindex, path) => {
      setActiveMenuIndex(menuindex);
      setActiveSubmenuPath(path);
      setOpenMenuIndex(null); // Close the submenu
      navigate(path);
    };
  
  return (
    <>
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
    {/* Sidebar toggle icon */}
    <div className="sidebar-toggle" onClick={toggleSidebar}>
    </div>

    <ul className="menu">
      {/* dashbord */}
      <li
        className={`menu-item ${activeMenuIndex === 0 ? "active" : ""}`}
        onClick={() => handlesubmenuclick(0, "/dashboard")}>
        <div className="menu-link">
          <i
            className="nav-icon fas fa-home menu-icon"
            style={{ color: "var(--first-color" }}
          />
          {isOpen && <span className="menu-text ">Dashboard</span>}
        </div>
      </li>
      {/* dashbord end */}

      {/* Projects */}
      <li
        className={`menu-item ${openMenuIndex === 1 ? "open" : ""} ${
          activeMenuIndex === 1 ? "active" : ""
        }`}
        onClick={() => handlesubmenuclick(1, "/projects")}>
        <div className="menu-link menu-i">
          
          <i
            className="nav-icon fa-solid fa-diagram-project menu-icon"
            style={{ color: "var(--second-color" }}
          />
          {isOpen && <span className="menu-text">Projects </span>}
          {/* <FaArrowRight  
            icon={openMenuIndex === 1 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{  background: "transparent", float: "inline-end" }}
          /> */}
        </div>
      </li>
      {/* Projects */}

      {/* job */}
      <li
        className={`menu-item ${openMenuIndex === 2 ? "open" : ""} ${
          activeMenuIndex === 2 ? "active" : ""
        }`}
        onClick={() => handlesubmenuclick(2, "/job")}>
        <div className="menu-link menu-i">
          <i
            className="nav-icon fa-solid fa-briefcase menu-icon"
            style={{ color: "var(--third-color" }}
            />
          {isOpen && <span className="menu-text"> Job </span>}
          {/* <FaArrowRight
            icon={openMenuIndex === 2 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
            /> */}
        </div>
      </li>
        {/* job */}

        {/*  production */}
        <li
        className={`menu-item ${openMenuIndex === 3 ? "open" : ""} ${
          activeMenuIndex === 3 ? "active" : ""
        }`}
        onClick={() => handlesubmenuclick(3, "/production")}>
        <div className="menu-link menu-i">
          <i
            className="nav-icon fa-solid fa-hands-holding-circle menu-icon"
            style={{ color: "var(--fourth-color" }}
          />
          {isOpen && <span className="menu-text"> Production </span>}
          {/* <FaArrowRight
            icon={openMenuIndex === 3 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
        </div>
      </li>
        {/*  production */}

        {/*  traffic */}
        <li
        className={`menu-item ${openMenuIndex === 4 ? "open" : ""} ${
          activeMenuIndex === 4 ? "active" : ""
        }`}
        onClick={() => handlesubmenuclick(4, "/traffic")}>
        <div className="menu-link menu-i">
          <i
            className="nav-icon fa-solid fa-list-check menu-icon"
            style={{ color: "var(--fifth-color" }}
          />
          {isOpen && <span className="menu-text">  Traffic </span>}
          {/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
        </div>
      </li>
        {/*  traffic */}
       
        {/*  designer */}
        <li
        className={`menu-item ${openMenuIndex === 5 ? "open" : ""} ${
          activeMenuIndex === 5 ? "active" : ""
        }`}
        onClick={() => handlesubmenuclick(5, "/designer")}>
        <div className="menu-link menu-i">
          <i
            className="nav-icon fa-solid fa-users-line menu-icon"
            style={{ color: "var(--fifth-color" }}
          />
          {isOpen && <span className="menu-text">  Designer </span>}
          {/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
        </div>
      </li>
        {/*  designer */}
    </ul>
  </div>
    </>
  )
}

export default Sidebar