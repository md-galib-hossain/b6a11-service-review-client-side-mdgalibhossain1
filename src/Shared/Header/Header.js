import { Button } from "bootstrap";
import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { ButtonGroup, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <Navbar className="mb-4 custom-box " collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="navLogo" to="/">
            <img
              alt=""
              src={"https://i.ibb.co/qgNwSJW/camera.png"}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            <h4 className="navLink d-inline-block ms-2">Photography Service</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/services" className="btn-custom">
              <button className="btn-grad">All Services</button>
            </Link>

            <Link to="/blog" className="btn-custom">
              <button className="btn-grad">Blog</button>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link>
              {user?.uid ? (
                <div className="grid grid-cols-4 place-content-center justify-center ">
                  <Link to="/myreviews" className="btn-custom">
                    <button className="btn-grad">My reviews</button>
                  </Link>
                  <Link to="/addservice" className="btn-custom">
                    <button className="btn-grad">Add Service</button>
                  </Link>
                  <Link to="" className="btn-custom">
                    <button onClick={handleLogout} className="btn-grad">
                      Logout
                    </button>
                  </Link>

                  <span className="  py-3">
                    <p>{user?.displayName}</p>
                  </span>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 place-content-center justify-around ">
                    <Link to="/login" className="btn-custom">
                      <button className="btn-grad">Login</button>
                    </Link>
                    <Link to="/signup" className="btn-custom">
                      <button className="btn-grad">Signup</button>
                    </Link>
                  </div>
                </>
              )}
            </Nav.Link>

            <Nav.Link>
              {user?.photoURL ? (
                <a title={user?.displayName}>
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                </a>
              ) : (
                <FaUser />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
