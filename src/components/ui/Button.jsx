import React from 'react'
export function Button({ children, ...props }) {
  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      {...props}
    >
      {children}
    </button>
  )
}