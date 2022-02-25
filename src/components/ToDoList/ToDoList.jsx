import React from "react";
import { CardToDo } from "../CardToDo/CardToDo";

export function ToDoList(){
    return (
        <ul>
            {Array.of("trabalho", "trabalho", "estudo").map((categoria, index) => {
                return(
                    <li key={index}>
                        <CardToDo />
                    </li>
                );
            })}
        </ul>
    )
}