import styled from "styled-components";
import { Button } from "../utils/button";

import nft from "../../assets/nft.png";

export const FirstSection = () => {
  return (
    <Container>
      <ContainerInfo>
        <h1>
          Descubra e o obtenha <SpecialText>obras de arte</SpecialText> digitais
          super raras
        </h1>
        <TextSection>
          O maior mercado NFT. Criação digital autêntica e verdadeiramente
          única. Assinado e emitido pelo criador, possibilitado pela tecnologia
          blockchain
        </TextSection>
        <Button widthButton={"200px"}>EXPLORAR</Button>
      </ContainerInfo>
      <ContainerImage>
        <img src={nft} alt="Imagem da NFT" />
      </ContainerImage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const ContainerInfo = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 56px;
    font-weight: 700;
  }

  @media (max-width: 1150px) {
    width: 65%;
    h1 {
      font-size: 40px;
    }
  }
`;
const ContainerImage = styled.div`
  width: 50%;
  background-color: red;

  @media (max-width: 1150px) {
    width: 35%;
    img {
      width: 310px;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
const SpecialText = styled.span`
  background: -webkit-linear-gradient(45deg, orange, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TextSection = styled.span`
  font-size: 20px;
  @media (max-width: 1150px) {
    font-size: 16px;
  }
`;
