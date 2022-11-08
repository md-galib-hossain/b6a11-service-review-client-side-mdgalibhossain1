import { Button } from "bootstrap";
import React from "react";
import { ButtonGroup, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
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
            <h2 className="navLink d-inline-block ms-2">Photography Service</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <button className="btn-grad">
              <Nav.Link>
                <Link to="/books" className="btn-custom">
                  All Books
                </Link>
              </Nav.Link>
            </button>
            <button className="btn-grad">
              <Nav.Link>
                <Link to="/blog" className="btn-custom">
                  Blog
                </Link>
              </Nav.Link>
            </button>
          </Nav>
          <Nav>
            {/* <Nav.Link>
              {user?.uid ? (
                <>
                  <Button
                    onClick={handleLogOut}
                    className="headerButton"
                    variant="light"
                  >
                    Logout
                  </Button>

                  <span className="userName">{user?.displayName}</span>
                </>
              ) : (
                <>
                  <ButtonGroup>
                    <Link to="/login">
                      <Button
                        className="headerButton"
                        variant="outline-warning"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="headerButton" variant="outline-dark">
                        Signup
                      </Button>
                    </Link>
                  </ButtonGroup>
                </>
              )}
            </Nav.Link> */}
            <Nav.Link>
              {/* {user?.photoURL ? (
                <a title={user?.displayName}>
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                </a>
              ) : (
                <FaUser />
              )} */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
