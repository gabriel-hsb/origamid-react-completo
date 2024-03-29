import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  gap: 2rem;
  width: 1000px;
`;

export const Card = styled.div`

  img {
    max-width: 70%;
    transition: transform 0.3s ease;
  }
  &:hover img {
    transform: scale(1.05);
  }
  width: auto;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
