import { Link } from 'react-router-dom';

/**
 * Botonera para las políticas legales.
 * Reutiliza estilos Tailwind y añade accesibilidad con focus-visible.
 */
const Item = ({ to, children }) => (
  <Link
    to={to}
    className="rounded-full bg-slate-800 px-5 py-2 text-white text-sm
               transition hover:bg-slate-700 focus-visible:outline
               focus-visible:outline-2 focus-visible:outline-offset-2
               focus-visible:outline-white"
  >
    {children}
  </Link>
);

export default function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Item to="/aviso-legal">Aviso Legal</Item>
      <Item to="/privacidad">Privacidad</Item>
      <Item to="/cookies">Cookies</Item>
    </div>
  );
}