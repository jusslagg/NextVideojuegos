import { db } from "@/app/context/configFirebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function GET(req, { params }) {
  const { slug } = params; // Extrae el slug de los parámetros de la URL

  if (!slug) {
    return new Response("El slug es necesario para realizar la solicitud", {
      status: 400,
    });
  }

  try {
    // Consulta a Firestore para obtener el producto con el slug especificado
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    // Si no se encuentra el producto
    if (querySnapshot.empty) {
      return new Response("Producto no encontrado", { status: 404 });
    }

    // Si encontramos el producto, lo devolvemos
    const product = querySnapshot.docs[0].data();
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Si ocurre un error en la consulta
    console.error("Error al obtener el producto:", error);
    return new Response(`Error al obtener el producto: ${error.message}`, {
      status: 500,
    });
  }
}
