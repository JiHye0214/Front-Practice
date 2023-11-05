import styled from "styled-components";
import { flexCenter } from "../styles/common";

const Footer = () => {
  return (
    <Wrapper>
        <h1>Footer</h1>
    </Wrapper>
  )
};
export default Footer;

const Wrapper = styled.div`
    height: 100px;
    padding: 20px;
    color: white;
    ${flexCenter}
    background-color: black;
`