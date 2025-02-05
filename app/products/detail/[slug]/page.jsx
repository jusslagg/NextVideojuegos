import SkeletonCard from "@/components/common/skeletonCard/SkeletonCard";
import ProductDetail from "@/components/layouts/products/ProductDetail";
import { Suspense } from "react";

// Componente asincrónico para la página de detalle del producto
const DetailPage = ({ params }) => {
  const { slug } = params; // Extraemos el 'slug' de los parámetros de la URL

  return (
    <Suspense fallback={<SkeletonCard cards={1} />}>
      <ProductDetail slug={slug} />{" "}
      {/* Le pasamos el 'slug' al componente ProductDetail */}
    </Suspense>
  );
};

export default DetailPage;
