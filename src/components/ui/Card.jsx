// src/components/ui/Card.jsx
import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-xl border border-gray-200 bg-white
        p-6 shadow-sm
        transition hover:-translate-y-1 hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
