// src/pages/Seguro.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Seguro() {
  const { name } = useParams();
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-blue-900 mb-4">
        Detalles del seguro: <span className="capitalize">{name}</span>
      </h1>
      <p className="text-gray-700">
        Aquí iría la descripción y opciones de contratación para el seguro de <strong>{name}</strong>.
      </p>
    </div>
  );
}
