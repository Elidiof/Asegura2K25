import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto | Asegura2K25</title>
      </Helmet>

      <section className="pt-6 pb-8 bg-[#1e3a8a]">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Contáctenos
        </h1>

        <div className="mx-auto max-w-2xl bg-white rounded-2xl shadow-xl p-6 space-y-6">
          <p className="text-gray-700 text-center text-lg">
            Contáctenos por WhatsApp o email y le responderemos lo antes posible
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/34658945741?text=Hola%2C%20os%20contacto%20desde%20la%20web%20de%20Asegura2K25"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium text-lg px-6 py-3 rounded-xl inline-flex items-center justify-center transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
          </div>

          <Link
            to="/"
            className="text-blue-600 hover:underline text-center block"
          >
            ← Volver a la web
          </Link>
        </div>
      </section>
    </>
  );
}
