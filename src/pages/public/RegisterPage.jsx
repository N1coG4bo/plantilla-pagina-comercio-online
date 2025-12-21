import React, { useState, useContext } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const RegisterPage = () => {
  const { login } = useContext(AuthContext); // Usaremos login para auto-ingresar al registrarse
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ 
    nombre: '', 
    email: '', 
    password: '',
    confirmPassword: '' 
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validaciones simples
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    if (formData.password.length < 5) {
      setError('La contraseña debe tener al menos 5 caracteres');
      return;
    }

    // Simulación de Registro exitoso -> Auto Login
    // En una app real, aquí enviarías los datos al backend con axios.post('/api/register'...)
    login(formData.email, formData.password);
    navigate('/');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card className="shadow-lg p-4" style={{ width: '450px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Crear Cuenta</h2>
          <p className="text-muted">Únete a la comunidad de HuertoHogar</p>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ej: María Huerta" 
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="nombre@ejemplo.com" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Mínimo 5 caracteres" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Repetir Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Confirma tu contraseña" 
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 mb-3">
            Registrarse
          </Button>
          
          <div className="text-center">
            <small>¿Ya tienes cuenta? <Link to="/login" className="text-success">Ingresa aquí</Link></small>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default RegisterPage;