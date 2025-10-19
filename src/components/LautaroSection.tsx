import React from "react";

export interface SectionItem {
  name: string;
  youtube?: string;
}

export interface SectionProps {
  title: string;
  items: SectionItem[];
}

const LautaroSection: React.FC<SectionProps> = ({ title, items }) => {
  return (
    <div className="profile-section mb-4">
      <div className="profile-section-title fw-bold mb-2">{title}</div>
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.name}
            {item.youtube && (
              <button
                className="btn btn-sm btn-outline-danger"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
                data-video={item.youtube}
              >
                <i className="fa-brands fa-youtube"></i>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LautaroSection;
