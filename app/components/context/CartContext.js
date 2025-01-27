"use client"; // Esto es necesario en Next.js 13+ para hacer que el componente sea un cliente

import React, { createContext, useContext, useState, useEffect } from "react";

// No es necesario que conectes Firestore en este caso para agregar al carrito.
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "./firebase"; // Ajusta la ruta si es necesario

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Función para agregar un producto al carrito
  const addToCart = (item) => {
    setCartItems((prev) => {
      const updatedCart = [...prev, item];
      return updatedCart;
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
