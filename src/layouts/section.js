import { Link } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "../styles/common";

const PageBTN = () => {
    return (
        <Wrapper>
            <Link to={""}>Home</Link> | <Link to={"/main"}>Main</Link> | <Link to={"/todo"}>Todo</Link>
        </Wrapper>
    )
}

export default PageBTN

const Wrapper = styled.div`
  height: 50px;
  background-color: #8a94eb;
  ${flexCenter}
  font-weight: 600;
`;
