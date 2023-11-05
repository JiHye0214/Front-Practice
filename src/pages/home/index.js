import styled from "styled-components";
import { flexCenter } from "../../styles/common";

const HomePage = () => {
    return(
        <Wrapper>
            <h1>Homepage 입니다</h1>
        </Wrapper>
    )
}

export default HomePage;

const Wrapper = styled.div`
    height : calc(100vh - 330px);
    ${flexCenter}
    background-color: pink;
`