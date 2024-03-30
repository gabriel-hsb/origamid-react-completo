import styled from "styled-components";

export const ContatoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-block: 4rem;
`;

export const ContatoImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 600px;
  }
`;

export const ContatoDescricao = styled.div`
  padding-top: 2rem;
  h1 {
    font-size: 2.25rem;
    margin: 0;
  }
  p.descricao > * {
    font-size: 1.5rem;
    list-style: none;
    padding-inline: 0;
    li + li {
      margin-top: 1rem;
    }
  }
`;
