
// src/pages/profile/Paola.tsx
import { useRef, useState } from "react";
import { ArrowLeft, Palette, Image as ImageIcon, Music, Film } from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/profiles/alvarez.css";

// IMPORTS desde src/assets/img (nombres EXACTOS)
import fondo1 from "../../assets/img/fondoTarjetaAlvarez1.jpg";
import fondo2 from "../../assets/img/fondoTarjetaAlvarez2.jpg";
import fondo3 from "../../assets/img/fondoTarjetaAlvarez3.jpg";
import fondo4 from "../../assets/img/fondoTarjetaAlvarez4.jpg";
import fondo5 from "../../assets/img/fondoTarjetaAlvarez5.jpg";
import fondo6 from "../../assets/img/fondoTarjetaAlvarez6.jpg";

import avatar1 from "../../assets/img/imgAlvarezPerfil.png";
import avatar2 from "../../assets/img/imgAlvarezPerfil1.png";
import avatar3 from "../../assets/img/imgAlvarezPerfil2.jpeg";

import mirandaBg  from "../../assets/img/fondoMiranda.jpg";
import katyBg     from "../../assets/img/fondoKaty.jpg";
import duaBg      from "../../assets/img/fondoDua.jpg";
import coldplayBg from "../../assets/img/fondoColdplay.jpg";

import pradaBg    from "../../assets/img/fondoPrada.jpg";
import prideBg    from "../../assets/img/fondoPride.jpg";
import conjuroBg  from "../../assets/img/fondoConjuro.jpg";
import avengersBg from "../../assets/img/fondoAvengers.jpg";

export default function Paola() {
  const fondosCard = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6];
  const avatares   = [avatar1, avatar2, avatar3];

  const artistas = [
    { name: "Miranda", bg: mirandaBg },
    { name: "Katy Perry", bg: katyBg },
    { name: "Dua Lipa", bg: duaBg },
    { name: "Coldplay", bg: coldplayBg },
  ];

  const movies = [
    { name: "El diablo viste a la moda", bg: pradaBg },
    { name: "Orgullo y prejuicio", bg: prideBg },
    { name: "El conjuro", bg: conjuroBg },
    { name: "Avengers",  bg: avengersBg },
  ];

  // --- estado / refs ---
  const [bgIndex, setBgIndex] = useState(0);
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [seleccion, setSeleccion] = useState<string>("Ninguno");
  const cardRef = useRef<HTMLDivElement | null>(null);

  const bgActual = fondosCard[bgIndex] ?? fondosCard[0];
  const avatarActual = avatares[avatarIndex] ?? avatares[0];

  // --- helpers ---
  const setCardBg = (url: string) => {
    if (cardRef.current) {
      cardRef.current.style.background = `url("${url}") center / cover no-repeat`;
    }
  };

  // --- acciones ---
  const cambiarFondo = () => {
    if (!fondosCard.length) return;
    const next = (bgIndex + 1) % fondosCard.length;
    setBgIndex(next);
    setCardBg(fondosCard[next]);
  };

  const cambiarAvatar = () => {
    if (!avatares.length) return;
    const el = document.getElementById("avatar");
    el?.classList.add("fade-out");
    setTimeout(() => {
      setAvatarIndex(i => (i + 1) % avatares.length);
      el?.classList.remove("fade-out");
    }, 400);
  };

  const cicloArtista = () => {
    if (!artistas.length) return;
    const i = (Math.random() * artistas.length) | 0;
    setSeleccion(`Artista: ${artistas[i].name}`);
    setCardBg(artistas[i].bg);
  };

  const cicloPelicula = () => {
    if (!movies.length) return;
    const i = (Math.random() * movies.length) | 0;
    setSeleccion(`Película: ${movies[i].name}`);
    setCardBg(movies[i].bg);
  };

  return (
    <div className="paola-scope">
      {/* Header / volver a portada si tenés una ruta raíz */}
      <header>
        <nav>
          <Link to="/" className="volver">
            <ArrowLeft /> Portada
          </Link>
        </nav>
      </header>

      {/* Card */}
      <main
        ref={cardRef}
        className="card"
        style={{ background: `url("${bgActual}") center / cover no-repeat` }}
      >
        {/* Avatar */}
        <figure className="card__avatar-wrap">
          <img
            id="avatar"
            className="avatar"
            src={avatarActual}
            alt="Foto de perfil de Paola"
          />
        </figure>

        {/* Contenido */}
        <div className="card__content">
          <h1 className="card__title">Alvarez Paola</h1>
          <p className="card__meta"><strong>Ubicación:</strong> Tucumán, Argentina</p>
          <p className="card__meta"><strong>Edad:</strong> 36 años</p>

          <section className="card__section">
            <h2>Presentación</h2>
            <p className="presentacion">
              Soy estudiante de dos carreras vinculadas a la tecnología.
              Me apasionan la programación, el diseño de interfaces y el trabajo en equipo.
              Participé en proyectos académicos y busco seguir creciendo en el área de desarrollo web y de software.
              En mi tiempo libre disfruto de jugar videojuegos, escuchar música y compartir momentos con mi familia y mis mascotas.
            </p>
          </section>

          <section className="card__section">
            <h2>Habilidades</h2>
            <ul className="list">
              <li>Desarrollo Web (HTML, CSS, JS)</li>
              <li>Programación en C, C#, Java, React</li>
              <li>Gestión de Proyectos</li>
              <li>Trabajo en Equipo</li>
            </ul>
          </section>

          <section className="card__section">
            <h2>Música Favorita</h2>
            <ul className="list">
              <li>Miranda</li>
              <li>Katy Perry</li>
              <li>Dua Lipa</li>
              <li>Coldplay</li>
            </ul>
          </section>

          <section className="card__section">
            <h2>Películas Favoritas</h2>
            <ul className="list">
              <li>El diablo viste a la moda</li>
              <li>Orgullo y prejuicio</li>
              <li>El conjuro</li>
              <li>Avengers</li>
            </ul>
          </section>

          <section className="card__section">
            <h2>Selección Actual</h2>
            <p id="seleccion-actual" className="card__meta">{seleccion}</p>
          </section>

          {/* Botones */}
          <section className="card__actions">
            <button className="btn" onClick={cambiarFondo}>
              <Palette /><span>Cambiar Estilo</span>
            </button>
            <button className="btn" onClick={cambiarAvatar}>
              <ImageIcon /><span>Cambiar Foto</span>
            </button>
            <button className="btn" onClick={cicloArtista}>
              <Music /><span>Fondos Artistas</span>
            </button>
            <button className="btn" onClick={cicloPelicula}>
              <Film /><span>Fondos Películas</span>
            </button>
          </section>
        </div>
      </main>

      <footer>
        <small>© 2025 Tarjeta Personal - Paola Alvarez</small>
      </footer>
    </div>
  );
}

