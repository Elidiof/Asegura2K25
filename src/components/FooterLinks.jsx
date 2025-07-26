import React from "react";

/**
 * Botones legales (versión blanco invertido + sombras)
 * Se usa dentro de <Footer/>.
 */
export default function FooterLinks() {
  // Lista de enlaces para que puedas añadir / quitar fácilmente
  const links = [
    { href: "/aviso-legal", label: "Aviso Legal" },
    { href: "/privacidad",  label: "Privacidad"  },
    { href: "/cookies",     label: "Cookies"     },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="
            rounded-full bg-white px-6
            py-2 font-medium text-black shadow-lg
            shadow-black/30 transition-shadow hover:bg-gray-200
            hover:shadow-black/50
          "
        >
          {label}
        </a>
      ))}
    </div>
  );
}
