import React from "react";

import FlipCard from "../../components/CardCristian/FlipCard";
import SocialGrid from "../../components/CardCristian/SocialGrid";
import PageTitle from "../../components/PageTitle";
import styles from "../../styles/profiles/cristian/cristian.module.css";

type FraseRotativaProps = { frases: string[] };

function FraseRotativa({ frases }: FraseRotativaProps) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(
      () => setI((prev) => (prev + 1) % frases.length),
      3000
    );
    return () => clearInterval(id);
  }, [frases]);
  return <p className={styles.frase}>{frases[i]}</p>;
}

export default function Cristian() {
  return (
    <section className={styles.wrapper}>
      <PageTitle title="Cristian | DIVCENTRADO" />
      {/* Bloque izquierdo */}
      <aside className={styles.left}>
        <div className={styles.fotoBox}>
          {/*public/images/cristian.jpg */}
          <img
            src="..\..\src\assets\img\cristianSalchiantonio.jpg"
            alt="H. Cristian Páez"
          />
        </div>
        <h1 className={styles.title}>H. Cristian Páez</h1>
        <p>
          <strong>Ciudad:</strong> Tucumán
        </p>
        <p>
          <strong>Edad:</strong> 32 años
        </p>
        <FraseRotativa
          frases={[
            "Lo importante es aprender cosas nuevas",
            "Trabajar en equipo siempre suma",
          ]}
        />
      </aside>
      {/* Bloque derecho */}
      <section className={styles.right}>
        <FlipCard title="Habilidades">
          <ul className={styles.list}>
            <li>HTML &amp; CSS</li>
            <li>JavaScript</li>
            <li>ASP.NET Core</li>
            <li>.NET MAUI</li>
          </ul>
        </FlipCard>

        <FlipCard title="Películas">
          <ul className={styles.list}>
            <li>Catch Me If You Can</li>
            <li>Into the Wild</li>
            <li>Mandarinas</li>
            <li>7 Cajas</li>
          </ul>
        </FlipCard>

        <FlipCard title="Música">
          <ul className={styles.list}>
            <li>Nirvana | Nevermind</li>
            <li>Guns N' Roses | Use Your Illusion I</li>
            <li>Oasis | Definitely Maybe</li>
            <li>Cazuza | Só Se For A Dois</li>
          </ul>
        </FlipCard>

        <FlipCard title="Mis Redes">
          <SocialGrid />
        </FlipCard>
      </section>
    </section>
  );
}
