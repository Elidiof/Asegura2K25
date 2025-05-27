import Layout from '../components/Layout';

/**
 * Página de Aviso Legal.
 * Sustituye los párrafos de ejemplo por tu texto legal definitivo.
 */
export default function AvisoLegal() {
  return (
    <Layout titulo="Aviso Legal">
      <h1 className="text-3xl font-semibold mb-6">Aviso Legal</h1>

      <p>
        <strong>Titular:</strong> Elidio Ferrer — CIF/NIF: __________ —
        Domicilio social: Calle Pino 27, 23740 Andújar (Jaén) —
        Email: contacto@asegura2k25.com
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Objeto</h2>
      <p>
        El presente Aviso Legal regula el uso del sitio web asegura2k25.com. 
        La navegación por este sitio atribuye la condición de usuario e implica 
        la aceptación plena y sin reservas de cada una de las disposiciones 
        incluidas en este Aviso Legal, que pueden sufrir modificaciones.
      </p>

      {/* Resto del contenido legal */}
    </Layout>
  );
}