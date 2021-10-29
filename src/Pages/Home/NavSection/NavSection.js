import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavSection = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand className="d-flex" href="#home">
            {/* <img style={{ width: "100px" }} src={logo} alt="" />{" "} */}
            <h4 className="fw-bold mt-2"> Crunch Fitness</h4>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end fs-5 fw-bold">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>

            {/* {!user.displayName ? (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            ) : (
              <Button className="m-2" variant="danger" onClick={handleLogOut}>
                Log Out
              </Button>
            )} */}

            <Navbar.Text>
              {/* <span className="text-white mx-2">{user.displayName}</span>
              <Image
                style={{ width: "40px" }}
                src={user?.photoURL}
                roundedCircle
              /> */}
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavSection;
