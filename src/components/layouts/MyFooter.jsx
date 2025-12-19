import React from 'react';
import { Container } from 'react-bootstrap';

const MyFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-top py-4 mt-auto">
      <Container className="d-flex justify-content-between flex-wrap">
        <small>© {year} HuertoHogar.</small>
        <div>
          <span className="text-muted me-3">Privacidad</span>
          <span className="text-muted me-3">Términos</span>
        </div>
      </Container>
    </footer>
  );
};

export default MyFooter;