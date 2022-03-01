import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: .5rem;

  box-shadow: 2px 2px 5px 2px #888888;

  @media(max-width: 1050px){
    min-width: 375px;
    width: 50vw;
}
`;

const InputTitle = styled.input`
  width: 40vw;
  padding: 0.5rem 0.2rem;
  border-bottom: 1px solid;
  @media(max-width: 1050px){
    min-width: 360px;
    width: 40vw;
}
`;

const Textarea = styled.textarea`
  width: 40vw;
  padding: 0.5rem 0.2rem;
  border: 1px solid;
  @media(max-width: 1050px){
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
  @media(max-width: 1050px){
    min-width: 275px;
    width: 25vw;
}
`;

export const ToDoForm = ({ setTitle, setText, title, text, todos, setTodos }) => {
  const titleTodoHandler = (e) => {
    setTitle(e.target.value);
  };
  const textTodoHandler = (e) => {
    setText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { title: title, text: text, completed: false, id: Math.round(Math.random() * 1000) },
    ]);
    setTitle("");
    setText("");
  };

  return (
    <Form onSubmit={submitTodoHandler}>
      <InputTitle
        value={title}
        type="text"
        placeholder="Título"
        required
        onChange={titleTodoHandler}
      />
      <Textarea
        value={text}
        rows={5}
        name="text-field"
        id="text-field"
        required
        placeholder="Escreva suas notas aqui..."
        onChange={textTodoHandler}
      ></Textarea>
      <Button type="submit">
        Adicionar nota
      </Button>
    </Form>
  );
}
