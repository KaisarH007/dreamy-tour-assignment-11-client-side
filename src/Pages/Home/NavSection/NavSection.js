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

const NavSection = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="success"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand className="d-flex">
            {/* <img style={{ width: "100px" }} src={logo} alt="" />{" "} */}
            <h4 className="fw-bold mt-2"> Dreamy Tour</h4>
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
              menuVariant="dark"
            >
              <Nav.Link className="text-white" as={Link} to="/myOrders/:id">
                My Orders
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/manageAllOrders">
                Manage All Orders
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/addNewPackege">
                Add New Packege
              </Nav.Link>
              <NavDropdown.Item href="#action/3.4">
                {user?.email && (
                  <Button
                    className="m-2"
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
    </div>
  );
};

export default NavSection;
