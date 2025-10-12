import React from "react";

export interface Developer {
  name: string;
  github: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  developers: Developer[];
  github_link: string;
  deploy_link: string;
  technologies: string[];
  liked: string[];
  could_be_better: string[];
  screenshots: string[];
  finish_date: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      {project.screenshots && project.screenshots.length > 0 && (
        <div
          id={`carousel-${project.id}`}
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner" style={{ height: "200px" }}>
            {project.screenshots.map((src, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={src}
                  className="d-block w-100"
                  alt={`${project.title} screenshot ${index + 1}`}
                  style={{ objectFit: "cover", height: "200px" }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="card-body">
        <h5 className="card-title fw-bold text-center">{project.title}</h5>
        <p className="card-text">{project.description}</p>

        <div className="mb-3">
          <strong>Desarrolladores</strong>
          <ul className="list-unstyled mb-0">
            {project.developers.map((dev, i) => (
              <li key={i}>
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  {dev.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3">
          <strong>Tecnologías</strong>
          <div>
            {project.technologies.map((tech, i) => (
              <span key={i} className="badge bg-secondary me-1">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <strong>Cosas que nos gustaron</strong>
          <ul className="mb-0">
            {project.liked.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-3">
          <strong>Cosas que se podrian mejorar</strong>
          <ul className="mb-0">
            {project.could_be_better.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm"
          >
            Repositorio
          </a>
          <a
            href={project.deploy_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Demo
          </a>
        </div>
      </div>

      <div className="card-footer bg-transparent border-0 text-muted small d-flex justify-content-between">
        <div>Equipo {project.id}</div>
        <div>{project.finish_date}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
