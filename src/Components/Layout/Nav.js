import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from "../../Assets/lemon.png"

function NavBar() {
  return (
    <Navbar className="navigation" expand="md" bg="#FDFDFD" variant="light">
        <Navbar.Brand href="/" className="navbar-logo">
          <img src={Logo} id="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-menu">
            <Nav.Item>
              <NavLink exact to="/" activeClassName="active-link" className="nav-link">
                Home
              </NavLink>
            </Nav.Item>
            {/* <Nav.Item>
              <NavLink to="/about" activeClassName="active-link" className="nav-link">
                About
              </NavLink>
            </Nav.Item> */}
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
              {/* <NavLink to="/order-online" activeClassName="active-link" className="nav-link">
                Order Online
              </NavLink> */}
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/login" activeClassName="active-link" className="nav-link">
              <button id="loginBtn" type="button" className="btn btn-primary btn-lg">
              Login      
              </button>
              
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
