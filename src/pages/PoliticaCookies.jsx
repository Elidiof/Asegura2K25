import Layout from '../components/Layout';

export default function PoliticaCookies() {
  return (
    <Layout titulo="Política de Cookies">
      <h1 className="text-3xl font-semibold mb-6">Política de Cookies</h1>

      <p>
        Este sitio web utiliza cookies propias y de terceros para mejorar la 
        experiencia de navegación y para fines analíticos. Al continuar 
        navegando, aceptas el uso de cookies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu 
        dispositivo cuando visitas determinadas páginas web.
      </p>

      {/* Resto del contenido de cookies */}
    </Layout>
  );
}