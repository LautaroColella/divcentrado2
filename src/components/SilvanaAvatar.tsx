type Props = {
  modo: "suave" | "audaz";
  imagen: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export default function SilvanaAvatar({ modo, imagen, onMouseEnter, onMouseLeave }: Props) {
  return (
    <div
      className="avatar-rectangular"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
        
      <img src={imagen} alt={`Avatar ${modo}`} />
    </div>
  );
}
 