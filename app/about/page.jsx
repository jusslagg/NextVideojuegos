"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <section
        className="hero min-h-screen bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dpisx0ysb/image/upload/v1725830829/videojuegos_bg_mhv5py.svg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            {/* Logo de la tienda */}
            <img
              src="/logoApp.png" // Imagen del logo almacenado en la carpeta public
              alt="Logo GameSphere"
              className="w-32 mx-auto mb-6"
            />
            <h1 className="mb-5 text-5xl xl:text-7xl font-bold">
              ¡Bienvenido a GameSphere!
            </h1>
            <p className="mb-5 xl:text-lg">
              En GameSphere, te ofrecemos los mejores videojuegos para todas las
              plataformas. Desde juegos clásicos hasta los títulos más nuevos,
              ¡tenemos algo para todos los jugadores!
            </p>
            <Link
              href="/products/all"
              className="btn bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-300"
            >
              Ver videojuegos
            </Link>
            <button
              className="btn btn-secondary mt-4"
              onClick={() => router.back()}
            >
              Volver
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
