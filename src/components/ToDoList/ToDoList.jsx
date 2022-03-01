import React from "react";
import styled from "styled-components";
import { CardToDo } from "../CardToDo/CardToDo";

const List = styled.ul`
    display: grid;
    margin-top: 2rem; 
    width: 100%;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    @media(max-width: 1050px){
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        width: 50vw;
    }
`

export const ToDoList = ({todos, setTodos}) => {
    return (
        <List>
            {todos.map((card) => {
                return(
                        <CardToDo key={card.id} title={card.title} text={card.text} card={card}
                        setTodos={setTodos} todos={todos}/>
                );
            })}
        </List>
    )
}