import React, { useEffect, useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Admin/Login";
import Navbar from "./components/Bar/Navbar";
import Home from "./components/pages/Home";
import Courses from "./components/pages/OurCourses";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import UserLogin from "./components/pages/UserLogin";
import TakeExam from "./components/Student/TakeExam";
import CreateExam from "./components/Admin/CreateExam";
import Dashboard from "./components/Admin/Dashboard";
import EditExam from "./components/Admin/EditExam";
import ManageStudents from "./components/Admin/ManageStudents";
import AboutUs from "./components/pages/About.js";
import UserGuidelines from "./components/pages/UserGuidelines.js";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.js";
import CreateCategory from "./components/Admin/CreateCategory.js";
import Category from "./components/Admin/Category.js";
import EditCategory from "./components/Admin/EditCategory.js";
import CourseList from './components/pages/CourseList.js';
import CoursePage from './components/pages/CoursePage.js';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  const userType = localStorage.getItem('usertype');
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/take-exam" element={<TakeExam />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/courses" element={<Courses />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/CourseList" element={<CourseList/>} />
        <Route path="/course/:id" element={<CoursePage />} />
       <Route path="/user-guidelines" element={<UserGuidelines />} />

   
      <Route
        path={`/${process.env.REACT_APP_ADMIN_ROUTE}`}
        element={<Dashboard />}
      />
        <Route path="/admin/create-exam" element={<CreateExam />} />
        <Route path="/admin/edit-exam/:id" element={<EditExam />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/students" element={<ManageStudents />} />
        <Route path="/admin/dashbord" element={<Dashboard />} />
        <Route path="/admin/category"element={<Category/>}/>
        <Route path="/admin/category/edit-category"element={<EditCategory/>}/>
        <Route path="/admin/category/create-category"element={<CreateCategory/>}/>
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
};

export default App;
