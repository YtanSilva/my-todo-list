import styled from "styled-components";

const List = styled.ul`
  display: grid;
  margin-top: 2rem;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 50vw;
  }
`;

export { List };
