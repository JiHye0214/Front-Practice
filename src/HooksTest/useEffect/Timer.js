import { useEffect, useState } from "react";
import styled from "styled-components";

const Timer = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [start, setStart] = useState(true);

    // useEffect(()=>{
    //     return() => {
    //         alert("타이머가 닫혔습니다.")
    //         // 이거 첫랜더링 어케 막지
    //     }
    //     },[])

    useEffect(() => {
        start && setCount(count + 1)
        if(count === 14000){
            setSeconds(seconds + 1)
            setCount(0);
        }
        if(seconds === 60){
            setMinutes(minutes + 1)
            setSeconds(0);
        }
        if(minutes === 60){
            setHours(hours + 1)
            setMinutes(0)
        }
    },[count])

    const onClickStop = () => {
        setStart(false)
        console.log(count)
    }

    const onClickRestart = () => {
        setStart(true)
        setCount(count+1)
    }

    const onClickReset = () => {
        setStart(false)
        setCount(0)
        setSeconds(0)
        setMinutes(0)
        setHours(0)
    }

    return (

        <Wrapper>
            <h1>Timer</h1>
            <Container>
                <Button onClick={onClickStop}>중지</Button>
                <Button onClick={onClickRestart}>재시작</Button>
                <Button onClick={onClickReset}>리셋</Button>
            </Container>
            <h2>{hours} : {minutes} : {seconds}</h2>
        </Wrapper>
    )
}

export default Timer;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
`

const Button = styled.button`
    margin: 10px;
`;