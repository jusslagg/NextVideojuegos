"use client";
import { useRouter } from "next/navigation";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-4 bg-electric text-dark font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-dark hover:text-electric shadow-glow"
      aria-label="Regresar"
    >
      Regresar
    </button>
  );
};

export default ButtonBack;
