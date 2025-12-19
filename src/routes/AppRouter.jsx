import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';

// Páginas temporales para probar
const Home = () => <div className="container mt-5"><h1>Inicio</h1><p>Bienvenido a HuertoHogar React</p></div>;
const Productos = () => <div className="container mt-5"><h1>Catálogo</h1></div>;
const Carrito = () => <div className="container mt-5"><h1>Carrito</h1></div>;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
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