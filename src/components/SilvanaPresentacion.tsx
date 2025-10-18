import React from "react";

interface SilvanaPresentacionProps {
  texto: string;
}

export default function SilvanaPresentacion({ texto }: SilvanaPresentacionProps) {
  return (
    <div className="info-lateral derecha">
      <p className="presentacion-texto">{texto}</p>
    </div>
  );
}