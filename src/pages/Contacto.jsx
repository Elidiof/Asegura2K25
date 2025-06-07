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
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.371 0 0 5.371 0 12c0 2.121.553 4.113 1.605 5.906L0 24l6.332-1.643C8.21 23.444 10.086 24 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm6.555 17.048c-.272.765-1.592 1.504-2.243 1.6-.6.088-1.362.126-2.187-.139-.504-.155-1.157-.377-2.022-.84a11.566 11.566 0 01-3.894-3.682 4.477 4.477 0 01-.915-2.364c-.016-.436.12-.875.411-1.254.28-.37.656-.554 1.064-.508.44.051.961.228 1.535.525.52.27.819.468.965.561.243.156.407.29.537.443.17.196.247.337.317.491.093.204.023.414-.06.601-.084.189-.181.321-.337.503-.133.15-.275.297-.406.44-.137.152-.137.305-.05.45.088.146.347.595.746 1.054a9.209 9.209 0 002.058 1.824c.357.224.638.375.88.491.32.161.565.245.78.196.218-.049.667-.273.95-.537.242-.23.377-.347.532-.564.155-.217.225-.36.342-.599.103-.208.21-.364.31-.484.107-.128.195-.17.319-.132.126.04.791.373.926.439.139.067.232.102.267.157.034.054.034.346-.125.79z" />
              </svg>
              WhatsApp
            </a>

            {/* Botón Email */}
            <a
              href="mailto:contacto@asegura2k25.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-6 py-3 rounded-xl inline-flex items-center justify-center transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
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

          <Link to="/" className="text-blue-600 hover:underline text-center block">
            ← Volver a la web
          </Link>
        </div>
      </section>
    </>
  );
}
