// app/api/product/[slug]/route.js

import { db } from "@/app/context/configFirebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;

  // Verifica que 'slug' no sea undefined ni vacío
  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  try {
    const ref = collection(db, "products");
    const q = query(ref, where("slug", "==", slug));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());

    if (data.length === 0) {
      return NextResponse.json(
        { error: "No product found with this slug" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error retrieving product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
