import { NextResponse } from "next/server";
import db from "@/app/context/configFirebase"; // Importación por defecto, sin las llaves {}
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(request, { params }) {
  const { category } = params; // Asegúrate de que 'category' esté correctamente pasando desde la URL.

  let ref;
  if (category === "all") {
    ref = query(collection(db, "products"));
  } else {
    ref = query(collection(db, "products"), where("category", "==", category));
  }

  try {
    const querySnapshot = await getDocs(ref);
    const products = querySnapshot.docs.map((doc) => doc.data());

    if (products.length === 0) {
      return NextResponse.json(
        { message: "No hay productos disponibles." },
        { status: 404 }
      );
    }

    const sortedProducts = products.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    return NextResponse.json(sortedProducts);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return NextResponse.json(
      { message: "Error al obtener los productos." },
      { status: 500 }
    );
  }
}
