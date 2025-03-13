import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <main className="w-100 mt-5">
        {isLogin ? (
          <div className="login-container">
            <h4 className="text-center mb-4">Welcome Back</h4>
            <button className="social-login">
              <i className="fab fa-google" />
              Continue with Google
            </button>
            <button className="social-login">
              <i className="fab fa-github" />
              Continue with GitHub
            </button>
            <div className="divider">
              <span>or</span>
            </div>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="remember" />
                  <label className="form-check-label text-secondary" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#" className="signup-link">
                  Forgot password?
                </a>
              </div>
              <Link to="/dashboard">
            <button type="submit" className="login-btn" style={{background:"#94d2cc", color:"white",border:"none"}}>
              Log In
            </button>
          </Link>
              <p className="text-center mb-0">
                <span className="text-secondary">Don't have an account?</span>
                <a href="#" className="signup-link ms-1" onClick={toggleForm}>
                  Sign up
                </a>
              </p>
            </form>
          </div>
        ) : (
          <div className="signup-container">
            <h4 className="text-center mb-4">Create Account</h4>
            <button className="social-signup">
              <i className="fab fa-google" />
              Continue with Google
            </button>
            <button className="social-signup">
              <i className="fab fa-github" />
              Continue with GitHub
            </button>
            <div className="divider">
              <span>or</span>
            </div>
            <form>
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First name"
                    />
                    <label htmlFor="firstName">First name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last name"
                    />
                    <label htmlFor="lastName">Last name</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password</label>
                <div className="form-text mt-2">
                  Password must be at least 8 characters long
                </div>
              </div>
              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="terms" />
                <label className="form-check-label text-secondary" htmlFor="terms">
                  I agree to the{" "}
                  <a href="#" className="login-link">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="login-link">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button type="submit" className="btn btn-signup mb-3" style={{background:"#94d2cc", color:"white",border:"none"}}>
                Create Account
              </button>
              <p className="text-center mb-0">
                <span className="text-secondary">Already have an account?</span>
                <a href="#" className="signup-link ms-1" onClick={toggleForm}>
                  Sign in
                </a>
              </p>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Login;