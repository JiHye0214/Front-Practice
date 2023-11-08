import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import { useState } from "react";
import AddTodoModal from "./components/addTodoModal";

const TodoPage = () => {
  const [addModalState, setAddModal] = useState(false);

  const onClickAddBTN = () => {
    setAddModal((prev) => !prev);

  };

  return (
    <>
    {addModalState && <AddTodoModal closeBTN={setAddModal}/>}
      <Wrapper>
        <Container>
          <h1>Todopage</h1>
          <h5>Write something to do</h5>
          <AddTodoButton onClick={onClickAddBTN}>
            Write something to do
          </AddTodoButton>
          <h4>
            test <input type="text"></input>
          </h4>
        </Container>
      </Wrapper>
    </>
  );
};

export default TodoPage;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 330px);
  ${flexCenter}
  flex-direction: column;
  background-color: silver;
`;

const Container = styled.div`
  background-color: white;
  height: 500px;
  width: 700px;
  text-align: center;
`;

const AddTodoButton = styled.button`
  padding: 7px;
`;
