import React from 'react';
import { Nav, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  // Usamos useLocation para saber en qué página estamos y resaltar el link activo (opcional pero pro)
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Col md={2} className="bg-white shadow-sm border-end d-none d-md-block pt-4 sidebar" style={{ minHeight: '90vh' }}>
      <Nav className="flex-column gap-2">
        <Nav.Link 
            as={Link} 
            to="/admin" 
            className={`fw-bold rounded mb-2 ${isActive('/admin') ? 'bg-success text-white' : 'text-dark bg-light'}`}
        >
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
        
        <Nav.Link as={Link} to="/" className="text-success fw-bold">
          🏠 Ir al Sitio Web
        </Nav.Link>
      </Nav>
    </Col>
  );
};

export default AdminSidebar;