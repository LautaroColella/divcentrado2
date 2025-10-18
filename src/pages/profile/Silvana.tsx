import { useState, useEffect } from "react";
import "../../styles/profiles/silvanaStyleBase.css";
import "../../styles/profiles/silvanaStyleSuave.css";
import "../../styles/profiles/silvanaStyleAudas.css";
import silvanaSuave from "../../assets/img/silvanaSuave.jpg";
import silvanaAudas from "../../assets/img/silvanaAudas.jpg";
import { Link } from "react-router-dom";
import SilvanaBloque from "../../components/SilvanaBloque";
import SilvanaAvatar from "../../components/SilvanaAvatar";
import SilvanaPresentacion from "../../components/SilvanaPresentacion";
import SilvanaDatos from "../../components/SilvanaDatos";
import SilvanaBotonVolver from "../../components/SilvanaBotonVolver";



export default function Silvana() {
  const [modo, setModo] = useState<"suave" | "audaz">("suave");
  const [avatar, setAvatar] = useState(silvanaSuave);

  const contenido = {
    suave: {
      frase: "La belleza está en el equilibrio.",
      presentacion:
        "Me especializo en organizar procesos, facilitar la comunicación y crear entornos donde las personas pueden crecer y colaborar con confianza. Creo en lo simple, en lo que se entiende, en lo que conecta. Mi forma de trabajar busca equilibrio entre lo humano y lo profesional, entre lo estético y lo funcional.",
      habilidades: ["Organización metódica", "Comunicación empática", "Diseño simbólico"],
      peliculas: ["Amélie", "La vida secreta de las palabras", "El viaje de Chihiro"],
      musica: ["Ludovico Einaudi", "Sufjan Stevens", "Carla Morrison"],
    },
    audaz: {
      frase: "Romper el equilibrio también es arte.",
      presentacion:
        "Me muevo donde otros dudan. Organizo, comunico y empujo los límites para que las ideas se conviertan en acción. No me detengo en lo esperado: voy más allá, transformo, abro caminos.",
      habilidades: ["Liderazgo disruptivo", "Resolución creativa", "Experimentación visual"],
      peliculas: ["Black Swan", "Matrix", "Perfect Blue"],
      musica: ["Nine Inch Nails", "FKA Twigs", "Rosalía"],
    },
  };

  useEffect(() => {
    document.body.classList.remove("modo-suave", "modo-audaz");
    document.body.classList.add(modo === "suave" ? "modo-suave" : "modo-audaz");
    setAvatar(modo === "suave" ? silvanaSuave : silvanaAudas);
  }, [modo]);

  const toggleModo = () => {
    setModo(modo === "suave" ? "audaz" : "suave");
  };

  const datos = {
    nombre: "Silvana Fernández",
    edad: "42 años",
    ubicacion: "Gral Roca, Río Negro",
  };

  return (
    <main className="presentacion">
      <h1 className="frase-titulo">{contenido[modo].frase}</h1>

      <section className="seccion-central">

        <SilvanaDatos
        nombre={datos.nombre}
        edad={datos.edad}
        ubicacion={datos.ubicacion}/>
        
        <SilvanaAvatar modo={modo} imagen={avatar} onToggle={toggleModo} />

        <SilvanaPresentacion texto={contenido[modo].presentacion} />
        
      </section>


      <section className="bloques-info">
        <SilvanaBloque titulo="Habilidades" items={contenido[modo].habilidades} tipo="bloque-habilidades" />
        <SilvanaBloque titulo="Películas favoritas" items={contenido[modo].peliculas} tipo="bloque-peliculas" />
        <SilvanaBloque titulo="Música favorita" items={contenido[modo].musica} tipo="bloque-musica" />

      </section>

      <SilvanaBotonVolver />

    </main>
  );
}