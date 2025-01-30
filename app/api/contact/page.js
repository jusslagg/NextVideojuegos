import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.json();
  const { name, email, message } = formData;

  // Lógica para manejar el mensaje, como guardarlo en la base de datos o enviarlo por correo electrónico.
  // Aquí puedes agregar tu lógica personalizada.

  return NextResponse.json({
    message: `Gracias, ${name}! Hemos recibido tu mensaje.`,
  });
}
