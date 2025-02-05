"use client"; // Marca este archivo como un componente de cliente

import { useEffect, useState } from "react";
import ProductDetailCard from "./ProductDetailCard";

const ProductDetail = ({ slug }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/product/${slug}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            `Error al cargar el producto: ${response.statusText}`
          );
        }

        const item = await response.json();
        const product = Array.isArray(item) ? item[0] : item;

        setProduct(product); // Establece los datos del producto
      } catch (error) {
        setError(error.message); // Establece el mensaje de error
      } finally {
        setLoading(false); // Marca que la carga ha terminado
      }
    };

    fetchProduct();
  }, [slug]); // Se ejecuta cuando cambia el 'slug'

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ProductDetailCard item={product} />;
};

export default ProductDetail;
