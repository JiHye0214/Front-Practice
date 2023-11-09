import styled from "styled-components"

const Modal = () => {
    return (
        <Wrapper>
            <h1>안녕하세요</h1>
        </Wrapper>
    )
}

export default Modal 

const Wrapper = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`