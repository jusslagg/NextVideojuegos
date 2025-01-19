import { productos } from "../../mock/productos";
import ButtonBack from "../../components/common/button/buttonBack";

export const metadata = {
  title: "Videojuegos | Categoría",
  description:
    "Explora nuestra selección de videojuegos en diferentes categorías como acción, aventura, deportes, estrategia, y más.",
  keywords:
    "videojuegos, tienda de videojuegos, consolas, juegos, acción, aventura, deportes, estrategia, RPG, videojuegos online, gaming",
  openGraph: {
    title: "Videojuegos | Categoría",
    description:
      "Explora nuestra selección de videojuegos en diferentes categorías como acción, aventura, deportes, estrategia, y más.",
    url: "https://tiendavideojuegos.com",
    siteName: "Videojuegos",
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=Videojuegos+Tienda", // Cambia por una imagen representativa
        alt: "Imagen tienda videojuegos",
      },
    ],
  },
};

export default function CategoryPage({ params }) {
  const { category } = params;
  const filteredProducts = productos.filter(
    (producto) => producto.category === category
  );

  return (
    <div className="p-6 max-w-7xl mx-auto bg-dark text-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-electric">
        {category}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((producto) => (
          <div
            key={producto.id}
            className="border border-gray-300 rounded-lg p-4 shadow-glow hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-electric mb-4">
              {producto.title}
            </h2>
            <img
              src={producto.imageUrl}
              alt={producto.title}
              className="object-cover w-full h-48 mb-4 rounded-lg transition duration-300 hover:scale-105"
            />
            <p className="text-lg font-bold mb-2">${producto.price}</p>
            <p className="text-sm text-gray-400 mb-4">
              Stock: {producto.stock} disponibles
            </p>
            <button
              className="w-full bg-electric text-dark font-bold py-2 px-4 rounded shadow-glow hover:bg-electric hover:text-dark transition duration-200"
              aria-label="Agregar al carrito"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
      <ButtonBack />
    </div>
  );
}
