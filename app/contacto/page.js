"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();

    const contactData = { name, email, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message); // Mensaje de éxito
        router.push("/"); // Redirigir a la página principal después del envío
      } else {
        alert("Hubo un error al enviar el formulario. Inténtalo nuevamente.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario. Inténtalo nuevamente.");
    }
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Contacto</h1>
      <form className="space-y-4" onSubmit={submitForm}>
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-white bg-black"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-white bg-black"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-white bg-black"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
          aria-label="Enviar"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
