import React from "react";
import { Link } from "react-router-dom";

interface SilvanaBotonVolverProps {
  ruta?: string;
}

export default function SilvanaBotonVolver({ ruta = "/nombre" }: SilvanaBotonVolverProps) {
  return (
    <Link to={ruta} className="btn-volver-superior">
      Portada
    </Link>
  );
}