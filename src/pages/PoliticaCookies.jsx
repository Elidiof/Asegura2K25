import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Cookies() {
  return (
    <main className="min-h-screen bg-blue-900 text-white flex flex-col items-center pb-8">
      <Helmet>
        <title>Política de Cookies | Asegura2K25</title>
      </Helmet>

      <img
        src="/logos/asegura2k5.png"
        alt="Asegura2K25"
        className="h-16 mt-6 mb-4"
      />

      <h1 className="text-4xl font-bold mb-6 tracking-wide">Política de Cookies</h1>

      <div className="w-full max-w-3xl bg-white text-gray-800 p-8 rounded-lg shadow-lg space-y-6 overflow-auto">
        <p>En ASEGURA2K25 utilizamos distintos tipos de cookies para mejorar tu experiencia:</p>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Nombre</th>
              <th className="border-b p-2">Tipo</th>
              <th className="border-b p-2">Finalidad</th>
              <th className="border-b p-2">Retención</th>
              <th className="border-b p-2">Proveedor</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-100">
              <td className="p-2">_ga</td>
              <td className="p-2">Analítica</td>
              <td className="p-2">Diferenciar usuarios</td>
              <td className="p-2">2 años</td>
              <td className="p-2">Google Analytics</td>
            </tr>
            <tr>
              <td className="p-2">_gid</td>
              <td className="p-2">Analítica</td>
              <td className="p-2">Registrar visitas únicas</td>
              <td className="p-2">24 horas</td>
              <td className="p-2">Google Analytics</td>
            </tr>
            <tr className="odd:bg-gray-100">
              <td className="p-2">session</td>
              <td className="p-2">Esencial</td>
              <td className="p-2">Mantener sesión activa</td>
              <td className="p-2">Sesión</td>
              <td className="p-2">Asegura2K25</td>
            </tr>
            <tr>
              <td className="p-2">user_pref</td>
              <td className="p-2">Funcional</td>
              <td className="p-2">Guardar preferencias</td>
              <td className="p-2">6 meses</td>
              <td className="p-2">Asegura2K25</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-2">¿Cómo gestionar?</h2>
          <p>
            Puedes configurar o desactivar estas cookies en cualquier momento
            haciendo clic en el icono de cookies situado en la esquina inferior
            derecha de la pantalla.
          </p>
        </section>

        <p className="mt-8 text-center">
          <Link to="/" className="text-blue-600 hover:underline">← Volver a la web</Link>
        </p>
      </div>
    </main>
  )
}
