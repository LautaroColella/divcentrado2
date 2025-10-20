

interface Props {
  texto: string;
}

export default function SilvanaPresentacion({ texto }: Props) {
  return <p className="texto-presentacion">{texto}</p>;
}
