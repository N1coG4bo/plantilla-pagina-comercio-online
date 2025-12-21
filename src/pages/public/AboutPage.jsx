import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="my-5">
      {/* Sección Historia */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image 
            src="/images/manzana.jpeg" 
            alt="Nuestra Historia" 
            fluid 
            rounded 
            className="shadow"
          />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold text-success display-5">Nuestra Raíz</h2>
          <p className="lead text-muted">
            HuertoHogar nació con la misión de conectar el campo chileno con tu mesa, 
            sin intermediarios innecesarios y garantizando un pago justo a nuestros agricultores.
          </p>
          <p>
            Creemos en la agricultura sustentable y en el poder de los alimentos reales. 
            Trabajamos día a día para seleccionar lo mejor de cada estación, respetando 
            los ciclos de la tierra y apoyando a las comunidades locales de la zona central y sur de Chile.
          </p>
        </Col>
      </Row>

      {/* Sección Misión/Visión */}
      <Row className="g-4 text-center">
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-3">
            <Card.Body>
              <div className="display-4 mb-3">🌱</div>
              <Card.Title className="fw-bold">Sustentabilidad</Card.Title>
              <Card.Text>
                Priorizamos cultivos orgánicos y envases biodegradables para reducir nuestra huella de carbono.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-3">
            <Card.Body>
              <div className="display-4 mb-3">🤝</div>
              <Card.Title className="fw-bold">Comercio Justo</Card.Title>
              <Card.Text>
                Aseguramos que cada agricultor reciba el valor que merece por su trabajo y dedicación.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-3">
            <Card.Body>
              <div className="display-4 mb-3">🚚</div>
              <Card.Title className="fw-bold">Calidad y Frescura</Card.Title>
              <Card.Text>
                Del huerto a tu puerta en menos de 24 horas, garantizando el sabor auténtico.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;