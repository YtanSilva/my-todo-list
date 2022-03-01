import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  padding: 1rem;
  background-color: #fff;
  width: 35vw;
  box-shadow: 1px 1px 3px 2px #888888;
  display: flex;
  justify-content: space-between;
  border-radius: .5rem;
  @media(max-width: 1050px) {
    width: 50vw;
    min-width: 375px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CompleteBtn = styled.button`
  background-color: green;
  color: white;
  padding: 0.5rem;
  border-radius: 0.2rem;
  width: 3rem;
  height: 3rem;
  .fa-check {
    color: white;
  }
`;

const DeleteBtn = styled(CompleteBtn)`
  background-color: red;
  .fa-trash {
    color: white;
  }
`;

const ListItem = styled.li`
&.completed {
    text-decoration: line-through;
    opacity: .5;
}
`

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
      <ListItem className={card.completed ? "completed" : ''}>
        <h2>{title}</h2>
        <p>{text}</p>
      </ListItem>
      <ButtonBox card={card}>
        <CompleteBtn onClick={completeHandler}
        
        >
          <i className="fas fa-check"></i>
        </CompleteBtn>
        <DeleteBtn onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </DeleteBtn>
      </ButtonBox>
    </CardBox>
  );
}
