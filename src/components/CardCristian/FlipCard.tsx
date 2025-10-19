import React from "react";
import "../../styles/profiles/cristian/flipcard.css";


type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function FlipCard({ title, children }: Props) {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-inner">
        <div className="flip-front">
          <h2>{title}</h2>
        </div>
        <div className="flip-back">{children}</div>
      </div>
    </div>
  );
}