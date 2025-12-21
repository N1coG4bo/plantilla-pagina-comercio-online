import React from 'react';
import { AppRouter } from './routes/AppRouter';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext'; // <--- 1. Importar esto

function App() {
  return (
    // 2. Envolver todo con AuthProvider (puede ir fuera o dentro de CartProvider, pero debe estar)
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;