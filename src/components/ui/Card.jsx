// src/components/ui/Card.jsx
import React from 'react'

export function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-[#F9F4F0] rounded-xl shadow p-4 border border-black ${className}`}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>
}
