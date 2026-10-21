import { Link } from "react-router-dom";

// Botões "← anterior" e "próximo →" no fim da página
export default function Pager({ anterior, proximo }) {
  return (
    <nav className="pager">
      {anterior ? <Link to={anterior.rota}>← {anterior.nome.split(" ")[0]}</Link> : <span />}
      {proximo ? <Link to={proximo.rota}>{proximo.nome.split(" ")[0]} →</Link> : <span />}
    </nav>
  );
}
