import React, { useState } from "react";
import { ToDoForm } from "../ToDoForm/ToDoForm";
import { ToDoList } from "../ToDoList/ToDoList";
import { Box } from "./Styled-Container";
import { FormTitle } from "../FormTitle";

export const Container = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <Box>
      <FormTitle />
      <ToDoForm
        text={text}
        setText={setText}
        title={title}
        setTitle={setTitle}
        todos={todos}
        setTodos={setTodos}
      />
      <ToDoList todos={todos} setTodos={setTodos} />
    </Box>
  );
};
