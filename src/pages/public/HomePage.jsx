import React, { useEffect, useState } from 'react';
import { Container, Row, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProducts } from '../../services/productService';
import ProductCard from '../../components/products/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.slice(0, 6)); // Mostramos solo 6 destacados
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* HERO SECTION (Banner Verde) */}
      <section className="bg-success py-5 text-white text-center mb-5">
        <Container>
          <h1 className="display-4 fw-bold">Del Huerto a tu Hogar</h1>
          <p className="lead mb-4">Frutas, verduras y productos orgánicos frescos de la mejor calidad.</p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/productos">
                <Button variant="warning" size="lg" className="fw-bold text-dark">Ver Catálogo</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* LISTA DE PRODUCTOS */}
      <Container className="my-5">
        <h2 className="text-center mb-4 fw-bold text-secondary">Productos Destacados</h2>
        
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="success" />
            <p className="mt-2 text-muted">Cargando frescura...</p>
          </div>
        ) : (
          <Row>
            {products.map((prod) => (
              <ProductCard key={prod.code} product={prod} />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomePage;