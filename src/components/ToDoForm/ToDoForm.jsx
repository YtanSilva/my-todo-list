import React from "react";
import { Form, InputTitle, Textarea, Button } from "./styledForm";

export const ToDoForm = ({
  setTitle,
  setText,
  title,
  text,
  todos,
  setTodos,
}) => {
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
      {
        title: title,
        text: text,
        completed: false,
        id: Math.round(Math.random() * 1000),
      },
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
      <Button type="submit">Adicionar nota</Button>
    </Form>
  );
};
