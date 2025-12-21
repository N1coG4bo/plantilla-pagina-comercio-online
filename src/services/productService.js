import products from '../data/products.json';

// Obtener todos los productos (simula una espera de 0.5 seg)
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

// Obtener un producto por su código
export const getProductByCode = (code) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(p => p.code === code);
      resolve(product);
    }, 500);
  });
};