import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import HomePage from '../pages/public/HomePage'; // <--- Importamos la nueva Home

// Componentes temporales (Placeholder)
const Productos = () => <div className="container mt-5"><h1>Catálogo Completo</h1></div>;
const Carrito = () => <div className="container mt-5"><h1>Carrito de Compras</h1></div>;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} /> {/* <--- Usamos el componente real */}
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          
          {/* Rutas pendientes (placeholders) */}
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