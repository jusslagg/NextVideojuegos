"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeController from "../../common/themeController/ThemeController";
import CartWidget from "@/components/common/cartWidget/CartWidget";

export const metadata = {
  title: "Logo panaderia la fika | Home",
  description: "Ecommerce panaderia",
  keywords: "panaderia, la fika, ecommerce",
};

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
                  Nosotros
                </Link>
              </li>
              <details className="font-bold">
                <summary>Videojuegos</summary>
                <ul className="p-2">
                  <li>
                    <button
                      onClick={() => router.push("/products/all")}
                      className="btn btn-ghost p-0"
                    >
                      Todos los videojuegos
                    </button>
                    <button
                      onClick={() => router.push("/products/xbox")}
                      className="btn btn-ghost p-0"
                    >
                      Xbox
                    </button>
                    <button
                      onClick={() => router.push("/products/playstation")}
                      className="btn btn-ghost p-0"
                    >
                      Playstation
                    </button>
                    <button
                      onClick={() => router.push("/products/nintendo")}
                      className="btn btn-ghost p-0"
                    >
                      Nintendo
                    </button>
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
                Nosotros
              </Link>
            </li>
            <li>
              <details className="font-bold">
                <summary>Videojuegos</summary>
                <ul className="p-2 w-52 z-10">
                  <li>
                    <button
                      onClick={() => router.push("/products/all")}
                      className="btn btn-ghost p-0"
                    >
                      Todos los videojuegos
                    </button>
                    <button
                      onClick={() => router.push("/products/xbox")}
                      className="btn btn-ghost p-0"
                    >
                      Xbox
                    </button>
                    <button
                      onClick={() => router.push("/products/playstation")}
                      className="btn btn-ghost p-0"
                    >
                      Playstation
                    </button>
                    <button
                      onClick={() => router.push("/products/nintendo")}
                      className="btn btn-ghost p-0"
                    >
                      Nintendo
                    </button>
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
