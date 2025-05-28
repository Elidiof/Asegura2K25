import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-blue-900 text-white flex flex-col items-center pb-8">
      <Helmet>
        <title>Aviso Legal | Asegura2K25</title>
      </Helmet>

      <img
        src="/logos/asegura2k25.png"
        alt="Asegura2K25"
        className="h-16 mt-6 mb-4"
      />

      <h1 className="text-4xl font-bold mb-6 tracking-wide">Aviso Legal</h1>

      <div className="w-full max-w-2xl bg-white text-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Objeto</h2>
          <p>
            El presente Aviso Legal regula el uso y acceso al sitio web
            <a href="https://asegura2k25.com" className="text-blue-600 hover:underline">
              asegura2k25.com
            </a>, propiedad de Elidio Ferrer (ASEGURA2K25).
          </p>
        </section>

        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Titularidad</h2>
          <p><strong>Titular:</strong> Elidio Ferrer</p>
          <p><strong>Domicilio:</strong> Calle Pino 27, Andújar (Jaén), 23740, España</p>
          <p><strong>Email:</strong> <a href="mailto:contacto@asegura2k25.com" className="text-blue-600 hover:underline">contacto@asegura2k25.com</a></p>
          <p><strong>Teléfono:</strong> <a href="tel:+34658945741" className="text-blue-600 hover:underline">658 945 741</a></p>
        </section>

        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Propiedad intelectual</h2>
          <p>
            Todos los contenidos (textos, imágenes, logotipos, etc.) están
            protegidos por la legislación de propiedad intelectual y son
            titularidad de ASEGURA2K25 o de terceros con licencia.
          </p>
        </section>

        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Responsabilidad</h2>
          <p>
            ASEGURA2K25 no se responsabiliza de errores u omisiones en los
            contenidos ni de los daños derivados de su uso, salvo negligencia
            demostrada.
          </p>
        </section>

        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Legislación aplicable</h2>
          <p>
            La relación con el usuario se rige por la normativa española.
            Cualquier controversia se someterá a los tribunales de Andújar (Jaén).
          </p>
        </section>

        <hr />

        <p className="text-center">
          Consulta también nuestra <Link to="/cookies" className="text-blue-600 hover:underline">Política de Cookies</Link>.
        </p>
        <p className="mt-4 text-center">
          <Link to="/" className="text-blue-600 hover:underline">← Volver a la web</Link>
        </p>
      </div>
    </main>
  )
}
