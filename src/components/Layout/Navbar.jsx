import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ toggleSidebar }) => {
  return (
<>
<nav className="navbar">
      {/* title */}
      <h4 className="navbar-title animate-charcter " style={{ marginTop: "5px", marginLeft: "50px",fontFamily:" ui-monospace",fontSize:"30px", fontWeight:"600" }}>Sarnic</h4>

      <button onClick={toggleSidebar} className="toggle-button me-auto" style={{ marginLeft: "60px",width: "auto", }}>
        ☰
      </button>


      <div className="nav-notification-icon">
      <i class="fa-solid fa-bell"></i>
      </div>


      <div className="dropdown profile-elemen" style={{ marginRight: "40px" }}>
        <div className="me-2 fw-bold p-1 rounded-4 profile d-flex align-items-center"
          style={{ cursor: "pointer" }}
          data-bs-toggle="dropdown" aria-expanded="false">

          <div className="profile-element">
            <div className="avatar-online">
              <img style={{ width: "40px", borderRadius: "50%" }}
                src="https://i.ibb.co/6Jc9g6jF/user-11.jpg"
                alt="profile" />
              <span className="text-dark ms-2">User</span>
            </div>
          </div>
        </div>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <Link className="dropdown-item" to="/adminprofile">
              My Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Update Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/changepassword">
              Change Password
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
</>
  )
}

export default Navbar