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
    background-color: #c2eef2;
    height: calc(100% - 50px);
    ${flexCenter}
`