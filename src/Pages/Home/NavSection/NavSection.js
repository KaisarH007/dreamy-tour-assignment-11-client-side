import React from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../images/travel-logo.png";
import "./NavSection.css";

const NavSection = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <>
      <Navbar
        className="nav-bg"
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link className="text-white d-flex" as={Link} to="/home">
              <img
                style={{ width: "70px", height: "60px" }}
                src={logo}
                alt=""
              />
              <h4 className="fw-bold mt-3"> Dreamy Tour</h4>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end  fs-5 fw-bold">
            <Nav.Link className="text-white" as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link className="text-white" as={Link} to="/addNewPackege">
              Add New Packege
            </Nav.Link>

            <Nav.Link className="text-white" as={Link} to="/manageAllOrders">
              Manage All Orders
            </Nav.Link>

            <Nav.Link className="text-white" as={Link} to="/myOrders">
              My Orders
            </Nav.Link>

            {!user?.email && (
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <NavDropdown
              id="nav-dropdown-dark-example"
              title={
                <Image
                  style={{ width: "40px" }}
                  src={user?.photoURL}
                  roundedCircle
                />
              }
              menuVariant="light"
            >
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <div>
                    <Image
                      className="ms-2"
                      style={{ width: "80px" }}
                      src={user?.photoURL}
                      roundedCircle
                    />
                  </div>
                  <p>{user.displayName}</p>
                </div>
              </div>

              <NavDropdown.Item href="#action/3.4">
                {user?.email && (
                  <Button
                    className="ms-4"
                    variant="danger"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Button>
                )}
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavSection;
