import React from "react";
import { Link } from "react-router-dom";

/**
 * Botones legales (versión blanco invertido + sombras)
 * Se usa dentro de <Footer/>.
 */
export default function FooterLinks() {
  // Lista de enlaces para que puedas añadir / quitar fácilmente
  const links = [
    { href: "/aviso-legal", label: "Aviso Legal" },
    { href: "/privacidad", label: "Privacidad" },
    { href: "/cookies", label: "Cookies" },
    { href: "/declaracion", label: "Declarar accidente" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          to={href}
          className="
              bg-white hover:bg-gray-200 text-black
              font-medium py-2 px-6 rounded-full
              shadow-lg shadow-black/30 hover:shadow-black/50
              transition-shadow
            "
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
