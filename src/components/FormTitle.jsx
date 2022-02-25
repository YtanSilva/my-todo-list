import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: bold;
  color: #fff;
  margin: 2rem 0;
`;

export function FormTitle() {
    return (
        <Title>The to do list</Title>
    )
}
