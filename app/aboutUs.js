"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const AboutUs = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white text-center space-y-6">
      {/* Logo o Imagen representativa */}
      <Image
        src="/logoApp.png" // Ruta correcta a la imagen
        alt="Logo"
        width={400}
        height={400}
        className="object-contain animate-pulse"
      />

      {/* Título de la página */}
      <h1 className="text-6xl font-bold text-electric">Acerca de Nosotros</h1>

      {/* Descripción de la empresa o equipo */}
      <p className="text-2xl mt-4">
        ¡Bienvenido! Somos un equipo apasionado por los videojuegos y la
        tecnología.
      </p>

      <p className="text-xl mt-4">
        En nuestra plataforma, nos esforzamos por ofrecerte contenido único y
        emocionante para los amantes de los videojuegos. Desde noticias hasta
        análisis profundos, estamos aquí para ti.
      </p>

      {/* Botón para regresar o navegar */}
      <button
        onClick={() => router.push("/")} // Cambia esta ruta si deseas que el botón lleve a otra página
        className="mt-6 bg-electric text-black font-bold py-2 px-6 rounded-full hover:bg-transparent border-2 border-electric transition-colors"
      >
        Regresar al inicio
      </button>
    </div>
  );
};

export default AboutUs;
