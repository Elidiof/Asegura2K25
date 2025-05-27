# Actualización de pie de página y textos legales — Asegura2K25

Este paquete incluye todos los componentes y páginas necesarias para separar 
las políticas legales (Aviso Legal, Privacidad y Cookies) y mantener el diseño 
coherente con el resto de la web.

## Instrucciones rápidas

1. Copia el contenido de `src/components/` y `src/pages/` en tu repositorio.
2. Asegúrate de tener react-router-dom configurado y añade las rutas en tu `App.jsx`:
   ```jsx
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import AvisoLegal from './pages/AvisoLegal';
   import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
   import PoliticaCookies from './pages/PoliticaCookies';

   // ...
   <Router>
     <Routes>
       {/* tus rutas existentes */}
       <Route path="/aviso-legal" element={<AvisoLegal />} />
       <Route path="/privacidad" element={<PoliticaPrivacidad />} />
       <Route path="/cookies" element={<PoliticaCookies />} />
     </Routes>
   </Router>
   ```
3. Reemplaza los textos de ejemplo por tu contenido legal definitivo.
4. Revisa estilos Tailwind y ajusta según tu paleta y tipografía si es necesario.
5. Sube los cambios a GitHub y verifica en Netlify.

---

Contacto: Elidio Ferrer · contacto@asegura2k25.com