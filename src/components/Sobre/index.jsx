import * as S from "./Sobre.Styles";

import sobrePic from "../../assets/images/sobre.jpg";

const Sobre = () => {
  return (
    <S.SobreContainer className="animeLeft">
      <S.SobreImg>
        <img src={sobrePic} />
      </S.SobreImg>
      <S.SobreInfos>
        <h1>Desafio Origamid - Router & API fetch</h1>
        <p className="descricao">
          Este site foi feito utilizando <span className="react">React</span>,
          com base no exercício proposto pelo curso da{" "}
          <span className="origamid"> Origamid </span> de React para Iniciantes
        </p>
      </S.SobreInfos>
    </S.SobreContainer>
  );
};

export default Sobre;
