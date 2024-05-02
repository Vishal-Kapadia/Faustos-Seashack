import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";
import "../styles/Navbar.css"

const NavbarGo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    setIsLoggedIn(accessToken ? true : false);
  }, []);

  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand href="#Homepage" className="text-dark">Fausto's Seashack</Navbar.Brand>
        <Navbar.Toggle aria-controls="navmenu" />
        <Navbar.Collapse id="navmenu">
          <Nav className="ms-auto">
            <NavLink to="/home" className="nav-link text-dark" activeClassName="active">Home</NavLink>
            <NavLink to="/entrees" className="nav-link text-dark" activeClassName="active">Entrees</NavLink>
            <NavLink to="/specialties" className="nav-link text-dark" activeClassName="active">Specialties</NavLink>
            <NavLink to="/deals" className="nav-link text-dark" activeClassName="active">Deals</NavLink>
            <NavLink to="/about" className="nav-link text-dark" activeClassName="active">About</NavLink>
            {!isLoggedIn && (
              <>
                <NavLink to="/register" className="nav-link text-primary" activeClassName="activee">Create Account</NavLink>
                <NavLink to="/login" className="nav-link text-dark" activeClassName="activee">Sign In</NavLink>
              </>
            )}
            {isLoggedIn && (
              <>
                <NavLink to="/logout" className="nav-link text-primary" activeClassName="activee">Log Out</NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarGo;
