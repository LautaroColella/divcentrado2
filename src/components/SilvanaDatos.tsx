import React from "react";

interface SilvanaDatosProps {
  nombre: string;
  edad: string;
  ubicacion: string;
}

export default function SilvanaDatos({ nombre, edad, ubicacion }: SilvanaDatosProps) {
  return (
    <div className="info-lateral izquierda">
      <p className="dato-nombre">{nombre}</p>
      <p className="dato-secundario">{ubicacion}</p>
      <p className="dato-secundario">{edad}</p>
    </div>
  );
}