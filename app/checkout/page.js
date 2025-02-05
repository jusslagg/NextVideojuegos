"use client";

import { useCart } from "../context/CartContext"; // Asegúrate de importar correctamente el hook
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";

export default function Checkout() {
  const { cart, getTotalAmount } = useCart(); // Usa el hook `useCart` para obtener el carrito

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
                  key={item.slug}
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
                Total: ${getTotalAmount()}
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
