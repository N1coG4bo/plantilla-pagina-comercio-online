/* import products from '../data/products.json';

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

*/


// Definimos la URL de tu backend en la nube (Render)
// Nota: Le agregamos 'https://' al principio y '/api' al final
const API_URL = 'https://backend-plantilla-comercio-online.onrender.com/api';

// Obtener todos los productos (Petición REAL al servidor)
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    
    if (!response.ok) {
      throw new Error('No se pudo conectar con el servidor');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error trayendo productos del Backend:", error);
    return []; // Retorna arreglo vacío para evitar que la app explote
  }
};

// Obtener un producto por su código
export const getProductByCode = async (code) => {
  try {
    // Estrategia: Reutilizamos getProducts para asegurar que tenemos la lista actualizada
    // y buscamos el producto específico aquí en el cliente.
    const products = await getProducts();
    return products.find(p => p.code === code);
  } catch (error) {
    console.error("Error buscando producto:", error);
    return null;
  }
};