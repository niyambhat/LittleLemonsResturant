import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className="pt-5 pb-5" expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" className="navbar-logo">
          My Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-menu">
            <Nav.Item>
              <NavLink exact to="/" activeClassName="active-link" className="nav-link">
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/about" activeClassName="active-link" className="nav-link">
                About
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/menu" activeClassName="active-link" className="nav-link">
                Menu
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/reservations" activeClassName="active-link" className="nav-link">
                Reservations
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/order-online" activeClassName="active-link" className="nav-link">
                Order Online
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/login" activeClassName="active-link" className="nav-link">
                Login
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
