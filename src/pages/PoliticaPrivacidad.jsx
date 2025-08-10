import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Privacidad() {
  return (
    <main className="flex flex-col items-center bg-blue-900 pb-8 text-white">
      <Helmet>
        <title>Política de Privacidad | Asegura2K25</title>
      </Helmet>

      <h1 className="mb-6 text-4xl font-bold tracking-wide">Política de Privacidad</h1>

      <div className="w-full max-w-2xl space-y-6 rounded-lg bg-white p-8 text-gray-800 shadow-lg">
        <section>
          <h2 className="mb-2 text-2xl font-semibold">1. Responsable</h2>
          <p>
            El responsable del tratamiento es Elidio Ferrer,
            Calle Pino 27, Andújar (Jaén), 23740, España.
          </p>
        </section>

        <hr />

        <section>
          <h2 className="mb-2 text-2xl font-semibold">2. Finalidad y base</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>Contactarte para ofrecer presupuestos personalizados.</li>
            <li>Mejorar nuestros servicios y analizar el uso.</li>
            <li>Cumplir obligaciones legales.</li>
          </ul>
        </section>

        <hr />

        <section>
          <h2 className="mb-2 text-2xl font-semibold">3. Conservación</h2>
          <p>
            Los datos se conservarán mientras sea necesario para la finalidad
            y según plazos legales.
          </p>
        </section>

        <hr />

        <section>
          <h2 className="mb-2 text-2xl font-semibold">4. Derechos</h2>
          <p>
            Tienes derecho a acceder, rectificar, suprimir, limitar,
            oponerte y portar tus datos. Para ejercerlos, escribe a <a href="mailto:contacto@asegura2k25.com" className="text-blue-600 hover:underline">contacto@asegura2k25.com</a>.
          </p>
        </section>

        <hr />

        <section>
          <h2 className="mb-2 text-2xl font-semibold">5. Cookies</h2>
          <p>
            Para gestionar tus preferencias de cookies, visita la <Link to="/cookies" className="text-blue-600 hover:underline">Política de Cookies</Link> o usa el botón de configuración en la esquina inferior.
          </p>
        </section>

        <p className="mt-6 text-center">
          <Link to="/" className="text-blue-600 hover:underline">← Volver a la web</Link>
        </p>
      </div>
    </main>
  )
}
