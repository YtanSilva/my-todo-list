import styled from "styled-components";

export const Box = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 768px){
    width: 100vw;
    min-width: 375px;
  }
`;
