import { styled, css } from "styled-components";
import { flexCenter } from "../../../styles/common";
import { useState } from "react";

const Modal = () => {
  const [isModalOpen, setModalState] = useState("visible");
  const onClickClose = () => {
    setModalState("default");
  };

  return (
    <Wrapper>
      <First opacity={isModalOpen}>
        <Wrap>
          <h1>Modal</h1>
          <Button onClick={onClickClose}>X</Button>
        </Wrap>
      </First>
    </Wrapper>
  );
};

export default Modal;

const opacityCSS = {
  default: css`
    display: none;
  `,
  visible: css`
    display: block;
  `,
};

const First = styled.div`
  background-color: rgba(255, 187, 0, 0.5);
  ${({ opacity }) => opacityCSS[opacity]}
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Wrap = styled.div`
  ${flexCenter}
  height: 100%;
  flex-direction:column;
`;

const Button = styled.button`
    background-color: white;
    border: 2px solid;
    border-radius: 50%;
    padding: 7px 10px;
    &:hover {
        background-color: gray;
    }
`