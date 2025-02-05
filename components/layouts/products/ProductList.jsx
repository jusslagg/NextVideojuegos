import ProductCard from "@/components/layouts/products/ProductCard";

const ProductList = async ({ category }) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/products/${category}`,
      {
        cache: "no-store",
      }
    );

    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error al obtener los productos: ${response.statusText}`);
    }

    // Intentamos parsear la respuesta como JSON
    const items = await response.json();

    // Validamos que 'items' no sea vacío antes de renderizar
    if (items.length === 0) {
      return (
        <div className="py-3 bg-base-300 flex flex-col items-center">
          <h2 className="text-current text-2xl font-bold text-center capitalize">
            {category}
          </h2>
          <p>No se encontraron productos.</p>
        </div>
      );
    }

    return (
      <>
        <div className="py-3 bg-base-300 flex flex-col items-center">
          <h2 className="text-current text-2xl font-bold text-center capitalize">
            {category}
          </h2>
          <p>Total: {items.length} productos </p>
        </div>
        <div className="grid sm: grid-flow-row grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center py-3 bg-base-300 sm:px-3">
          {items.map((item) => (
            <ProductCard
              item={item}
              key={item.slug}
              title={item.title}
              price={item.price}
              stock={item.stock}
              imageUrl={item.imageUrl}
              category={item.category}
            />
          ))}
        </div>
      </>
    );
  } catch (error) {
    // Si ocurre un error, mostramos un mensaje
    console.error("Error al cargar los productos:", error);
    return (
      <div className="py-3 bg-base-300 flex flex-col items-center">
        <h2 className="text-current text-2xl font-bold text-center capitalize">
          {category}
        </h2>
        <p>Hubo un error al cargar los productos.</p>
      </div>
    );
  }
};

export default ProductList;
