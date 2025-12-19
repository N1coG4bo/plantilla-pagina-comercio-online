import React from 'react';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-success">
          🥑 HuertoHogar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            
            <Nav.Link as={Link} to="/login" className="px-0 ms-2">
                 <Button variant="outline-success" size="sm">Iniciar Sesión</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/carrito" className="ms-2">
              <Button variant="outline-success" className="d-flex align-items-center gap-2">
                🛒 Carrito <Badge bg="success">0</Badge>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;