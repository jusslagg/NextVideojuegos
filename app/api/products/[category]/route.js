// app/api/products/[category]/route.js

import { db } from "@/app/context/configFirebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { category } = params;

  // Verifica que 'category' no sea undefined ni vacío
  if (!category) {
    return NextResponse.json(
      { error: "Category is required" },
      { status: 400 }
    );
  }

  try {
    const ref = collection(db, "products");
    const q = query(ref, where("category", "==", category));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());

    if (data.length === 0) {
      return NextResponse.json(
        { error: "No products found for this category" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error retrieving products:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
