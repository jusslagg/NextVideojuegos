import Link from "next/link";
import { useEffect, useState } from "react";

const getPosts = async () => {
  const res = await fetch("https://fastapiproject-1-eziw.onrender.com/blue", {
    cache: "no-store",
    next: {
      revalidate: 10, // Tiempo en milisegundos
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const Posts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPosts();
        setData(result);
      } catch (error) {
        setError("Hubo un problema al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="text-center text-electric animate-pulse">
        Cargando posts...
      </div>
    );
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-dark rounded-lg shadow-glow">
      <h1 className="text-4xl text-electric font-bold text-center mb-8">
        Posts
      </h1>
      <div className="space-y-6">
        <div className="p-6 bg-dark rounded-lg shadow-lg hover:shadow-neon transition-all duration-300">
          <h3 className="text-electric text-xl font-semibold">
            Currency: {data.currency}
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>Compra: {data.compra}</li>
            <li>Venta: {data.venta}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Posts;
