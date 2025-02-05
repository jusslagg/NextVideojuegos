"use client";
import { useAuthContext } from "../context/AuthContext"; // Usamos el hook para acceder al contexto
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Contacto() {
  const { registerUser, googleLogIn } = useAuthContext(); // Usamos el hook para acceder al contexto
  const router = useRouter();

  const submitForm = (e) => {
    e.preventDefault();
    const values = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    registerUser(values); // Llamamos al método del contexto para registrar al usuario
    router.push("/"); // Redirige al usuario a la página principal
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">LogIn</h1>
      <form className="space-y-4" onSubmit={submitForm}>
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-white"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-white bg-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-white"
          >
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-white bg-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-lg font-medium text-white"
          >
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-white bg-transparent"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
          aria-label="Enviar"
        >
          Enviar
        </button>

        <button
          onClick={() => router.back()}
          className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
          aria-label="Volver"
        >
          Volver
        </button>
      </form>
      <div className="flex items-center p-2 rounded-md mt-4">
        <Image
          src="/imgoogle.png"
          alt="Google"
          width={100}
          height={100}
          className="object-contain"
        />
        <button
          onClick={googleLogIn} // Llamamos al login de Google aquí
          className="ml-4 text-white font-bold py-2 px-4 rounded"
          aria-label="Ingresar con Google"
        >
          Google
        </button>
      </div>
    </main>
  );
}
