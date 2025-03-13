import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-left">
          <img
            src="https://ubuddy.app/school_admin/assets/img/login.png"
            alt="Tablet UI"
          />
          <h2>UserPro simplifies administrative tasks for</h2>
          {/* <p>Manage fees, schedules, exams, and grading effortlessly.</p> */}
        </div>
        <div className="login-box-container">
          <h2>Log in</h2>
          <label className="login-input-label">Unique identifier</label>
          <input
            type="text"
            className="login-input-field"
            placeholder="Enter User ID"
          />
          <label className="login-input-label">Password</label>
          <input
            type="password"
            className="login-input-field"
            placeholder="Password"
          />
          <Link to="/dashboard">
            {" "}
            <button type="submit" className="login-btn" style={{background:"#ff6b00", color:"white",border:"none"}}>
              Log In
            </button>
          </Link>
          <p className="login-forgot-password">Forgot your password?</p>
        </div>
      </div>
    </>
  );
};

export default Login;
