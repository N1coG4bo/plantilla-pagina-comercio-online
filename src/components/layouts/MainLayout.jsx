import React from 'react';
import { Outlet } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';

const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNavbar />
      <main className="flex-grow-1">
        {/* Aquí se cargará el contenido de cada página */}
        <Outlet />
      </main>
      <MyFooter />
    </div>
  );
};

export default MainLayout;