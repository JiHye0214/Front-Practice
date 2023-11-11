import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Timer = () => {
    const [count, setCount] = useState(0);
    // const [seconds, setSeconds] = useState(0);
    // const [minutes, setMinutes] = useState(0);
    // const [hours, setHours] = useState(0);
    const [start, setStart] = useState(true);

    const seconds = useRef(0);
    const minutes = useRef(0);
    const hours = useRef(0);

    // useEffect(()=>{
    //     return() => {
    //         alert("타이머가 닫혔습니다.")
    //         // 이거 첫랜더링 어케 막지
    //     }
    //     },[])

    useEffect(() => {
        start && setCount(count + 1)
        if(count === 14000){
            seconds.current += 1
            setCount(0);
        }
        },[count])

        if(count === 14000){
            seconds.current += 1
        }
        if(seconds.current === 60){
            minutes.current += 1
            seconds.current = 0
        }
        if(minutes.current === 60){
            hours.current += 1
            minutes.current = 0
        }

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
        seconds.current = 0
        minutes.current = 0
        hours.current = 0
    }

    return (

        <Wrapper>
            <h1>Timer</h1>
            <Container>
                <Button onClick={onClickStop}>중지</Button>
                <Button onClick={onClickRestart}>재시작</Button>
                <Button onClick={onClickReset}>리셋</Button>
            </Container>
            {/* <h2>{hours} : {minutes} : {seconds}</h2> */}
            <Section>
                <h2 ref={seconds}>{seconds.current} : </h2>
                <h2 ref={minutes}>{minutes.current} : </h2>
                <h2 ref={hours}>{hours.current}</h2>
            </Section>
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

const Section = styled.div`
    display: flex;
    padding: 10px;
`