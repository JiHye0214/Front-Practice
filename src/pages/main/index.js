// 메인페이지
import styled from "styled-components";
import { flexCenter } from "../../styles/common";

import TDButton from "../../components/button";
import { useState } from "react";

const MainPage = () => {
    // 배열은 이 함수 안에다가 
    const [numState, setState] = useState("menu-1");
    const menuArray = [
        {
            title: "1",
            isSelected : numState === "1"
        },
        {
            title: "2",
            isSelected : numState === "2"
        },
        {
            title: "3",
            isSelected : numState === "3"
        },
        {
            title: "4",
            isSelected : numState === "4"
        },
    ]

    const onClickTab = (title) => {
        setState(title)
        console.log(title)
    }

    return(
        <Wrapper>
            <h1>Mainpage</h1>
            <Container>
                <Header>
                    {menuArray.map(({isSelected, title}) => (
                        <Tab $isSelected={isSelected} onClick={() => onClickTab(title)}>
                            {title}
                        </Tab>
                    ))}
                </Header>
            </Container>

            <TDButton variant={"primary"} size={"small"}>
                버튼
            </TDButton>
        </Wrapper>
    )
}

export default MainPage;

const Wrapper = styled.div`
    height : calc(100vh - 330px);
    ${flexCenter}
    flex-direction: column;
    background-color: skyblue;
`
const Container = styled.div`
    height: 70%;
    width: 600px;
    background-color: white;
`

const Header = styled.div`
    height: 50px;
    background-color: #ffda24;
    ${flexCenter}
    border: 1px solid black;
`

const Tab = styled.div`
    height: 100%;
    width: 100%;
    ${flexCenter};
    font-weight: bold;
    border: 1px solid black;
    background-color: ${({ $isSelected }) => $isSelected && "#ff8400"};
    &:hover{
        cursor: pointer;
    }
`