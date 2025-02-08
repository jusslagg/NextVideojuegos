"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext"; // Asegúrate de que el contexto esté bien configurado

const Register = () => {
  const { registerUser } = useContext(AuthContext); // Desestructuración para obtener la función de registro
  const [form, setForm] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const router = useRouter();

  // Manejo del cambio en los inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      email: e.target.email.value,
      password: e.target.password.value,
      userName: e.target.userName.value,
    };
    try {
      await registerUser(values); // Enviar los valores al contexto para registrar al usuario
      router.push("/login"); // Redirigir a la página de login después del registro
      alert("Usuario registrado exitosamente!");
    } catch (error) {
      console.log(error.message); // Manejo de errores
      alert("Hubo un error al registrar el usuario");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-black bg-opacity-60 shadow-lg rounded-lg p-8 w-full max-w-md backdrop-blur-lg border border-gray-700">
        <h1 className="text-3xl font-extrabold text-center text-white mb-6 text-shadow">
          Regístrate
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="userName"
              value={form.userName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border-2 border-transparent bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 text-white placeholder-gray-400 transition-all"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border-2 border-transparent bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 text-white placeholder-gray-400 transition-all"
              placeholder="Ingresa tu correo"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border-2 border-transparent bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 text-white placeholder-gray-400 transition-all"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          >
            Regístrame
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
