import { styled } from "styled-components";
import { flexCenter } from "../styles/common";

// [ 하나의 입력 칸 코드 ] 

const FormInput = ({ label, containerStyle, ...inputProps }) => {

  return (
    <Wrapper style={containerStyle}>
      <Label>
        {label}
      </Label>
      <Input {...inputProps} />
    </Wrapper>
  );
};
export default FormInput;

const Wrapper = styled.div`
  ${flexCenter}
  position: relative;
  margin-bottom: 16px;
`;

const Input = styled.input`
  border: 1px solid #999;
  width: 100%;
  border-radius: 4px;
  height: 48px;
  padding-left: 16px;
  &::placeholder {
    text-align: center;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 16px;
  top: -6px;
  font-size: 12px;
  background-color: #fff;
  z-index: 100;
  padding: 0 4px;
`;
