import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';

// Páginas Públicas
import HomePage from '../pages/public/HomePage';
import CatalogPage from '../pages/public/CatalogPage';
import ProductDetailPage from '../pages/public/ProductDetailPage';
import CartPage from '../pages/public/CartPage';
import AboutPage from '../pages/public/AboutPage';
import ContactPage from '../pages/public/ContactPage';
import BlogPage from '../pages/public/BlogPage';
import BlogDetailPage from '../pages/public/BlogDetailPage';
import LoginPage from '../pages/public/LoginPage';
import RegisterPage from '../pages/public/RegisterPage';

// Placeholder para Admin (lo haremos en el siguiente paso)
const AdminPlaceholder = () => <div className="container mt-5"><h1>Panel de Admin (Próximamente)</h1></div>;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Públicas envueltas en el Layout Principal */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<CatalogPage />} />
          <Route path="/producto/:code" element={<ProductDetailPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />
        </Route>

        {/* Rutas de Admin (Por ahora simples, luego tendrán su propio Layout) */}
        <Route path="/admin" element={<AdminPlaceholder />} />
        
        {/* Redirección por defecto si la ruta no existe */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};