import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el email al backend
    setShowSuccess(true);
    e.target.reset(); // Limpiar formulario
    
    // Ocultar mensaje después de 3 segundos
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-success">Contáctanos</h2>
            <p className="text-muted">¿Tienes dudas sobre tu pedido o quieres ser proveedor? Escríbenos.</p>
          </div>

          {showSuccess && (
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
              ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.
            </Alert>
          )}

          <div className="bg-white p-4 p-md-5 rounded shadow-sm border">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Ej: Juan Pérez" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Asunto</Form.Label>
                <Form.Select>
                  <option>Consulta sobre pedido</option>
                  <option>Quiero ser proveedor</option>
                  <option>Reclamo o Sugerencia</option>
                  <option>Otro</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." required />
              </Form.Group>

              <div className="d-grid">
                <Button variant="success" size="lg" type="submit">
                  Enviar Mensaje
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>

      {/* Datos de contacto rápidos */}
      <Row className="mt-5 text-center">
        <Col md={4}>
          <h5 className="fw-bold">📍 Dirección</h5>
          <p className="text-muted">Av. Siempreviva 742, Santiago</p>
        </Col>
        <Col md={4}>
          <h5 className="fw-bold">📞 Teléfono</h5>
          <p className="text-muted">+56 9 1234 5678</p>
        </Col>
        <Col md={4}>
          <h5 className="fw-bold">✉️ Email</h5>
          <p className="text-muted">contacto@huertohogar.cl</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;