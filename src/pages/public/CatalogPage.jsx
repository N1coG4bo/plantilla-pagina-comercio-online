import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { getProducts } from '../../services/productService';
import ProductCard from '../../components/products/ProductCard';

const CatalogPage = () => {
  const [products, setProducts] = useState([]); // Todos los productos
  const [filteredProducts, setFilteredProducts] = useState([]); // Los que se ven
  const [searchTerm, setSearchTerm] = useState('');
  
  // Estado para las categorías seleccionadas
  const [filters, setFilters] = useState({
    frutas: false,
    verduras: false,
    otros: false // Miel, Leche, etc.
  });

  // 1. Cargar datos al inicio
  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  // 2. Lógica de Filtrado (Se ejecuta cuando cambia la búsqueda o los checkbox)
  useEffect(() => {
    let result = products;

    // A. Filtrar por texto (Buscador)
    if (searchTerm) {
      result = result.filter(p => 
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // B. Filtrar por Categoría (Si hay alguna seleccionada)
    const activeCategories = [];
    if (filters.frutas) activeCategories.push('FR'); // Códigos FR...
    if (filters.verduras) activeCategories.push('VR'); // Códigos VR...
    if (filters.otros) activeCategories.push('PO', 'PL'); // Otros

    if (activeCategories.length > 0) {
      result = result.filter(p => {
        // Verificamos si el código del producto empieza con alguna categoría activa
        return activeCategories.some(cat => p.code.startsWith(cat));
      });
    }

    setFilteredProducts(result);
  }, [searchTerm, filters, products]);

  // Manejador de checkboxes
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked
    });
  };

  return (
    <Container className="my-5">
      <Row>
        {/* COLUMNA IZQUIERDA: FILTROS */}
        <Col md={3} className="mb-4">
          <div className="p-3 bg-light rounded shadow-sm sticky-top" style={{ top: '90px' }}>
            <h5 className="fw-bold text-success mb-3">Filtrar Productos</h5>
            
            {/* Buscador */}
            <Form.Group className="mb-4">
              <Form.Label>Buscar</Form.Label>
              <InputGroup>
                <InputGroup.Text>🔍</InputGroup.Text>
                <Form.Control 
                  type="text" 
                  placeholder="Manzanas..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            {/* Categorías */}
            <h6 className="fw-bold mb-2">Categorías</h6>
            <Form.Check 
              type="checkbox"
              label="Frutas 🍎"
              name="frutas"
              checked={filters.frutas}
              onChange={handleFilterChange}
              className="mb-2"
            />
            <Form.Check 
              type="checkbox"
              label="Verduras 🥦"
              name="verduras"
              checked={filters.verduras}
              onChange={handleFilterChange}
              className="mb-2"
            />
            <Form.Check 
              type="checkbox"
              label="Almacén (Miel/Lácteos) 🍯"
              name="otros"
              checked={filters.otros}
              onChange={handleFilterChange}
            />
            
            {/* Botón para limpiar (opcional) */}
            <div className="mt-3 pt-3 border-top">
                <small className="text-muted">
                    Mostrando {filteredProducts.length} productos
                </small>
            </div>
          </div>
        </Col>

        {/* COLUMNA DERECHA: GRILLA DE PRODUCTOS */}
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold text-dark">Catálogo</h2>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <h4>No encontramos productos que coincidan 😕</h4>
              <p>Intenta con otra búsqueda o limpia los filtros.</p>
            </div>
          ) : (
            <Row>
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.code} product={prod} />
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CatalogPage;