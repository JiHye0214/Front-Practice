import { useCallback, useMemo } from "react"
import styled from "styled-components"
import { flexCenter } from "../../../styles/common"

const Details = ({numState}) => {

    // useMemo 연습
    const oneDetail = useMemo(() => {
        return numState + "-"
    }, [numState])

    // useCallback 연습
    const Aa = useCallback(() => {
        return <p>count {numState}</p>
    }, [numState])

    return(
        <Wrapper>
            {oneDetail}
            <Aa/>
        </Wrapper>
    )
}

export default Details;

const Wrapper = styled.div`
    background-color: #f8ffe3;
    height: 100%;
    width: 100%;
    ${flexCenter}
    position: absolute;
    font-size: 25px;
    font-weight: 600;
`