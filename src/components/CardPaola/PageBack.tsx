import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type Props = { to?: string; className?: string };
export default function PageBack({ to = "/", className }: Props) {
  return (
    <header className={className}>
      <nav>
        <Link to={to} className="volver">
          <ArrowLeft /> Portada
        </Link>
      </nav>
    </header>
  );
}
