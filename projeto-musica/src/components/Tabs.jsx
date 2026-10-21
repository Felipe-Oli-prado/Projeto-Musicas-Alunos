import { NavLink } from "react-router-dom";
import { perfis } from "../data/perfis.js";

// Abas do topo: cada uma leva para a página do perfil
export default function Tabs() {
  return (
    <nav className="tabs" aria-label="Perfis">
      {perfis.map((p, i) => (
        <NavLink key={p.id} to={p.rota} end className="tab">
          Perfil {i + 1} - {p.nome.split(" ")[0]}
        </NavLink>
      ))}
    </nav>
  );
}
