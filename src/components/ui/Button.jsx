import React from "react";

export function Button({ children, ...props }) {
  return (
    <button
      className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
      {...props}
    >
      {children}
    </button>
  );
}
