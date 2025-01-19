import Link from "next/link";

const MenuList = () => {
  return (
    <div>
      <nav className="mt-4 space-x-6 flex justify-center">
        <Link
          href="/"
          className="btn btn-ghost text-electric hover:text-white transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="btn btn-ghost text-electric hover:text-white transition duration-300"
        >
          About
        </Link>
        <Link
          href="/contacto"
          className="btn btn-ghost text-electric hover:text-white transition duration-300"
        >
          Contact
        </Link>
        <Link
          href="/productos"
          className="btn btn-ghost text-electric hover:text-white transition duration-300"
        >
          Catalogo
        </Link>
      </nav>
    </div>
  );
};

export default MenuList;
