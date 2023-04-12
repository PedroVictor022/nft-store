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
        <p>Pergun</p>
      </Navbar>
    </ContainerHeader>
  )
}

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;