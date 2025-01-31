import ProductCard from "../../../components/layouts/products/ProductCard"; // ✅ Importación corregida

const ProductList = async ({ category }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${category}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Error en API: ${res.status} ${res.statusText}`);
      return <p>Error al cargar los productos.</p>;
    }

    const items = await res.json();

    if (items.message) {
      // Si la respuesta contiene un mensaje de error (como "No hay productos disponibles")
      return <p className="text-center text-red-500">{items.message}</p>;
    }

    console.log("Productos obtenidos:", items); // ✅ Depuración de productos

    return (
      <div className="grid sm:grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center py-3 bg-base-300 sm:px-3">
        {items && items.length > 0 ? ( // ✅ Verificar que `items` no sea null o undefined
          items.map((item) => (
            <ProductCard
              key={item.slug} // ✅ Asegurar que `slug` esté definido
              item={item}
              title={item.title}
              price={item.price}
              stock={item.stock}
              imageUrl={item.imageUrl}
              category={item.category}
            />
          ))
        ) : (
          <p className="text-center text-red-500">
            No hay productos disponibles.
          </p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error en fetch:", error);
    return (
      <p className="text-center text-red-500">Error al obtener productos.</p>
    );
  }
};

export default ProductList;
