import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;

  box-shadow: 2px 2px 5px 2px #888888;

  @media (max-width: 1050px) {
    min-width: 375px;
    width: 50vw;
  }
`;

const InputTitle = styled.input`
  width: 40vw;
  padding: 0.5rem 0.2rem;
  border-bottom: 1px solid;
  @media (max-width: 1050px) {
    min-width: 360px;
    width: 40vw;
  }
`;

const Textarea = styled.textarea`
  width: 40vw;
  padding: 0.5rem 0.2rem;
  border: 1px solid;
  @media (max-width: 1050px) {
    min-width: 360px;
    width: 40vw;
  }
`;

const Button = styled.button`
  padding: 1rem 8vw;
  background-color: #fff;
  border: 1px solid;
  border-radius: 0.3rem;
  &:hover {
    background-color: #46cff2;
    font-weight: bold;
    color: #fff;
  }
  @media (max-width: 1050px) {
    min-width: 275px;
    width: 25vw;
  }
`;

export { Form, InputTitle, Textarea, Button };
