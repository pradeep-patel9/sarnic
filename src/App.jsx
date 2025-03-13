import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Login from './components/Auth/Login';
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Dashbord from "./components/AdminComponents/Dashbord/Dashbord";
import Project from "./components/AdminComponents/Project/Project";
import NewProject from "./components/AdminComponents/Project/NewProject";
import Job from "./components/AdminComponents/Job/Job";
import ExcelImportJob from "./components/AdminComponents/Job/ExcelImportJob";
import Production from "./components/AdminComponents/Production/Production";
import CreateProduction from "./components/AdminComponents/Production/CreateProduction";
import Traffic from "./components/AdminComponents/Traffic/Traffic";
import CreateTrafficList from "./components/AdminComponents/Traffic/CreateTrafficList";


const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();

  const hideLayout = location.pathname === "/";


  return (
    <>
<div className="Main-App">
{!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
      <div className={`Main-App-container ${hideLayout ? "no-sidebar" : ""}`}>
      {!hideLayout && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        <div className="Main-App-Content">
          <Routes>
          <Route path="/" element={<Login />} />
            {/* Dashbord */}
          <Route path="/dashboard" element={<Dashbord />} />
            {/* Dashbord */}
           
            {/* project */}
          <Route path="/projects" element={<Project />} />
          <Route path="/newprojects" element={<NewProject />} />
            {/* project */}
           
            {/* job */}
          <Route path="/job" element={<Job />} />
          <Route path="/excelimportjob" element={<ExcelImportJob />} />
            {/* job */}

            {/* production */}
          <Route path="/production" element={<Production />} />
          <Route path="/createproduction" element={<CreateProduction />} />
            {/* production */}

            {/* traffic */}
          <Route path="/traffic" element={<Traffic />} />
          <Route path="/createtrafficlist" element={<CreateTrafficList />} />
            {/* traffic */}

          </Routes>
        </div>
      </div>
    </div>
    </>
  )
}
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;