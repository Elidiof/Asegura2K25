// src/components/ui/Card.jsx
import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white border border-gray-200 rounded-xl
        shadow-sm hover:shadow-lg
        transition transform hover:-translate-y-1
        p-6
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
