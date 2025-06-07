import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="bg-blue-900 py-6 text-center">
      <FooterLinks />
      <p className="text-xs text-white/70 mt-4">
        © {new Date().getFullYear()} Asegura2K25. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
