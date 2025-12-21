import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button, Badge, Dropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext'; // <--- Importamos Auth

const MyNavbar = () => {
  const { cartCount } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext); // <--- Traemos el usuario y logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Al salir, nos manda al inicio
  };

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-success d-flex align-items-center gap-2">
          <span>🥑</span> HuertoHogar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0 align-items-center">
            
            <Nav.Link as={NavLink} to="/" className="mx-2">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/productos" className="mx-2">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros" className="mx-2">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="mx-2">Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" className="mx-2">Contacto</Nav.Link>
            
            {/* SECCIÓN DE USUARIO DINÁMICA */}
            <div className="d-flex gap-2 ms-lg-3 my-2 my-lg-0 align-items-center">
                
                {user ? (
                    // CASO 1: USUARIO LOGUEADO
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="fw-bold text-success border-0">
                            👤 Hola, {user.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {user.role === 'admin' && (
                                <Dropdown.Item as={Link} to="/admin">⚙️ Panel Admin</Dropdown.Item>
                            )}
                            <Dropdown.Item href="#perfil">Mi Perfil</Dropdown.Item>
                            <Dropdown.Item href="#pedidos">Mis Pedidos</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={handleLogout} className="text-danger">
                                Cerrar Sesión
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    // CASO 2: USUARIO VISITANTE
                    <>
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
                    </>
                )}
            </div>

            {/* Carrito */}
            <Nav.Link as={Link} to="/carrito" className="ms-lg-3 ps-0">
              <Button 
                variant="outline-success" 
                className="d-flex align-items-center gap-2 position-relative border-0"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <span style={{ fontSize: '1.2rem' }}>🛒</span>
                {cartCount > 0 && (
                  <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
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