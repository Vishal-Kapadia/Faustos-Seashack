import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const NavbarGo = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand href="#Homepage" className="text-primary">Fausto's Seashack</Navbar.Brand>
        <Navbar.Toggle aria-controls="navmenu" />
        <Navbar.Collapse id="navmenu">
          <Nav className="ms-auto">
            <NavLink to="/entrees" className="nav-link text-primary" activeClassName="active">Entrees</NavLink>
            <NavLink to="/specialties" className="nav-link text-primary" activeClassName="active">Specialties</NavLink>
            <NavLink to="/deals" className="nav-link text-primary" activeClassName="active">Deals</NavLink>
            <NavLink to="/about" className="nav-link text-primary" activeClassName="active">About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarGo;
