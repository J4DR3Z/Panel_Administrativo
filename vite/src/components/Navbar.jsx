import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="/">MiPanel</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/clientes">Clientes</Nav.Link>
            <Nav.Link as={NavLink} to="/proveedor">Proveedor</Nav.Link>
            <Nav.Link as={NavLink} to="/usuarios">Usuarios</Nav.Link>
            <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
