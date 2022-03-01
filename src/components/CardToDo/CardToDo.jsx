import React from "react";
import {
  CardBox,
  ButtonBox,
  CompleteBtn,
  DeleteBtn,
  ListItem,
} from "./styledCard";

export function CardToDo({ title, text, setTodos, todos, card }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== card.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === card.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <CardBox>
      <ListItem className={card.completed ? "completed" : ""}>
        <h2>{title}</h2>
        <p>{text}</p>
      </ListItem>
      <ButtonBox card={card}>
        <CompleteBtn onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </CompleteBtn>
        <DeleteBtn onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </DeleteBtn>
      </ButtonBox>
    </CardBox>
  );
}
