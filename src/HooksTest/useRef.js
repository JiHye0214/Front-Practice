import { useRef, useState } from "react";
import styled from "styled-components"

const RefTest = () => {

    const arr = [];
    const count = useRef(0);
    // useRef : '새로고침'이 아니라 '리랜더'가 되더라도 그 값을 유지한다
    const [render, setRender] = useState(false);

    const onClickBTN = (knowState) => {
        {knowState ? arr.push("ture") : arr.push("false")}
        countFunc(arr)
    }

    const countFunc = (array) => {
        {array.map((data) => {
            {data === "ture" ? count.current += 1 : count.current += 0}
        })}

        setRender((prev) => !prev);
        // 얘가 없으면 새로 push 된 배열의 ture 개수가 누적으로 더해짐
        // 리랜더를 함으로써 배열은 초기화되지만 useRef 쓴 count의 숫자는 유지됨
        // array의 length는 항상 1임 . 추가할 때마다 초기화가 되니까 -> 대신 count는 지워지지 않음 
        console.log(count.current)
        if(count.current === 3) alert("테스트가 종료되었습니다.")
    }

    return (
        <Wrapper>
            <Button onClick={() => onClickBTN(true)}>알아요</Button>
            <Button onClick={() => onClickBTN(false)}>몰라요</Button>
        </Wrapper>
    )
}

export default RefTest;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    margin: 20px;
    padding: 10px;
`