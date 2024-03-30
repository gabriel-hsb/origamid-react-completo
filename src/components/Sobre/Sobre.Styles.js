import styled from "styled-components";

export const SobreContainer = styled.section`
  width: "20px";
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-block: 4rem;
`;

export const SobreImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 800px;
  }
`;

export const SobreInfos = styled.div`
  padding-top: 2rem;
  h1 {
    font-size: 2.25rem;
    margin: 0;
  }
  p.descricao {
    font-size: 1.5rem;
    span.origamid {
      color: #84e;
      font-weight: 600;
    }
    span.react {
      color: #149eca;
      font-weight: 600;
    }
  }
`;
