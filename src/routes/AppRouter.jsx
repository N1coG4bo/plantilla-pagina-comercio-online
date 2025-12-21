import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import HomePage from '../pages/public/HomePage';
import CartPage from '../pages/public/CartPage';
import ProductDetailPage from '../pages/public/ProductDetailPage';
import CatalogPage from '../pages/public/CatalogPage'; // <--- 1. IMPORTAR ESTO

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          
          {/* 2. USAR EL COMPONENTE AQUÍ (No uses el componente 'Productos' temporal) */}
          <Route path="/productos" element={<CatalogPage />} />
          
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/producto/:code" element={<ProductDetailPage />} />
          
          {/* Rutas pendientes */}
          <Route path="/nosotros" element={<div className="container mt-5"><h1>Nosotros</h1></div>} />
          <Route path="/blog" element={<div className="container mt-5"><h1>Blog</h1></div>} />
          <Route path="/contacto" element={<div className="container mt-5"><h1>Contacto</h1></div>} />
          <Route path="/login" element={<div className="container mt-5"><h1>Login</h1></div>} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};