// 메인페이지
import styled from "styled-components";
import { flexCenter } from "../../styles/common";

import TDButton from "../../components/button";
import { useState } from "react";

import Details from "./components/detail";
import Modal from "./components/modal";

const MainPage = () => {
  // 배열은 이 함수 안에다가
  const [numState, setState] = useState("1");
  const menuArray = [
    {
      title: "1",
      isSelected: numState === "1",
      label: "one",
    },
    {
      title: "2",
      isSelected: numState === "2",
      label: "two",
    },
    {
      title: "3",
      isSelected: numState === "3",
      label: "three",
    },
    {
      title: "4",
      isSelected: numState === "4",
      label: "four",
    },
  ];

  const onClickTab = (title) => {
    setState(title);
    console.log(title);
  };

  return (
    <Wrapper>
      <h1>Mainpage</h1>
      <Container>
        <Header>
          {menuArray.map(({ isSelected, title, label }) => (
            <Tab $isSelected={isSelected} onClick={() => onClickTab(title)}>
              {label}
            </Tab>
          ))}
        </Header>
        <Section>
          <Details numState={numState} />
          {numState === "1" && <Modal />}
          {numState === "3" && <Modal />}
        </Section>
      </Container>
      <TDButton variant={"primary"} size={"medium"} shape={"round"}>
        BUTTON
      </TDButton>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  height: calc(100vh - 330px);
  ${flexCenter}
  flex-direction: column;
  background-color: skyblue;
`;
const Container = styled.div`
  height: 70%;
  width: 600px;
  background-color: white;
  z-index: 400;
`;

const Header = styled.div`
  height: 50px;
  background-color: #ffda24;
  ${flexCenter}
  border: 1px solid black;
  box-sizing: border-box;
  width: 600px;
`;

const Tab = styled.div`
  height: 100%;
  width: 600px;
  ${flexCenter};
  font-weight: bold;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: ${({ $isSelected }) => $isSelected && "#ff8400"};
  &:hover {
    cursor: pointer;
  }
`;

const Section = styled.div`
  height: calc(100% - 50px);
  background-color: pink;
  position: relative;
`;
