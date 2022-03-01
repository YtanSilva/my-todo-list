import styled from "styled-components";

const CardBox = styled.div`
  padding: 1rem;
  background-color: #fff;
  width: 35vw;
  box-shadow: 1px 1px 3px 2px #888888;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  @media (max-width: 1050px) {
    width: 50vw;
    min-width: 375px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
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
    opacity: 0.5;
  }
`;
export { CardBox, ButtonBox, CompleteBtn, DeleteBtn, ListItem };
