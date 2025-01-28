/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https", // Asegúrate de que el protocolo sea https
        hostname: "res.cloudinary.com", // Dominio de Cloudinary
        port: "",
        pathname: "/**", // Puedes especificar el pathname si lo necesitas
      },
    ],
  },
};

export default nextConfig;
