import styled from "styled-components"

const Active = () => {
    return (
        <Wrapper>
            <h1>안녕하세요</h1>
        </Wrapper>
    )
}

export default Active

const Wrapper = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: pink;
`