import styled from "styled-components"
import logo from "../../assets/logo.png"
export const Header = () => {
  return (
    <ContainerHeader>
      <img src={logo} alt="Logo Landing Page" />
      <Navbar>
        <p>Ínicio</p>
        <p>NFT</p>
        <p>Colecionadores</p>
        <p>Perguntas</p>
      </Navbar>
    </ContainerHeader>
  )
}

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3rem;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  margin-bottom: 0.7rem;

  color: #fefefe;
  p {
    cursor: pointer;
  }

  @media (max-width: 800px) {   
    display: none;
  }
`;