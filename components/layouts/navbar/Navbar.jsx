"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ThemeController from "../../common/themeController/ThemeController";
import CartWidget from "@/components/common/cartWidget/CartWidget";

const Navbar = () => {
  const router = useRouter();

  return (
    <header>
      <nav className="navbar bg-base-100" data-theme="coffee">
        <div className="navbar-start">
          <aside className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="font-bold" href={"/about"}>
                  Conocenos
                </Link>
                <Link
                  href="/contacto"
                  className="font-normal hover:font-bold text-2xl font-regular"
                >
                  <i className="fab fa-youtube"></i> Contacto
                </Link>
                <Link
                  href="/login"
                  className="font-normal hover:font-regular text-2xl font-regular"
                >
                  <i className="fab fa-youtube"></i> Ingresar
                </Link>
                <Link
                  href="/register"
                  className="font-normal hover:font-bold text-2xl font-regular"
                >
                  <i className="fab fa-youtube"></i> Registrarse
                </Link>
              </li>
              <details className="font-bold">
                <summary>Videojuegos</summary>
                <ul className="p-2">
                  <li>
                    <button
                      onClick={() => router.push("/products/todos")}
                      className="btn btn-ghost p-0"
                    >
                      Todos los videojuegos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/products/xbox")}
                      className="btn btn-ghost p-0"
                    >
                      Xbox
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/products/playstation")}
                      className="btn btn-ghost p-0"
                    >
                      Playstation
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/products/nintendo")}
                      className="btn btn-ghost p-0"
                    >
                      Nintendo
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/products/pc")}
                      className="btn btn-ghost p-0"
                    >
                      PC
                    </button>
                  </li>
                </ul>
              </details>
            </ul>
          </aside>
          <Link href={"/"} className="btn btn-link p-0 mb-3">
            <Image
              src="/logoApp.png" // Usando la imagen de la carpeta public
              alt="logo"
              width={65}
              height={65}
              priority
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-bold" href={"/about"}>
                Conocenos
              </Link>
            </li>
            <li>
              <details className="font-bold">
                <summary>Videojuegos</summary>
                <ul className="p-2 w-52 z-10">
                  <li>
                    <button
                      onClick={() => router.push("/products/todos")}
                      className="btn btn-ghost p-0"
                    >
                      Todos los videojuegos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/products/xbox")}
                      className="btn btn-ghost p-0"
                    >
                      Xbox
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/products/playstation")}
                      className="btn btn-ghost p-0"
                    >
                      Playstation
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/products/nintendo")}
                      className="btn btn-ghost p-0"
                    >
                      Nintendo
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/products/pc")}
                      className="btn btn-ghost p-0"
                    >
                      PC
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {/* Botones de Login y Registrarse */}
          <Link href={"/login"} className="btn btn-primary mr-2">
            Ingresar
          </Link>
          <Link href={"/register"} className="btn btn-primary mr-2">
            Registrarse
          </Link>
          <ThemeController />
          <Link href={"/cart"}>
            <CartWidget />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
