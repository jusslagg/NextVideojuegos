"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Page404 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-white text-center space-y-6">
      {/* Logo central */}
      <Image
        src="/logoApp.png" // Ruta correcta a la imagen
        alt="Logo"
        width={400}
        height={400}
        className="object-contain animate-pulse"
      />

      {/* Mensaje de error */}
      <h1 className="text-6xl font-bold text-neonPink">404</h1>
      <p className="text-2xl mt-4">¡Oh no! Página perdida en el hiperespacio</p>

      {/* Texto adicional */}
      <p className="text-xl mt-4">
        La página que buscas se ha desmaterializado en algún rincón del
        universo.
      </p>

      {/* Botón para regresar */}
      <button
        onClick={() => router.push("/")}
        className="mt-6 bg-neonPink text-black font-bold py-2 px-6 rounded-full hover:bg-transparent border-2 border-neonPink transition-colors"
      >
        Regresar al cuartel general
      </button>
    </div>
  );
};

export default Page404;
