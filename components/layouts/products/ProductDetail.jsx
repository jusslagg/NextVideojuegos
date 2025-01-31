import ProductDetailCard from "./ProductDetailCard";

const ProductDetail = async ({ slug }) => {
  try {
    const response = await fetch(`http://localhost:3000/api/product/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      // Si la respuesta no es correcta (por ejemplo, un 404 o 500), lanzamos un error
      throw new Error(`Error al cargar el producto: ${response.statusText}`);
    }

    // Si la respuesta es correcta, la parseamos a JSON
    const item = await response.json();

    // Si el resultado es un array, tomamos el primer elemento
    const product = Array.isArray(item) ? item[0] : item;

    return (
      <>
        <ProductDetailCard item={product} />
      </>
    );
  } catch (error) {
    // Si ocurre un error durante la solicitud o el parseo, lo mostramos en consola
    console.error("Error al cargar los detalles del producto:", error);
    return <div>Hubo un error al cargar el producto.</div>;
  }
};

export default ProductDetail;
