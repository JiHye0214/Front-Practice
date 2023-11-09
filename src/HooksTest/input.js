// 입력한 거 보이게 하기
// 배열 + useState
import { useState } from "react";
import styled from "styled-components";

const InputState = () => {
  const [arr, setArr] = useState([]);
  const [input, setinput] = useState("");

  const inputShow = (e) => {
    setinput(e.target.value);
    // console.log(input) // 적을 때마다 계속 바뀜
  };

  const addBTN = () => {
    // setFunc((prev) => !prev) 약간 이런 식으로만 써왔는데
    // setFunc((prev) => {return [new, ...prev]}) 배열에서는 추가하기 전(prev)을 불러와서 return에다가 새로운 거랑 합치는 용으로도 사용할 수 있구나~

    // prev의 역할은 이전 값을 불러오는 역할!
    // 따로 이전 값을 저장해서 어쩌고저쩌고 하지 않아도
    // prev만으로 바로 전 값을 불러올 수 있음 !!!
    // 불러와서 활용하는 방법을 잘 익혀둬야겠다.
    // boolean에서는 간단히 toggle 역할
    // array에서는 push 역할도 해 주네

    setArr((prev) => {
      console.log([input, ...prev]);
      return [input, ...prev];
    });
  };

  return (
    <Wrapper>
      <h1>input + save</h1>
      <div>
        <input type="text" value={input} onChange={inputShow}></input>
        <button onClick={addBTN}>add</button>
        {/* 여기서 UI에 보여지는 li는 "추가"되는 게 아니라 
            버튼을 눌러서 arr 값이 바뀌면서 rerender 되면서 "전체"를 보여주는 거임 ok?
            난 여태까지 계속 어떻게 이렇게 쳤는데 추가가 되지? 생각했음 ㅅㅂ */}
        {arr.map((name, index) => {
          return <li key={index}>{name}</li>;
          // ⭐ map return -> key 필수!! : Each child in a list should have a unique "key" prop.
        })}
      </div>
    </Wrapper>
  );
};

export default InputState;

const Wrapper = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
