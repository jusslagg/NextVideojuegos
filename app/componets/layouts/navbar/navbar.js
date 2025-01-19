import Image from "next/image";
import MenuList from "./menuList"; // Asegúrate de importar el componente MenuList correctamente

export const metadata = {
  title: "Ecommerce Logo",
  description: "Ecommerce para empresa de ropa Zara",
  keywords:
    "Ecommerce, ropa, Zara, moda, tienda, online, shopping, tienda de ropa, Soluciones CRM Personalizadas",
};

const Navbar = () => {
  return (
    <>
      <header className="bg-dark shadow-neon">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo con efecto de brillo */}
            <Image
              src={"/logoApp.png"}
              alt="Logo"
              width={100}
              height={100}
              className="object-contain transition duration-300 hover:scale-110 hover:shadow-glow"
            />
            {/* Menú con botones estilo DaisyUI */}
            <MenuList />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
