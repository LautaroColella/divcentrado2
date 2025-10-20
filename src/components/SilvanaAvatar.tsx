
type Props = {
  modo: "suave" | "audaz";
  imagen: string;
  onMouseEnter: () => void;
};

export default function SilvanaAvatar({ modo, imagen, onMouseEnter }: Props) {
  return (
    <div className="avatar-rectangular" onMouseEnter={onMouseEnter}>
      <img src={imagen} alt={`Avatar ${modo}`} />
    </div>
  );
}
