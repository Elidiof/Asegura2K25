import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContactButtons from "../components/ContactButtons";

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
                className="mr-2 size-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.112 1.52 5.854L0 24l6.315-1.657A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.803 17.197c-.243.68-1.42 1.323-2.015 1.4-.513.07-1.165.1-1.88-.12-.438-.138-1-.323-1.714-.63-2.972-1.29-4.922-4.298-5.072-4.496-.15-.198-1.212-1.614-1.212-3.073 0-1.457.597-2.207 1.04-2.653.443-.447.968-.56 1.29-.56h.62c.205 0 .462-.03.719.553.28.665.887 2.014.964 2.163.076.149.126.326.025.523-.1.197-.15.322-.298.495-.149.172-.312.386-.446.52-.148.148-.303.309-.13.605.174.298.771 1.271 1.655 2.06 1.134 1.013 2.092 1.325 2.388 1.474.297.15.471.125.644-.073.175-.198.745-.867.943-1.164.198-.298.396-.248.669-.15.273.1 1.734.818 2.03.967.297.148.495.223.57.347.075.123.075.719-.173 1.413z" />
              </svg>
              WhatsApp
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
