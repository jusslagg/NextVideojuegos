"use client";

import { useState, useEffect } from "react";
import { productos } from "../mock/productos"; // Asegúrate de que los productos tengan las propiedades correctas
import { useRouter } from "next/navigation";

export default function Productos() {
  const [filterProducts, setFilterProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setFilterProducts(productos); // Simulamos que obtenemos los productos de alguna base de datos o API
  }, []);

  const handleCategoryClick = (category) => {
    // Filtramos productos por la categoría seleccionada
    if (category) {
      const filtered = productos.filter(
        (producto) => producto.category === category
      );

      // Verificamos si hay productos disponibles para la categoría
      if (filtered.length === 0) {
        router.push("/404"); // Redirigimos a la página de error si no hay productos
      } else {
        setFilterProducts(filtered); // Si se encuentran productos, actualizamos el estado
        router.push(`/productos/${category}`); // Redirigimos a la página de categoría
      }
    } else {
      setFilterProducts(productos); // Si no hay categoría, mostramos todos los productos
      router.push("/productos"); // Redirigimos a la página general de productos
    }
  };

  // Obtenemos las categorías disponibles
  const categories = Array.from(
    new Set(productos.map((producto) => producto.category))
  );

  return (
    <main className="p-6 max-w-7xl mx-auto bg-dark text-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-electric">
        Nuestros Videojuegos
      </h1>

      {/* Botones de categorías */}
      <div className="flex justify-center mt-8 space-x-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="bg-dark text-electric font-semibold py-2 px-6 rounded shadow-glow hover:bg-electric hover:text-dark transition duration-200"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Muestra los productos filtrados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filterProducts.map(
          ({ id, title, price, stock, imageUrl, category, trailerUrl }) => (
            <div
              key={id}
              className="border border-gray-300 rounded-lg p-4 shadow-glow hover:shadow-xl transition duration-200"
            >
              {/* Imagen del producto o trailer en hover */}
              <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg group">
                {/* Imagen del juego */}
                <img
                  src={imageUrl}
                  alt={title}
                  className="object-cover w-full h-full transition duration-300 group-hover:opacity-0"
                />

                {/* Video del juego (se muestra en hover) */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-300">
                  <video
                    src={`${trailerUrl}?autoplay=1`} // Parámetro autoplay=1 para iniciar automáticamente el video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
              </div>

              {/* Detalles del producto */}
              <h2 className="text-xl font-semibold mb-2 text-electric">
                {title}
              </h2>
              <p className="text-lg font-bold text-gray-800">${price}</p>
              <p className="text-sm text-gray-400 mb-2">
                Categoría: {category}
              </p>
              <p className="text-sm text-gray-400">
                Stock: {stock} disponibles
              </p>

              {/* Botón de agregar al carrito */}
              <button
                className="mt-4 bg-electric text-dark font-bold py-2 px-4 rounded shadow-glow hover:bg-electric hover:text-dark transition duration-200"
                aria-label="Agregar al carrito"
              >
                Agregar al carrito
              </button>
            </div>
          )
        )}
      </div>
    </main>
  );
}
