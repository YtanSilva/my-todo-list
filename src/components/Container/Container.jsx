import React from "react";
import { ToDoForm } from "../ToDoForm/ToDoForm";
import { ToDoList } from "../ToDoList/ToDoList";
import { Box } from "./Styled-Container";
import { FormTitle } from "../FormTitle";

export function Container() {
    return(
        <Box>
            <FormTitle />
            <ToDoForm />
            <ToDoList />
        </Box>
    )
}