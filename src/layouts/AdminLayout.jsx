import React, { useContext } from 'react';
import { Outlet, Navigate, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

const AdminLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // 🔒 SEGURIDAD: Si no hay usuario o no es admin, fuera de aquí.
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* 1. Header Admin (Arriba) */}
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4 shadow-sm">
        <Navbar.Brand as={Link} to="/admin" className="fw-bold">
          🥑 HuertoHogar <span className="text-muted fs-6">| Admin Panel</span>
        </Navbar.Brand>
        <div className="ms-auto d-flex align-items-center">
            <span className="text-white me-3">Hola, {user.name}</span>
            <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
                Salir
            </button>
        </div>
      </Navbar>

      {/* 2. Contenedor Principal (Sidebar + Contenido) */}
      <Container fluid className="flex-grow-1">
        <Row className="h-100">
          
          {/* A. SIDEBAR (Izquierda) */}
          <Col md={2} className="bg-white shadow-sm border-end d-none d-md-block pt-4 sidebar" style={{ minHeight: '90vh' }}>
            <Nav className="flex-column gap-2">
              <Nav.Link as={Link} to="/admin" className="text-dark fw-bold bg-light rounded mb-2">
                📊 Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/productos" className="text-secondary">
                📦 Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/usuarios" className="text-secondary">
                👥 Usuarios
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/ventas" className="text-secondary">
                💰 Ventas
              </Nav.Link>
              <hr />
              <Nav.Link as={Link} to="/" className="text-success">
                🏠 Ir al Sitio Web
              </Nav.Link>
            </Nav>
          </Col>

          {/* B. CONTENIDO (Derecha) */}
          <Col md={10} className="p-4">
            {/* Aquí se renderizan las páginas hijas (Dashboard, Tabla Productos, etc.) */}
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLayout;