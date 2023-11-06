import styled from "styled-components"
import TDButton from "../../../components/button";
import { flexCenter } from "../../../styles/common";

const Modal = ({ opacity }) => {
    
    return (
        <Wrapper>
            <h1>모달창입니다</h1>
            <button className="mainModal" >창 닫기</button>
        </Wrapper>
    )
}

export default Modal;

const opacityCSS = {
    default : css`opacity: 1;`,
    invisible : css`opacity: 0;`,
}

const Wrapper = styled.div`
    height: calc(100% - 50px);
    z-index: 0;
    ${flexCenter}
    background-color: rgba(224,224,224,0.5);
    ${({opacity}) => opacityCSS[opacity]}
`

// ㅅㅂ않곳러냐ㅓㄹ더저 ㄹ젇러