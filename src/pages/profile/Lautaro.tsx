import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect } from "react";
import foto from "../../assets/img/lautaro.jpg";
import type { SectionItem } from "../../components/LautaroSection.tsx";
import LautaroSection from "../../components/LautaroSection.tsx";
import "../../styles/profiles/lautaro.css";

const Lautaro: React.FC = () => {
  useEffect(() => {
    const videoModal = document.getElementById("videoModal");
    const videoFrame = document.getElementById(
      "videoFrame"
    ) as HTMLIFrameElement | null;

    if (!videoModal || !videoFrame) return;

    const showHandler = (event: Event) => {
      const customEvent = event as unknown as {
        relatedTarget?: HTMLElement | null;
      };

      const button = customEvent.relatedTarget;
      if (button) {
        const url = button.getAttribute("data-video");
        if (url) {
          videoFrame.src = `${url}?autoplay=1`;
        }
      }
    };

    const hideHandler = () => {
      if (videoFrame) videoFrame.src = "";
    };

    videoModal.addEventListener("show.bs.modal", showHandler);
    videoModal.addEventListener("hidden.bs.modal", hideHandler);

    return () => {
      videoModal.removeEventListener("show.bs.modal", showHandler);
      videoModal.removeEventListener("hidden.bs.modal", hideHandler);
    };
  }, []);

  const habilidades: SectionItem[] = [
    { name: "Código morse" },
    { name: "Braille" },
    { name: "Programación" },
    { name: "Ciberseguridad" },
  ];

  const peliculas: SectionItem[] = [
    { name: "Snowden", youtube: "https://www.youtube.com/embed/QlSAiI3xMh4" },
    { name: "Silk Road", youtube: "https://www.youtube.com/embed/LBOBuqBzn7w" },
    {
      name: "The Fifth Estate",
      youtube: "https://www.youtube.com/embed/YQOiS_l_0Jk",
    },
  ];

  const musica: SectionItem[] = [
    { name: "Wish", youtube: "https://www.youtube.com/embed/ZjSKNGPTFFs" },
    {
      name: "Dance in the Game",
      youtube: "https://www.youtube.com/embed/Zm24Y_f6qQk",
    },
    {
      name: "Аигел Пыяла",
      youtube: "https://www.youtube.com/embed/pBOVVwUja6E",
    },
  ];

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div
        className="card profile-card shadow-lg"
        style={{ maxWidth: "400px" }}
      >
        <img src={foto} className="card-img-top" alt="Foto de perfil" />
        <div className="card-body">
          <h5 className="card-title text-center mb-3">Lautaro Colella</h5>

          <LautaroSection title="Habilidades" items={habilidades} />
          <LautaroSection title="Películas" items={peliculas} />
          <LautaroSection title="Música" items={musica} />

          <hr />
          <p className="card-text text-center mt-2">Mar del Plata, 22 años</p>
          <div className="card-footer text-center bg-transparent border-0">
            <a href="../../nombre" className="btn btn-primary">
              <i className="fa-solid fa-chevron-left"></i> Portada
            </a>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="ratio ratio-16x9">
                <iframe
                  id="videoFrame"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lautaro;
