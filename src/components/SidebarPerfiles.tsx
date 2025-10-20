import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/perfil.css";

const perfiles = [
  { nombre: "Lautaro Colella", ruta: "/perfil/lautaro" },
  { nombre: "Cristian Páez", ruta: "/perfil/cristian" },
  { nombre: "Santiago Rojas", ruta: "/perfil/santiago" },
  { nombre: "Paola Álvarez", ruta: "/perfil/paola" },
  { nombre: "Silvana Fernández", ruta: "/perfil/silvana" },
];

export default function SidebarPerfiles() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const mostrarBarra = (e: MouseEvent) => {
      const dentroDeBarra = document
        .querySelector(".barra-perfiles")
        ?.getBoundingClientRect();
      const estaSobreBarra = dentroDeBarra && e.clientY <= dentroDeBarra.bottom;

      if (e.clientY < 70 || estaSobreBarra) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("mousemove", mostrarBarra);
    return () => window.removeEventListener("mousemove", mostrarBarra);
  }, []);

  return (
    <div className={`barra-perfiles ${visible ? "visible" : ""}`}>
      <div>
        <ul className="barra-lista">
          {perfiles.map((p, i) => (
            <li key={i}>
              <Link
                to={p.ruta}
                className={location.pathname === p.ruta ? "activo" : ""}
              >
                {p.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
