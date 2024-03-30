import { Helmet } from "react-helmet";

import writingMachine from "../../assets/images/writing-machine.jpg";

import * as S from "./Contato.Styles.js";

const Contato = () => {
  return (
    <S.ContatoContainer className="animeLeft">
      <Helmet>
        <title> Contato </title>
      </Helmet>
      <S.ContatoImg>
        <img
          src={writingMachine}
          alt="Uma máquina de escrever preta antiga em um fundo branco"
        />
      </S.ContatoImg>
      <S.ContatoDescricao>
        <h1>Nosso contato</h1>
        <p className="descricao">
          <ul>
            <li>Telefone: 15 9.9999-9999</li>
            <li>Rua Lorem Ipsum, 89</li>
            <li>Abertos todos os dias</li>
          </ul>
        </p>
      </S.ContatoDescricao>
    </S.ContatoContainer>
  );
};

export default Contato;
