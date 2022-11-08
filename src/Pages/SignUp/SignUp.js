import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import { Container } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setError(e);
        console.error(e.message);
      });
  };
  return (
    <>
      <Container className="grid grid-cols-3">
        <div className=""></div>
        <Form onSubmit={handleSubmit} className="custom-form mt-36 ">
          <h2>Sign up</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="username"
              type="name"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Text className="text-danger">{error}</Form.Text>
          <Link to="/login" className="">
            Already have an account? Login Now
          </Link>
          <Button variant="primary" type="submit" className="w-full mt-2">
            Signup
          </Button>
        </Form>
        <div className=""></div>
      </Container>
    </>
  );
};

export default SignUp;
