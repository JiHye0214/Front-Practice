import { useEffect, useState } from "react"
import styled from "styled-components"
import Timer from "./useEffect/Timer"

const EffectTest = () => {
    const [isOpenTimer, setTimerState] = useState(false)

    const onClickTimer = () => {
        setTimerState((prev) => !prev)
    }

    return (
        <Wrapper>
            <Button onClick={()=>onClickTimer()}>타이머 보이기</Button>
            {isOpenTimer ? <Timer/> : null }
        </Wrapper>
    )
}

export default EffectTest

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