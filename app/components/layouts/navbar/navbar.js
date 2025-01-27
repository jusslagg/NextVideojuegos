"use client"; // Esto convierte el archivo en un Client Component

import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import MenuList from "./menuList";

const Navbar = () => {
  return (
    <>
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
            {/* Ícono del carrito en la parte derecha */}
            <div className="relative">
              <FaShoppingCart
                size={30}
                className="cursor-pointer text-white transition duration-300 hover:scale-110 hover:brightness-110"
                onClick={() => alert("Carrito de compras")}
              />
              {/* Indicador de cantidad de productos en el carrito */}
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3 {/* Aquí puedes reemplazar este valor por la cantidad real */}
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
