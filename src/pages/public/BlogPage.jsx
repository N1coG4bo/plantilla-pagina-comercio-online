import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import posts from '../../data/posts.json'; // Importamos directo el JSON

const BlogPage = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success display-5">Nuestro Blog</h2>
        <p className="lead text-muted">Consejos, recetas y novedades del campo.</p>
      </div>

      <Row>
        {posts.map((post) => (
          <Col md={4} key={post.id} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Card.Img 
                    variant="top" 
                    src={`/${post.imagen}`} 
                    style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <small className="text-muted mb-2">{post.fecha} | por {post.autor}</small>
                <Card.Title className="fw-bold">{post.titulo}</Card.Title>
                <Card.Text>{post.resumen}</Card.Text>
                <Button 
                    as={Link} 
                    to={`/blog/${post.id}`} 
                    variant="outline-success" 
                    className="mt-auto"
                >
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogPage;