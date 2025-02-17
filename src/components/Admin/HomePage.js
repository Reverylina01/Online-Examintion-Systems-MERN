import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomePage = () => {
  const navigate = useNavigate();

  const handleAdminLoginRedirect = () => {
    navigate("/admin/login");
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Online Exam System</h1>
      <p>Click the button below to access the admin panel.</p>
      <Button onClick={handleAdminLoginRedirect}>Admin Login</Button>
    </div>
  );
};

export default HomePage;
