"use client";

import { useState, useEffect } from "react";

const ThemeController = () => {
  // Estado para controlar el tema
  const [theme, setTheme] = useState("light");

  // Cambia el tema cuando se inicializa el componente
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  // Función para alternar el tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Guardar en localStorage para mantener el estado
  };

  return (
    <button onClick={toggleTheme} className="btn btn-primary">
      {theme === "light" ? "🌙" : "☀️"}{" "}
      {/* Iconos para mostrar el tema actual */}
    </button>
  );
};

export default ThemeController;
