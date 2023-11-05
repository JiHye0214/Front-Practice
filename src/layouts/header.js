import styled from "styled-components";
import { flexCenter } from "../styles/common";

const Header = () => {
  return (
    <Wrapper>
        <h1>HEADER</h1>
    </Wrapper>
  )
};
export default Header;

const Wrapper = styled.div`
    height: 100px;
    padding: 20px;
    color: white;
    ${flexCenter}
    background-color: black;
`