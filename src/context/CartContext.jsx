import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto (la "nube" donde viven los datos)
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Inicializamos el carrito leyendo localStorage (para no perder datos al recargar)
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('huertoHogarCart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      return [];
    }
  });

  // Cada vez que cambie el carrito, guardamos en localStorage automáticamente
  useEffect(() => {
    localStorage.setItem('huertoHogarCart', JSON.stringify(cart));
  }, [cart]);

  // Función: Añadir producto
  const addToCart = (product) => {
    setCart((prevCart) => {
      // ¿El producto ya está en el carrito?
      const existingProduct = prevCart.find(item => item.code === product.code);

      if (existingProduct) {
        // Si existe, aumentamos la cantidad
        return prevCart.map(item =>
          item.code === product.code
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si no existe, lo agregamos con cantidad 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Función: Eliminar producto completo
  const removeFromCart = (code) => {
    setCart(prevCart => prevCart.filter(item => item.code !== code));
  };

  // Función: Disminuir cantidad
  const decreaseQuantity = (code) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.code === code);
      if (existingProduct.quantity === 1) {
        return prevCart.filter(item => item.code !== code); // Si es 1, lo borramos
      }
      return prevCart.map(item =>
        item.code === code ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // Datos derivados (calculados al vuelo)
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      decreaseQuantity, 
      cartCount, 
      cartTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
};