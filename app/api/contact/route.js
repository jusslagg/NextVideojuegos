// app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.json();
  const { name, email, message } = formData;

  // Lógica para manejar el mensaje (guardar en base de datos, enviar correo, etc.)
  return NextResponse.json({
    message: `Gracias, ${name}! Hemos recibido tu mensaje.`,
  });
}
