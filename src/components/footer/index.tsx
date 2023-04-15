import styled from "styled-components"

import logo from "../../assets/logo.png"

export const  Footer = () => {
  return (
    <FooterContainer>
      <span>Direitos reservados </span>
      <img src={logo} alt="Logo" />
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background-color: #101010;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:2rem 0rem;
  gap: 30px;
  img {
    margin-top: 10px;
    width: 100px;
  }
`;