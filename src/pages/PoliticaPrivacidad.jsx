import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-blue-900 text-white flex flex-col items-center pb-8">
      <Helmet>
        <title>Política de Privacidad | Asegura2K25</title>
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 tracking-wide">Política de Privacidad</h1>

      <div className="w-full max-w-2xl bg-white text-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Responsable</h2>
          <p>
            El responsable del tratamiento es Elidio Ferrer,
            Calle Pino 27, Andújar (Jaén), 23740, España.
          </p>
        </section>

        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Finalidad y base</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Contactarte para ofrecer presupuestos personalizados.</li>
            <li>Mejorar nuestros servicios y analizar el uso.</li>
            <li>Cumplir obligaciones legales.</li>
          </ul>
        </section>

        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Conservación</h2>
          <p>
            Los datos se conservarán mientras sea necesario para la finalidad
            y según plazos legales.
          </p>
        </section>

        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Derechos</h2>
          <p>
            Tienes derecho a acceder, rectificar, suprimir, limitar,
            oponerte y portar tus datos. Para ejercerlos, escribe a <a href="mailto:contacto@asegura2k25.com" className="text-blue-600 hover:underline">contacto@asegura2k25.com</a>.
          </p>
        </section>

        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
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
