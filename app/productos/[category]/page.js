"use client"; // Asegúrate de que esta línea esté al principio del archivo

import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../components/context/firebase";
import { useCart } from "../../components/context/CartContext"; // Asegúrate de que esta ruta esté correcta
import Image from "next/image";
import ButtonBack from "../../components/common/button/buttonBack";
import { useRouter } from "next/router";

const Page = () => {
  const [productos, setProductos] = useState([]);
  const { addToCart } = useCart(); // Accedemos al carrito
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const fetchProductos = async () => {
      if (!category) return; // Verifica que category esté definido

      try {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("category", "==", category));
        const productosSnapshot = await getDocs(q);
        const productosList = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosList); // Establecer productos en el estado
      } catch (error) {
        console.error("Error obteniendo productos: ", error);
      }
    };

    fetchProductos();
  }, [category]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.isArray(productos) && productos.length > 0 ? (
          productos.map((producto) => (
            <div
              key={producto.id}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <Image
                src={producto.imageUrl}
                alt={producto.name}
                width={100}
                height={100}
              />
              <h2>{producto.name}</h2>
              <p>{producto.description}</p>
              <button onClick={() => addToCart(producto)}>
                Agregar al carrito
              </button>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles en esta categoría.</p>
        )}
      </div>
      <ButtonBack />
    </div>
  );
};

export default Page;
