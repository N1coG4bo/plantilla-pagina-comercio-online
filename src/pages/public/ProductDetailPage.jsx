import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Image, Button, Badge, Spinner } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductByCode } from '../../services/productService';
import { CartContext } from '../../context/CartContext';

const ProductDetailPage = () => {
  const { code } = useParams(); // Capturamos el código de la URL
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const data = await getProductByCode(code);
      if (!data) {
        // Si el producto no existe, volvemos al inicio o mostramos error
        alert('Producto no encontrado');
        navigate('/productos');
        return;
      }
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [code, navigate]);

  const formatPrecio = (val) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);

  if (loading) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" variant="success" />
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button variant="outline-secondary" className="mb-4" onClick={() => navigate(-1)}>
        ← Volver
      </Button>

      <Row className="g-5">
        {/* Columna Izquierda: Imagen */}
        <Col md={6}>
          <div className="shadow-sm p-2 bg-white rounded">
            <Image src={`/${product.img}`} alt={product.nombre} fluid rounded className="w-100" />
          </div>
        </Col>

        {/* Columna Derecha: Detalles */}
        <Col md={6}>
          <Badge bg="success" className="mb-2">Código: {product.code}</Badge>
          <h1 className="fw-bold mb-3">{product.nombre}</h1>
          <h2 className="text-success fw-bold mb-4">{formatPrecio(product.precio)} <small className="text-muted fs-6">/ {product.unidad}</small></h2>

          <p className="lead">{product.descripcion}</p>

          <div className="bg-light p-3 rounded mb-4">
            <p className="mb-1"><strong>Origen:</strong> {product.origen}</p>
            <p className="mb-0"><strong>Stock disponible:</strong> {product.stock}</p>
          </div>

          <div className="d-grid gap-2">
            <Button 
              variant="success" 
              size="lg" 
              disabled={product.stock <= 0}
              onClick={() => addToCart(product)}
            >
              {product.stock > 0 ? 'Añadir al Carrito 🛒' : 'Sin Stock'}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;