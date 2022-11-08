import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

const Login = () => {
  const [error, setError] = useState("");
  const { providerLogin, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  // google signin
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <>
      <Container className="grid grid-cols-3">
        <div className=""></div>
        <Form onSubmit={handleSubmit} className="custom-form mt-36 ">
          <h2>Login</h2>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Link to="/signup" className="">
            Dont Have Account? Signup now
          </Link>
          <Form.Text className="text-danger">{error}</Form.Text>
          <Button
            variant="outline-primary"
            type="submit"
            className="w-full mt-2"
          >
            Submit
          </Button>
          <Button
            onClick={handleGoogleSignIn}
            variant="outline-danger"
            type="submit"
            className="w-full mt-2"
          >
            Login with google
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
