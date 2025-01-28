"use client";

const Footer = () => {
  return (
    <footer
      className="footer footer-center bg-base-300 p-10"
      data-theme="coffee"
    >
      <aside>
        {/* Imagen del logo con la imagen local logoApp.png */}
        <img
          src="/logoApp.png" // Usando la imagen de la carpeta public
          alt="Logo GameSphere"
          className="w-20"
        />
        <p className="font-bold text-base-content">GameSphere</p>
        <p className="text-base-content">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
        <p className="text-base-content">
          Hecho con <span className="text-red-500">♥</span> por Jesús Gil
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Instagram */}
          <button className="btn btn-ghost p-0">
            <a
              href="https://www.instagram.com/jusslagg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1737161717/logoInstagram_nafkek.svg"
                alt="Instagram"
              />
            </a>
          </button>

          {/* WhatsApp */}
          <button className="btn btn-ghost p-0">
            <a
              href="https://wa.me/1123861546"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1737161718/logoWhatsapp_nuueh6.svg"
                alt="WhatsApp"
              />
            </a>
          </button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
