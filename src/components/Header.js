import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from "gatsby";

export default props => (
  <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
    <Navbar.Brand as={Link} to="/">
      Sport Droid
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          <b className="text-dark">Home</b>
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          <b className="text-dark">About Us</b>
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          <b className="text-dark">Contact Us</b>
        </Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            <b className="text-dark">Link</b>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            <b className="text-dark">Another action</b>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            <b className="text-dark">Something</b>/NavDropdown.Item>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            <b className="text-dark">Separated link</b>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
