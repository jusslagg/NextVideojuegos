"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const response = await fetch(`http://localhost:3000/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.json();
    console.log(data);
  };

  const router = useRouter();
  return (
    <main className="p-6 max-w-md mx-auto bg-dark text-white rounded-lg shadow-glow">
      <h1 className="text-4xl font-bold mb-6 text-center text-electric">
        Contacto
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-2 block w-full p-3 rounded-lg text-black border-2 border-electric focus:outline-none focus:border-electric placeholder:text-electric transition-all"
            placeholder="Escribe tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 block w-full p-3 rounded-lg text-black border-2 border-electric focus:outline-none focus:border-electric placeholder:text-electric transition-all"
            placeholder="Escribe tu correo"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-2 block w-full p-3 rounded-lg text-black border-2 border-electric focus:outline-none focus:border-electric placeholder:text-electric transition-all"
            placeholder="Escribe tu mensaje"
          />
        </div>
        <div className="flex justify-between gap-4">
          <button
            type="submit"
            className="bg-electric text-dark font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-dark hover:text-electric shadow-glow"
            aria-label="Enviar"
          >
            Enviar
          </button>
          <button
            onClick={() => router.back()}
            className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-dark hover:text-electric shadow-glow"
            aria-label="Volver"
          >
            Volver
          </button>
        </div>
      </form>
    </main>
  );
}
