import { flexCenter } from "../styles/common";
import Footer from "./footer";
import Header from "./header";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
// outlet - 중첩라우팅 : 경로와 일치하는 자식 보여주기

const RootLayout = () => {
  return (
    <>
      <Header />
        <Wrapper>
            <Link to="/home">Home</Link> | <Link to="/main">Main</Link> |{" "}
            <Link to="/todo">Todo</Link>
        </Wrapper>
        <Outlet />
        {/* header와 footer 사이에 넣어주면 
                            route에서 children 배열에 넣은 객체 중에 
                            일치하는 것만 나타남 */}
      <Footer />
    </>
  );
};

export default RootLayout;

const Wrapper = styled.div`
  height: 50px;
  ${flexCenter}
`;
