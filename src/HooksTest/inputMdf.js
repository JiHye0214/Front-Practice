import { useEffect, useRef } from "react";
import styled from "styled-components";

const InputMdf = () => {
  // 백엔드에서 했던
  // p태그 클릭해서 입력 후 수정 구현하기
  const first1Ref = useRef();
  const second2Ref = useRef();

  const firstRef = useRef();
  const secondRef = useRef();

  useEffect(() => {
    // #1 시작하자마자 input 없애버리기
    firstRef.current.style = "display : none";
    secondRef.current.style = "display : none";
  }, []);

  const onClickName = () => {
    firstRef.current.style = "display : block";
    first1Ref.current.style = "display : none";
  };
  const onClickNation = () => {
    secondRef.current.style = "display : block";
    second2Ref.current.style = "display : none";
  };

  return (
    <Wrapper>
      <Table>
        <tr>
          <Th>이름</Th>
          <Th>국적</Th>
        </tr>
        <tr>
          <Td>
            <p onClick={() => onClickName()} ref={first1Ref}>
              홍길동
            </p>
            <input type="text" ref={firstRef} value={"홍길동"}></input>
          </Td>
          <Td>
            <p onClick={() => onClickNation()} ref={second2Ref}>
              대한민국
            </p>
            <input type="text" ref={secondRef} value={"대한민국"}></input>
          </Td>
        </tr>
      </Table>
    </Wrapper>
  );
};

export default InputMdf;

const Wrapper = styled.div`
  background-color: lightgray;
  width: 600px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table = styled.table`
  border: 1px solid;
`;

const Th = styled.th`
  border: 1px solid;
  background-color: orange;
  padding: 5px 20px;
`;

const Td = styled.td`
  border: 1px solid;
  background-color: steelblue;
  width: 200px;
  height: 55px;
  text-align: center;
`;
