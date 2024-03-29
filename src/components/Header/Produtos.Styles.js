import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;
  color: #000;

  .active {
    background-color: var(--secondary);
  }
  a {
    background-color: var(--primary);
    border-radius: var(--radius);
    padding: 0.5rem 1rem;
    &:hover {
      background-color: var(--primary-darken);
    }
  }
`;
