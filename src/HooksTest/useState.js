import { useState } from "react";
import styled from "styled-components";
import Modal from "./useState/Modal";
import Active from "./useState/Active";

const StateTest = () => {
  const [isOpenModal, setModalState] = useState(false);

  const onClickBTN = () => {
    setModalState((prev) => !prev);
    console.log(isOpenModal)
  };

  return (
    <Wrapper>
      <Button onClick={() => onClickBTN()}>
        {isOpenModal ? "숨기기" : "보이기"}
      </Button>
      {isOpenModal ? (
        <>
          <Text1>모달이 보여지고 있습니다</Text1>
          <Modal />
          <Active/>
        </>
      ) : (
        <Text2>모달이 보여지지 않고 있습니다</Text2>
      )}
    </Wrapper>
  );
};

export default StateTest;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  margin: 20px;
`;

const Text1 = styled.p`
  color: green;
`;
const Text2 = styled.p`
  color: #d92323;
`;
