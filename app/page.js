import Navbar from "./components/layouts/navbar/navbar";
import Footer from "./components/layouts/footer/footer";

// De forma estática
export const metadata = {
  title: "Tienda de Videojuegos | Inicio",
  description:
    "Tu tienda de videojuegos online, con juegos, consolas y accesorios para todas las plataformas",
  keywords:
    "Videojuegos, tienda de videojuegos, PS5, Xbox, Nintendo Switch, PC, juegos online, accesorios gaming, consolas, videojuegos retro, tienda de consolas",
  openGraph: {
    title: "Tienda de Videojuegos | Inicio",
    description:
      "Tu tienda de videojuegos online, con juegos, consolas y accesorios para todas las plataformas",
    url: "https://tiendavideojuegos.com",
    siteName: "Tienda de Videojuegos",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534820782873-f3f556d24be6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYW5vcmFtYXM5fDJ8fHx8fGVufDB8fHx8&ixlib=rb-4.0.3",
      },
    ],
  },
};

// De forma dinámica
// Cuando avancemos usaremos Firebase o cualquier base de datos para obtener productos
/*
export async function generateMetadata({ params, searchParams }, parent) {
  const { id } = params;
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json()); // Puedes usar Firebase aquí
  const parentMetadata = await parent;
  return {
    title: `Tienda de Videojuegos | ${product.title}`,
    description: product.description,
    openGraph: {
      title: `Tienda de Videojuegos | ${product.title}`,
      description: product.description,
      url: `https://tiendavideojuegos.com/product/${id}`,
      siteName: "Tienda de Videojuegos",
      images: [
        {
          url: product.image,
          alt: product.title,
          title: product.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    ...parentMetadata,
  };
}
*/

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-dark text-white py-10">
        <h1 className="text-4xl text-electric text-center mb-8">
          Bienvenido a nuestra Tienda de Videojuegos
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div className="bg-dark text-white p-6 rounded-lg shadow-glow">
            <h2 className="text-2xl mb-4">Juegos para todas las plataformas</h2>
            <p>
              Encuentra todos los títulos más populares para PS5, Xbox, Nintendo
              Switch, PC y más.
            </p>
          </div>
          <div className="bg-dark text-white p-6 rounded-lg shadow-glow">
            <h2 className="text-2xl mb-4">Consolas de última generación</h2>
            <p>
              Compra consolas como PS5, Xbox Series X, y PC Gamer para la mejor
              experiencia de juego.
            </p>
          </div>
          <div className="bg-dark text-white p-6 rounded-lg shadow-glow">
            <h2 className="text-2xl mb-4">Videojuegos Retro</h2>
            <p>
              Revive los clásicos con nuestra colección de videojuegos retro
              para consolas antiguas.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
