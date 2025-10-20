

interface Props {
  nombre: string;
  edad: string;
  ubicacion: string;
}

export default function SilvanaDatos({ nombre, edad, ubicacion }: Props) {
  return (
    <div className="info-lateral">
      <h2>{nombre}</h2>
      <p>{edad}</p>
      <p>{ubicacion}</p>
    </div>
  );
}
