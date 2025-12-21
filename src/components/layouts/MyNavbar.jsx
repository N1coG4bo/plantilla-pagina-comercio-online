import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; // Asegúrate de que la ruta sea correcta

const MyNavbar = () => {
  // Consumimos el contexto para obtener la cantidad total de productos
  const { cartCount } = useContext(CartContext);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        {/* Logo / Nombre de la Marca */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-success d-flex align-items-center gap-2">
          <span>🥑</span> HuertoHogar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0 align-items-center">
            
            {/* Enlaces de Navegación */}
            <Nav.Link as={NavLink} to="/" className="mx-2">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productos" className="mx-2">
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros" className="mx-2">
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="mx-2">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" className="mx-2">
              Contacto
            </Nav.Link>
            
            {/* Botones de Acción (Login / Registro) */}
            <div className="d-flex gap-2 ms-lg-3 my-2 my-lg-0">
                <Link to="/login">
                    <Button variant="outline-success" size="sm" className="px-3">
                        Ingresar
                    </Button>
                </Link>
                <Link to="/registro">
                    <Button variant="success" size="sm" className="px-3 text-white">
                        Registrarse
                    </Button>
                </Link>
            </div>

            {/* Botón del Carrito con Badge Dinámico */}
            <Nav.Link as={Link} to="/carrito" className="ms-lg-3 ps-0">
              <Button 
                variant="outline-success" 
                className="d-flex align-items-center gap-2 position-relative border-0"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <span style={{ fontSize: '1.2rem' }}>🛒</span>
                <span className="d-lg-none">Ver Carrito</span> {/* Texto visible solo en móvil */}
                
                {/* Badge: Solo se muestra si hay productos (cartCount > 0) */}
                {cartCount > 0 && (
                  <Badge 
                    bg="danger" 
                    pill 
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;