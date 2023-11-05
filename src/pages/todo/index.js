import styled from "styled-components";
import { flexCenter } from "../../styles/common";

const TodoPage = () => {
    return(
        <Wrapper>
            <h1>Todopage 입니다</h1>
        </Wrapper>
    )
}

export default TodoPage;

const Wrapper = styled.div`
    height : calc(100vh - 330px);
    ${flexCenter}
    background-color: silver;
`