import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputTitle = styled.input`
  width: 40vw;
  padding: .5rem 0;
`;

const Textarea = styled.textarea`
  width: 40vw;
  padding: .5rem 0;

`;

const Button = styled.button`
    padding: 1rem 8vw;
    background-color: #fff;
`

export function ToDoForm() {
  return (
    <Form>
      <InputTitle type="text" placeholder="Título" />
      <Textarea
      rows="5"
        name="text-field"
        id="text-field"
        placeholder="Escreva suas notas aqui..."
      ></Textarea>
      <Button type="submit">Adicionar nota</Button>
    </Form>
  );
}
