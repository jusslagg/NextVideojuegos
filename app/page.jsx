"use client";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero bg-gradient-to-r from-electric via-neonPink to-blue-500 min-h-screen animate-fade-in text-white">
      <div className="hero-content flex-col lg:flex-row items-center space-y-6 lg:space-y-0">
        {/* Imagen de la tienda */}
        <img
          alt="Logo de GameSphere"
          src="/logoApp.png" // Usando la imagen de la carpeta public
          className="w-80 max-w-sm rounded-lg shadow-neon transform transition-transform hover:scale-105"
        />

        {/* Contenido principal */}
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-4xl xl:text-7xl font-bold text-gradient bg-clip-text text-transparent">
            ¡Bienvenido a GameSphere!
          </h1>
          <p className="py-4 xl:text-lg text-foregroundLight">
            Sumérgete en el mundo de los videojuegos con una increíble selección
            de títulos para todas las plataformas. ¡Prepárate para jugar como
            nunca antes!
          </p>

          {/* Botones para cada plataforma */}
          <div className="space-x-4">
            <Link
              href="/products/xbox"
              className="btn bg-neonPink text-white hover:bg-transparent border-2 border-neonPink transition-colors font-bold"
            >
              Xbox
            </Link>
            <Link
              href="/products/playstation"
              className="btn bg-neonPink text-white hover:bg-transparent border-2 border-neonPink transition-colors font-bold"
            >
              Playstation
            </Link>
            <Link
              href="/products/nintendo"
              className="btn bg-neonPink text-white hover:bg-transparent border-2 border-neonPink transition-colors font-bold"
            >
              Nintendo
            </Link>
            <Link
              href="/products/pc"
              className="btn bg-neonPink text-white hover:bg-transparent border-2 border-neonPink transition-colors font-bold"
            >
              PC
            </Link>
          </div>
        </div>
      </div>

      {/* Sección de trailer o video */}
    </section>
  );
}
