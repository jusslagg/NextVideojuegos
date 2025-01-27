"use client"; // Necesario en Next.js 13+ para hacer que este componente funcione del lado del cliente

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext"; // Importamos el hook del contexto
import Image from "next/image";
import MenuList from "./menuList"; // Ajusta esta ruta según la estructura

const Navbar = () => {
  const { cartItems, addToCart } = useCart(); // Accedemos al carrito y funciones

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
            {/* Indicador de cantidad de productos en el carrito */}
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
