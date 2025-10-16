

import "../styles/bitacora.css"; // Asegúrate de que esta ruta es correcta
import LogEntry from "./logentry"; 

const logData = [
  {
    date: "Bitácora 5 – 15/10/2025", // Fecha estimada para la 2da entrega
    content: [
      "Se dio inicio a la segunda entrega del proyecto, planificando y distribuyendo las nuevas tareas entre los miembros del equipo."
    ],
    tasks: [
      { title: "Creación del repo y Routing", assignee: "Lau" },
      { title: "Deploy a Vercel", assignee: "Cristian" },
      { title: "Componente Sidebar y Docs", assignee: "Santiago o Silvana" },
      { title: "Diagramas de Arquitectura", assignee: "Paola" },
      { title: "Componentes de Perfil", assignee: "Cada integrante" },
    ],
  },
  {
    date: "Bitácora 4 – 19/09/2025",
    content: [
      "Se concretó el merge de las páginas individuales en la rama principal (DEVELOPMENT). Durante esta etapa se reorganizaron las carpetas del proyecto para mejorar la estructura general, separando componentes, estilos, imágenes y scripts de manera lógica y ordenada."
    ],
  },
  {
    date: "Bitácora 3 – 17/09/2025",
    content: [
      "Se analizaron los detalles finales de cada sección. Se verificó el cumplimiento de estándares y se asignó el despliegue a Vercel."
    ],
  },
  {
    date: "Bitácora 2 – 12/09/2025",
    content: [
      "Se revisaron los avances individuales, se ajustaron tiempos y se brindó retroalimentación para mejorar la coherencia del proyecto."
    ],
  },
  {
    date: "Bitácora 1 – 05/09/2025",
    content: [
      "Primera reunión del equipo. Se definieron roles, se creó el repositorio en Git y se discutieron ideas preliminares de diseño."
    ],
  },
];

export default function Bitacora() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <section
        className="bg-lightblue bg-opacity-75 rounded-4 shadow p-4 p-md-5"
        id="bitacora"
      >
        <h2 className="mb-4 text-center">Bitácora del Proyecto Web 🚀</h2>

        {logData.map((entry, index) => (
          <LogEntry
            key={index}
            date={entry.date}
            content={entry.content}
            tasks={entry.tasks}
          />
        ))}
      </section>
    </div>
  );
}