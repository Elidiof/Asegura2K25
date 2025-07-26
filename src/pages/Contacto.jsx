import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Contacto() {
  return (
     <>
      <Helmet>
        <title>Contacto | Asegura2K25</title>
      </Helmet>

      <section className="bg-[#1e3a8a] pb-8 pt-6">
        <h1 className="mb-6 text-center text-4xl font-bold text-white">
          Contáctenos
        </h1>

        <div className="mx-auto max-w-2xl space-y-6 rounded-2xl bg-white p-6 shadow-xl">
          <p className="text-center text-lg text-gray-700">
            Contáctenos por WhatsApp o email y le responderemos lo antes posible
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/34658945741?text=Hola%2C%20os%20contacto%20desde%20la%20web%20de%20Asegura2K25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-lg font-medium text-white transition hover:bg-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="mr-2 size-6 fill-current"
                aria-label="WhatsApp"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.768.966-.942 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.223-.242-.563-.487-.487-.669-.497-.173-.006-.372-.007-.57-.007-.198 0-.52.074-.793.372s-1.04 1.017-1.04 2.479 1.064 2.876 1.213 3.074c.148.198 2.096 3.2 5.076 4.487.709.306 1.262.49 1.694.627.712.226 1.362.194 1.874.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.075-.123-.272-.198-.57-.347m-5.421 5.032h-.002a8.956 8.956 0 01-4.526-1.225l-.323-.19-3.362.88.896-3.273-.211-.335a8.958 8.958 0 01-1.37-4.787c.001-4.97 4.042-9.013 9.018-9.013 2.406 0 4.667.937 6.384 2.643a8.926 8.926 0 012.637 6.373c-.003 4.97-4.044 9.013-9.015 9.013m0-19.13C6.477.284.868 5.893.865 12.899c0 2.269.594 4.45 1.72 6.363L0 24l4.856-1.274a11.242 11.242 0 005.675 1.515h.005c6.006 0 10.924-4.877 10.927-10.882.003-2.905-1.128-5.643-3.175-7.688A10.877 10.877 0 0011.97.284" />
              </svg>
              WhatsApp
            </a>

            {/* Botón Email */}
            <a
              href="mailto:contacto@asegura2k25.com"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-lg font-medium text-white transition hover:bg-sky-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 size-6"
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

          <Link
            to="/"
            className="block text-center text-blue-600 hover:underline"
          >
            ← Volver a la web
          </Link>
        </div>
      </section>
    </>
  );
}
