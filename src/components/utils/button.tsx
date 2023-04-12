import styled from "styled-components"

type ButtonProps = {
  children: any, 
  widthButton?: string | number;
}

export const Button = ({children, widthButton}: ButtonProps) => {
  return <ButtonComponent style={{ width: widthButton }}>{ children }</ButtonComponent>
}

const ButtonComponent = styled.button`
  background: linear-gradient(45deg, orange, yellow);
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 3px;
  font-size:20px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;  
`;
