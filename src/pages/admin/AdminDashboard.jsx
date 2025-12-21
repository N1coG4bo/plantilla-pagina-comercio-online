import React from 'react';
import { Row, Col, Card, Table, Badge, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="fw-bold mb-4">Resumen General</h2>

      {/* TARJETAS DE ESTADÍSTICAS */}
      <Row className="g-4 mb-5">
        <Col md={3}>
          <Card className="border-0 shadow-sm text-center p-3 h-100">
            <h1 className="display-4 text-primary fw-bold">120</h1>
            <p className="text-muted">Ventas del Mes</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm text-center p-3 h-100">
            <h1 className="display-4 text-success fw-bold">$ 2.5M</h1>
            <p className="text-muted">Ingresos Totales</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm text-center p-3 h-100">
            <h1 className="display-4 text-warning fw-bold">8</h1>
            <p className="text-muted">Pedidos Pendientes</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm text-center p-3 h-100">
            <h1 className="display-4 text-danger fw-bold">50</h1>
            <p className="text-muted">Usuarios Activos</p>
          </Card>
        </Col>
      </Row>

      {/* TABLA DE ÚLTIMOS PEDIDOS */}
      <Card className="border-0 shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold">Últimos Pedidos</h5>
            <Button variant="outline-primary" size="sm">Ver todos</Button>
        </div>
        
        <Table hover responsive>
          <thead className="bg-light">
            <tr>
              <th># Pedido</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Total</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1023</td>
              <td>Juan Pérez</td>
              <td>20 Oct 2023</td>
              <td><Badge bg="success">Entregado</Badge></td>
              <td>$ 25.000</td>
              <td><Button variant="link" size="sm">Ver</Button></td>
            </tr>
            <tr>
              <td>#1024</td>
              <td>Maria González</td>
              <td>21 Oct 2023</td>
              <td><Badge bg="warning" text="dark">Pendiente</Badge></td>
              <td>$ 12.500</td>
              <td><Button variant="link" size="sm">Ver</Button></td>
            </tr>
            <tr>
              <td>#1025</td>
              <td>Pedro Pascal</td>
              <td>21 Oct 2023</td>
              <td><Badge bg="danger">Cancelado</Badge></td>
              <td>$ 50.000</td>
              <td><Button variant="link" size="sm">Ver</Button></td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default AdminDashboard;