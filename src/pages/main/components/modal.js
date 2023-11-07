import {styled,css} from "styled-components"
import { flexCenter } from "../../../styles/common";

const Modal = ({ isPageNum2, opacity }) => {
    
    return (
        <Wrapper>
            <h1>모달창입니다</h1>
            <button>창 닫기</button>
        </Wrapper>
    )
}

export default Modal;

const opacityCSS = {
    default : css`display:none`,
    visible : css`display:block`,
}

const Wrapper = styled.div`
    height: calc(100% - 50px);
    ${flexCenter}
    background-color: rgba(214, 218, 255, 0.7);
    ${({opacity}) => opacityCSS[opacity]}
`

// ㅅㅂ않곳러냐ㅓㄹ더저 ㄹ젇러