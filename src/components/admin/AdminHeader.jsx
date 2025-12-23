import React, { useContext } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Ajusta la ruta si es necesario

const AdminHeader = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4 shadow-sm">
      <Navbar.Brand as={Link} to="/admin" className="fw-bold">
        🥑 HuertoHogar <span className="text-muted fs-6">| Admin Panel</span>
      </Navbar.Brand>
      
      <div className="ms-auto d-flex align-items-center">
        {user && (
            <span className="text-white me-3">Hola, {user.name}</span>
        )}
        <Button 
            variant="outline-light" 
            size="sm" 
            onClick={handleLogout}
        >
            Salir
        </Button>
      </div>
    </Navbar>
  );
};

export default AdminHeader;