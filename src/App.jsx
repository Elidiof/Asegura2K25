// src/App.jsx (o donde tengas el carrusel)

// Importa todos los logos individualmente:
import mapfre from './assets/cias/mapfre.svg';
import reale from './assets/cias/reale.svg';
import generali from './assets/cias/generali.svg';
import allianz from './assets/cias/allianz.svg';
import axa from './assets/cias/axa.svg';
import asisa from './assets/cias/asisa.png';
import dkv from './assets/cias/dkv.png';
import helvetia from './assets/cias/helvetia.svg';
import zurich from './assets/cias/zurich.svg';
import adeslas from './assets/cias/adeslas.svg';
import catalanaoccidente from './assets/cias/catalanaoccidente.svg';
import mutuamadrilena from './assets/cias/mutuamadrilena.svg';
import santalucia from './assets/cias/santalucia.svg';
import pelayo from './assets/cias/pelayo.png';
import aegon from './assets/cias/aegon.svg';
import plusultra from './assets/cias/plusultra.svg';
import hiscox from './assets/cias/hiscox.svg';

// Mapea nombre → módulo importado
const logos = {
  mapfre,
  reale,
  generali,
  allianz,
  axa,
  asisa,
  dkv,
  helvetia,
  zurich,
  adeslas,
  catalanaoccidente,
  mutuamadrilena,
  santalucia,
  pelayo,
  aegon,
  plusultra,
  hiscox,
};

// Lista de claves para iterar
const aseguradoras = Object.keys(logos);

export default function App() {
  return (
    {/* ... */}
    <Marquee gradient={false} speed={50} pauseOnHover loop>
      {aseguradoras.map((key) => (
        <img
          key={key}
          src={logos[key]}
          alt={key.toUpperCase()}
          className="h-12 mx-6 inline-block"
        />
      ))}
    </Marquee>
    {/* ... */}
  );
}
