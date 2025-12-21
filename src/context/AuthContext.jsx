import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Leemos del localStorage si ya había un usuario guardado
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('huertoUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Función para Iniciar Sesión (Simulada)
  const login = (email, password) => {
    // Aquí validarías con un Backend real. 
    // Por ahora, aceptamos cualquier usuario que sea de "@duocuc.cl" o admin
    if (email.includes('@') && password.length > 3) {
      const newUser = { 
        email, 
        name: email.split('@')[0], // Usamos la parte antes del @ como nombre
        role: email.includes('admin') ? 'admin' : 'user' 
      };
      setUser(newUser);
      localStorage.setItem('huertoUser', JSON.stringify(newUser));
      return { success: true };
    }
    return { success: false, message: "Credenciales inválidas" };
  };

  // Función para Salir
  const logout = () => {
    setUser(null);
    localStorage.removeItem('huertoUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};