import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("usertype", "admin");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="avatar">
          <img src="https://via.placeholder.com/80" alt="User Avatar" />
        </div>
        <h2>LOGIN FORM</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            LOGIN
          </button>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember"> Keep me signed in on this device</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
