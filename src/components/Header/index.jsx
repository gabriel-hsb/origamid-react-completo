// utilizando o navlink, é possivel utilizar a classe de active,
// que é injetada no mesmo quando o destino for igual a pagina atual
import { NavLink } from "react-router-dom";

import * as S from "./Produtos.Styles";

const Header = () => {
  return (
    <S.NavBar>
      <NavLink to="/" end>
        Produtos
      </NavLink>
      <NavLink to="contato">Contato</NavLink>
      <NavLink to="sobre">Sobre</NavLink>
    </S.NavBar>
  );
};

export default Header;
