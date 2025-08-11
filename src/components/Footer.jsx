import React from "react";
import FooterLinks from "./FooterLinks";

/**
 * Footer principal con fondo negro
 * Incluye <FooterLinks/> y el copyright.
 */
export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-6 bg-black py-4 text-center">
      {/* Botones legales */}
      <FooterLinks />

      {/* Copyright */}
      <p className="text-sm text-white">
        © 2025 Asegura2K25. Todos los derechos reservados.
      </p>
    </footer>
  );
}
