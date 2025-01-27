import React from "react";
import { useCart } from "../components/context/CartContext"; // Importa el hook del carrito

const CartPage = () => {
  const { cartItems, removeFromCart, loading } = useCart();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div className="mt-4">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border-b py-4 flex justify-between">
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>{item.description}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price}</p>
                </div>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl font-bold">
              Total: $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
              Proceder al pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
