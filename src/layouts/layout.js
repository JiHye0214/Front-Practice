import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";
import PageBTN from "./section";
// outlet - 중첩라우팅 : 경로와 일치하는 자식 보여주기

const RootLayout = () => {
  return (
    <>
      <Header />
      <PageBTN/>
        <Outlet />
        {/* header와 footer 사이에 넣어주면 
                            route에서 children 배열에 넣은 객체 중에 
                            일치하는 것만 나타남 */}
      <Footer />
    </>
  );
};

export default RootLayout;