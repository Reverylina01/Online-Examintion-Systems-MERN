import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import "./Login.css";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errortxt, setErrortxt] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5001/api/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/take-exam", { replace: true });
        window.location.reload(); // Ensure navbar update
      } else {
        setErrortxt(response.data.message);
        handleShow();
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      setErrortxt(errorMessage);
      handleShow();
    }

    setIsLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={authSubmitHandler}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password">
            <span>Forgot Password?</span>
          </div>
          <button type="submit" className="login-btn">
            LOGIN
          </button>
          <div className="login-divider">Or login with</div>
          <div className="social-buttons">
            <button className="social-btn facebook">Facebook</button>
            <button className="social-btn instagram">Instagram</button>
          </div>
          <div className="signup-link">
            Don’t have an account? <span onClick={() => navigate("/register")} style={{ cursor: "pointer", color: "blue" }}>Signup Now</span>
          </div>
        </form>
      </div>
      {isLoading && <LoadingSpinner asOverlay />}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errortxt}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserLogin;
