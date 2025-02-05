"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const [isClient, setIsClient] = useState(false); // Estado para saber si estamos en el cliente
  const { cart, getTotalAmount } = useCart(); // Usamos el contexto

  // Efecto para asegurarnos de que el hook solo se ejecute en el cliente
  useEffect(() => {
    setIsClient(true); // Cambiamos el estado cuando la página se renderiza en el cliente
  }, []);

  // Si no estamos en el cliente, no renderizamos nada (esto evita el error de prerenderización)
  if (!isClient) {
    return null; // O podrías mostrar un spinner o mensaje de carga
  }

  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-electric glow-effect">
          Checkout
        </h1>

        {cart.length === 0 ? (
          <p className="mt-8 text-center text-foregroundLight">
            No hay productos en el carrito.
          </p>
        ) : (
          <div>
            <div className="mt-8 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.slug} // Usa `slug` si lo tienes como identificador único
                  className="flex justify-between items-center p-4 bg-foreground rounded-lg shadow-glow"
                >
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <p className="ml-4">{item.name}</p>
                  </div>
                  <p className="text-lg">${item.price}</p>
                </div>
              ))}
            </div>

            {/* Resumen y botón de pago */}
            <div className="mt-6 p-4 bg-foreground rounded-lg shadow-glow">
              <h2 className="text-xl font-bold text-electric">
                Total: ${getTotalAmount()}{" "}
                {/* Llama a getTotalAmount para obtener el total */}
              </h2>
              <button className="mt-4 btn btn-primary bg-electric text-dark hover:bg-neonPink">
                Pagar
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
