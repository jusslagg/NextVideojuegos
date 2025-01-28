"use client"; // Asegúrate de que este archivo sea un componente del cliente

import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "./firebase"; // Asegúrate de que esta ruta esté correcta
import { getDocs, collection } from "firebase/firestore";

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para agregar un producto al carrito
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Solo ejecutar este código en el cliente
  useEffect(() => {
    // Verifica si estamos en el navegador
    if (typeof window !== "undefined") {
      const fetchCartItems = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "cart"));
          const items = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setCartItems(items); // Establecer los productos del carrito
        } catch (error) {
          console.error("Error fetching documents: ", error);
        } finally {
          setLoading(false); // Una vez cargado, marca como no cargando
        }
      };

      fetchCartItems();
    }
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
