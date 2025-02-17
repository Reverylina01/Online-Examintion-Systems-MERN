import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineBook, AiOutlineInfoCircle, AiOutlineUserAdd, AiOutlineLogin, AiFillAlipaySquare, AiFillAliwangwang } from "react-icons/ai";
import { FaUserShield, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication status on component mount
  useEffect(() => {
    const user = localStorage.getItem("user"); // Check if user is logged in
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Online-Exam</div>
        <ul className="nav-links">
          <li><a href="/"><AiOutlineHome className="icon" /> Home</a></li>
          {!isAuthenticated && (
            <>
              <li><a href="/register"><AiOutlineUserAdd className="icon" /> Register</a></li>
              <li><a href="/login"><AiOutlineLogin className="icon" /> Login</a></li>
            </>
          )}
          <li><a href="/admin/login"><FaUserShield className="icon" /> Admin</a></li>
          {isAuthenticated && (
            <>
              <li><a href="/courses"><AiOutlineBook className="icon" /> Free Courses</a></li>
              <li><a href="/CourseList"><FaStar className="icon" /> Premium Courses</a></li>
              <li><a href="/take-exam"><AiFillAliwangwang className="icon" /> Take-Exam</a></li>
              <li><a href="/about"><AiOutlineInfoCircle className="icon" /> About</a></li>
              <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
