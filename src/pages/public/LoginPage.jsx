import React, { useState, useContext } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/'); // Si sale bien, vamos al Home
    } else {
      setError(result.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card className="shadow-lg p-4" style={{ width: '400px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Bienvenido</h2>
          <p className="text-muted">Ingresa a tu cuenta HuertoHogar</p>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="admin@huertohogar.cl" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="****" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 mb-3">
            Iniciar Sesión
          </Button>
          
          <div className="text-center">
            <small>¿No tienes cuenta? <a href="/registro" className="text-success">Regístrate</a></small>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;