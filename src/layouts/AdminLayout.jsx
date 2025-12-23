import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';

const AdminLayout = () => {
  const { user } = useContext(AuthContext);

  // 🔒 SEGURIDAD: Si no hay usuario o no es admin, fuera de aquí.
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <AdminHeader />
      <Container fluid className="flex-grow-1">
        <Row className="h-100">
          <AdminSidebar />
          <Col md={10} className="p-4">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLayout;