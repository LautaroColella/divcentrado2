import React from "react";

interface SilvanaAvatarProps {
  modo: "suave" | "audaz";
  imagen: string;
  onToggle: () => void;
}

export default function SilvanaAvatar({ modo, imagen, onToggle }: SilvanaAvatarProps) {
  return (
    <div className="avatar-rectangular" onClick={onToggle}>
      <img src={imagen} alt={`Avatar Silvana ${modo}`} />
    </div>
  );
}
