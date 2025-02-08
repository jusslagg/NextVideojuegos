import "./globals.css";
import Navbar from "../components/layouts/navbar/Navbar";
import Footer from "../components/layouts/footer/Footer";
import { Providers } from "./Providers";
import { Montserrat } from "next/font/google";
import { AuthProvider } from "./context/AuthContext";
export const metadata = {
  title: "GameSphere | Home",
  description:
    "Sumérgete en el mundo de los videojuegos con una increíble selección de títulos para todas las plataformas",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.className}>
      <body>
        <main>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
