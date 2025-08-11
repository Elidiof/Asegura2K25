import React from "react";
// Asumo que estás usando react-router-dom para el componente Link.
// Si no es así, puedes cambiarlo por una etiqueta <a> normal.
// import { Link } from "react-router-dom";

/**
 * Botones legales (versión optimizada para móviles)
 * Se usa dentro de <Footer/>.
 * En pantallas pequeñas (<640px), los botones se apilan verticalmente.
 * En pantallas más grandes, se muestran en una fila.
 */
export default function FooterLinks() {
  // Lista de enlaces para que puedas añadir / quitar fácilmente
  const links = [
    { href: "/aviso-legal", label: "Aviso Legal" },
    { href: "/privacidad", label: "Privacidad" },
    { href: "/cookies", label: "Cookies" },
  ];

  // Componente de enlace simulado para demostración, ya que no tenemos react-router-dom aquí.
  // En tu proyecto real, usa el `import { Link } from "react-router-dom";`
  const Link = ({ to, children, className }) => (
    <a href={to} className={className}>
      {children}
    </a>
  );

  return (
    <div className="
      flex flex-col sm:flex-row sm:flex-wrap 
      justify-center items-center 
      gap-3 sm:gap-4 
      w-full px-4 sm:px-0
    ">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          to={href}
          className="
            w-full sm:w-auto text-center
            bg-white hover:bg-gray-200 text-black
            font-medium py-2 px-6 rounded-full
            shadow-lg shadow-black/30 hover:shadow-black/50
            transition-all duration-300
          "
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
