import styled from "styled-components";

export const ProdutoContainer = styled.section`
  width: "20px";
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-block: 4rem;
`;

export const ProdutoImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 600px;
  }
`;

export const ProdutoInfos = styled.div`
  padding-top: 2rem;
  h1 {
    font-size: 2.25rem;
    margin: 0;
  }
  p.preco {
    background-color: var(--secondary);
    display: inline-block;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-weight: 600;
  }
  p.descricao {
    font-size: 1.5rem;
  }
`;
