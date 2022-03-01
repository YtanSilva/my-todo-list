import React from "react";
import { CardToDo } from "../CardToDo/CardToDo";
import { List } from "./styledList";

export const ToDoList = ({ todos, setTodos }) => {
  return (
    <List>
      {todos.map((card) => {
        return (
          <CardToDo
            key={card.id}
            title={card.title}
            text={card.text}
            card={card}
            setTodos={setTodos}
            todos={todos}
          />
        );
      })}
    </List>
  );
};
