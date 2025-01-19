"use client";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Información de contacto */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-electric">Contacto</h2>
            <p>Av. 9 de Julio 1234, Buenos Aires, Argentina</p>
            <p>Obelisco, CABA</p>
            <p>Teléfono: (011) 1234-5678</p>
            <p>Email: lagg312@gmail.com</p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-electric">
              Enlaces rápidos
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="/about"
                  className="hover:text-electric transition-colors"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-electric transition-colors"
                >
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="hover:text-electric transition-colors"
                >
                  Información de envío
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-electric transition-colors"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-electric">Síguenos</h2>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-electric hover:text-white transition-all"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-electric hover:text-white transition-all"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/educacioncristian/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-electric hover:text-white transition-all"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-electric hover:text-white transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} GameSphere. Todos los derechos
            reservados.
          </p>
          <div className="flex justify-center items-center mt-4">
            <img src="/path/to/logoApp.png" alt="Logo" className="h-24" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
