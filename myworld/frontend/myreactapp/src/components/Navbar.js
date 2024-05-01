import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand href="#Homepage" className="text-primary">Fausto's Seashack</Navbar.Brand>
        <Navbar.Toggle aria-controls="navmenu" />
        <Navbar.Collapse id="navmenu">
          <Nav className="ms-auto">
            <Nav.Link href="#Entrees" className="text-primary">Entrees</Nav.Link>
            <Nav.Link href="#Specialties" className="text-primary">Specialties</Nav.Link>
            <Nav.Link href="#Deals" className="text-primary">Deals</Nav.Link>
            <Nav.Link href="#About" className="text-primary">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
