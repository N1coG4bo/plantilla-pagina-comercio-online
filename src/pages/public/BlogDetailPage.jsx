import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import posts from '../../data/posts.json';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <Container className="my-5"><h2>Articulo no encontrado</h2></Container>;

  return (
    <Container className="my-5" style={{ maxWidth: '800px' }}>
        <Button variant="link" onClick={() => navigate(-1)} className="text-success mb-3 p-0 text-decoration-none">
            ← Volver al blog
        </Button>
        <h1 className="fw-bold mb-3">{post.titulo}</h1>
        <p className="text-muted">{post.fecha} - Escrito por <strong>{post.autor}</strong></p>
        
        <Image src={`/${post.imagen}`} fluid rounded className="mb-4 w-100 shadow-sm" />
        
        <div className="lead">
            {post.contenido}
        </div>
    </Container>
  );
};

export default BlogDetailPage;