import { AppRouter } from './routes/AppRouter';
import { CartProvider } from './context/CartContext'; // <--- Importar

function App() {
  return (
    // Envolvemos la app con el proveedor del carrito
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;