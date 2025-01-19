import Image from "next/image";
import MenuList from "./menuList"; // Asegúrate de importar el componente MenuList correctamente

// Metadatos actualizados para la tienda de videojuegos
export const metadata = {
  title: "Tienda de Videojuegos | Inicio",
  description:
    "Explora nuestra tienda online de videojuegos, consolas y accesorios. Juegos para todas las plataformas y generaciones.",
  keywords:
    "Videojuegos, tienda de videojuegos, PS5, Xbox, Nintendo Switch, PC, juegos online, accesorios gaming, consolas, videojuegos retro, tienda de consolas, videojuegos nuevos, ofertas juegos",
  openGraph: {
    title: "Tienda de Videojuegos | Inicio",
    description:
      "Explora nuestra tienda online de videojuegos, consolas y accesorios. Juegos para todas las plataformas y generaciones.",
    url: "https://tiendavideojuegos.com",
    siteName: "Tienda de Videojuegos",
    images: [
      {
        url: "https://images.unsplash.com/photo-1515824792088-3e3a08351a5a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYW5vcmFtYXM1fDJ8fHx8fGVufDB8fHx8&ixlib=rb-4.0.3",
        alt: "Videojuegos y consolas",
        title: "Tienda de Videojuegos",
        width: 1200,
        height: 630,
      },
    ],
  },
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
              width={200}
              height={200}
              className="object-contain transition duration-300 hover:scale-110 hover:shadow-glow hover:brightness-110"
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
