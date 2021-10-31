import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" className="mb-5">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            {" "}
            FoodEagle
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/orderSummery">
                Place order
              </Nav.Link>
              <Nav.Link as={Link} to="/myOrder">
                All Orders
              </Nav.Link>
              <Nav.Link as={Link} to="/adminLogin">
                Admin
              </Nav.Link>
              {user.email ? (
                <div className="d-flex align-items-center justify-content-center">
                  <h5 className="me-2">{user.displayName}</h5>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={logOut}
                  >
                    Sing Out
                  </button>
                </div>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
