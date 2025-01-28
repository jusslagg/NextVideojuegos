"use client"; // Asegúrate de que este archivo sea un componente del cliente

import React, { useEffect, useState } from "react";
import { useCart } from "../app/components/context/CartContext"; // Importar el hook del carrito
import Image from "next/image";
import ButtonBack from "../app/components/common/button/buttonBack"; // Ajusta esta ruta según la estructura

const Page = () => {
  const [productos, setProductos] = useState([]); // Estado para los productos
  const { addToCart } = useCart(); // Accedemos a la función para agregar al carrito

  // Manejar la acción de agregar al carrito
  const handleAddToCart = (producto) => {
    addToCart(producto); // Agregar el producto al carrito
  };

  // Cargar productos de la API o base de datos
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/api/productos"); // Asegúrate de tener una API o fuente de productos
        const data = await response.json();
        setProductos(data); // Asignar los productos al estado
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    fetchProductos();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  if (!productos || productos.length === 0) {
    return <div>Loading...</div>; // Muestra un mensaje mientras se cargan los productos
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Videojuegos - {productos[0]?.category || "Categoría"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={producto.imageUrl}
              alt={producto.title}
              width={500}
              height={500}
              className="object-cover w-full h-48 mb-4 rounded-lg transition duration-300 hover:scale-105"
            />
            <p className="text-lg font-bold mb-2">${producto.price}</p>
            <p className="text-sm text-gray-400 mb-4">
              Stock: {producto.stock} disponibles
            </p>
            <button
              className="w-full bg-electric text-dark font-bold py-2 px-4 rounded shadow-glow hover:bg-electric hover:text-dark transition duration-200"
              aria-label="Agregar al carrito"
              onClick={() => handleAddToCart(producto)} // Agregar al carrito
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
      <ButtonBack />
    </div>
  );
};

export default Page;
