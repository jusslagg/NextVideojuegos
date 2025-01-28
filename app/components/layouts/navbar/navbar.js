"use client"; // Asegúrate de que este archivo esté marcado como componente del cliente

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext"; // Importamos el hook del contexto
import Image from "next/image";
import MenuList from "./menuList"; // Ajusta esta ruta según la estructura

const Navbar = () => {
  const { cartItems } = useCart(); // Accedemos a la cantidad de items en el carrito

  return (
    <header className="bg-dark shadow-neon">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo principal */}
          <Image
            src={"/logoApp.png"}
            alt="Logo"
            width={200}
            height={200}
            className="object-contain transition duration-300 hover:scale-110 hover:shadow-glow hover:brightness-110"
          />
          {/* Menú */}
          <MenuList />
          {/* Ícono del carrito */}
          <div className="relative">
            <FaShoppingCart
              size={30}
              className="cursor-pointer text-white transition duration-300 hover:scale-110 hover:brightness-110"
            />
            {/* Mostrar la cantidad de items en el carrito */}
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
