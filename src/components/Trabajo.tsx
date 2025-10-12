import "../styles/trabajo.css";

export default function Trabajo() {
  return (
    <div className="d-flex flex-column align-items-center h-100">
      <div id="second-slide-title">
        <h2>Trabajo y proyecto</h2>
      </div>
      <div className="circle-container mt-auto mb-auto">
        <div className="circle" id="circle-proposito">
          <div className="circle-front">Propósito</div>
          <div className="circle-back">
            Buscamos crear una página que muestre lo que aprendimos y cómo
            trabajamos juntos
          </div>
        </div>
        <div className="circle" id="circle-valores">
          <div className="circle-front">Valores</div>
          <div className="circle-back">
            <i
              className="fa-solid fa-graduation-cap"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Aprendemos mientras diseñamos y programamos, mejorando nuestras habilidades"
            ></i>
            <i
              className="fa-solid fa-calendar-check"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Nos aseguramos de cumplir con los plazos y mantener la calidad del trabajo"
            ></i>
            <i
              className="fa-solid fa-handshake"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Colaboramos para que cada parte del proyecto funcione a la perfección"
            ></i>
            <i
              className="fa-solid fa-lightbulb"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Buscamos ideas originales para que la página sea visual y atractiva"
            ></i>
          </div>
        </div>
        <div className="circle" id="circle-metodo">
          <div className="circle-front">Método</div>
          <div className="circle-back">
            Trabajamos juntos dividiendo tareas, revisando cada sección y
            asegurando que la página sea funcional y atractiva
          </div>
        </div>
      </div>
    </div>
  );
}
