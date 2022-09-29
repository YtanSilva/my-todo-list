import React, { useEffect, useState } from "react";
import { ToDoForm } from "../ToDoForm/ToDoForm";
import { ToDoList } from "../ToDoList/ToDoList";
import { Box } from "./Styled-Container";
import { FormTitle } from "../FormTitle";

export const Container = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    alert(JSON.parse(localStorage.getItem("todo")));
    let item = window.localStorage.getItem("todo");
    if (item !== null) {
      setTodos(JSON.parse(item));
      console.log(item);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

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
