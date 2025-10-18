import React from "react";

interface SilvanaBloqueProps {
  titulo: string;
  items: string[];
  tipo?: string;
}

export default function SilvanaBloque({ titulo, items, tipo }: SilvanaBloqueProps) {
  return (
    <div className={`bloque ${tipo || ""}`}>
      <h2>{titulo}</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}