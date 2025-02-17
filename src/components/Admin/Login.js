import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import { Link, Route } from "react-router-dom";

import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const adminID = process.env.REACT_APP_ADMIN_ID;
  const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

  console.log(adminID, adminPassword);
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [errortxt, setErrortxt] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const [isModalOpen, setIsModalOpen] = useState(false);
  //const [errorMessage, setErrorMessage] = useState('');

  const inputHandler1 = (event) => {
    setEmail(event.target.value);
  };
  const inputHandler2 = (event) => {
    setPasword(event.target.value);
  };
  
  return (
    <div>
      <main class="form-signin">
        <form onSubmit={"authSubmitHandler"}>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onInput={inputHandler1}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onInput={inputHandler2}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <Link to={"/admin/dashbord"}>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </Link>
          <p class="mt-5 mb-3 text-muted">&copy; 2025–2026</p>
        </form>
      </main>

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
export default Login;