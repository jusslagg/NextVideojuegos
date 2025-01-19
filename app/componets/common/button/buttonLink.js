import Link from "next/link";

export default function ButtonLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-electric text-4xl font-bold p-4 transition-all duration-300 hover:bg-dark hover:text-electric rounded-lg shadow-glow"
      aria-label={children}
    >
      {children}
    </Link>
  );
}
