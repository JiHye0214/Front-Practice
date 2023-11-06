import { css, styled } from "styled-components";

const TDButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <Button 
        variant={variant} 
        size={size} 
        shape={shape} 
        {...rest}>
      {children}
    </Button>
  );
};

export default TDButton;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.text.white};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
  "primary-text": css`
    background: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  `,
};

const sizeCSS = {
  small: css`
    width: 150px;
    height: 30px;;
    `,
  medium: css`
  width: 250px;
  height: 50px;;
  `,
  full: css`
    width: 100%;
    aspect-ratio: 8 / 1; // 종횡비 가로 8 세로 1
  `,
};
// variantCSS['primary']

const shapeCSS = {
  default: css``,
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 15px;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.7;
  }
`;
